/* Affiche le contenu défini dans content.js. Normalement, rien à modifier ici. */
(function () {
  "use strict";

  var data = window.SITE_CONTENT;
  // Sans contenu (fichier absent ou erreur de syntaxe), la classe « no-js » reste en place
  // et la page affiche le message de secours avec les liens vers les padlets.
  if (!data) return;
  data.meta = data.meta || {};
  data.hero = data.hero || {};
  data.sections = data.sections || [];

  // ---------- Utilitaires ----------

  // Compatibilité avec les navigateurs anciens (NodeList.forEach, Element.closest).
  function each(list, fn) {
    Array.prototype.forEach.call(list, fn);
  }

  function closest(node, selector) {
    var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    while (node && node.nodeType === 1) {
      if (matches.call(node, selector)) return node;
      node = node.parentNode;
    }
    return null;
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value == null || value === false) return;
        if (key === "text") node.textContent = typo(value);
        else if (key === "html") node.innerHTML = value;
        else if (key === "className") node.className = value;
        else node.setAttribute(key, value === true ? "" : value);
      });
    }
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function icon(name) {
    var paths = {
      file: "M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V9h5.5L13 3.5ZM8 13h8v1.6H8V13Zm0 3.4h8V18H8v-1.6Z",
      mail: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.2V17h16V7.2l-8 5.3-8-5.3ZM5.3 7 12 11.4 18.7 7H5.3Z",
      pin: "M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11.5 2.5 2.5 0 0 0 12 6.5Z"
    };
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", "18");
    svg.setAttribute("height", "18");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", paths[name]);
    path.setAttribute("fill", "currentColor");
    svg.appendChild(path);
    return svg;
  }

  function newTabHint() {
    return el("span", { className: "visually-hidden", text: " (nouvel onglet)" });
  }

  // Typographie française, appliquée au texte (jamais aux adresses web) :
  // espace fine insécable avant « : ; ? ! » et dans les guillemets ;
  // pas de retour à la ligne dans « 2026-2027 », « 1 h 45 », « 31 octobre », « 48 heures ».
  function typo(str) {
    return String(str)
      .replace(/ ([:;?!»])/g, " $1")
      .replace(/« /g, "« ")
      .replace(/(\d)-(\d)/g, "$1-⁠$2")
      .replace(/(\d) h (\d)/g, "$1 h $2")
      .replace(/(\d) (?=[A-Za-zÀ-ÿ])/g, "$1 ");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function safeUrl(url) {
    var value = String(url || "").trim();
    if (/^(https?:|mailto:|#)/i.test(value)) return value;
    // Chemins relatifs vers les documents du site (assets/docs/…).
    if (/^[\w-]+(\/[\w.-]+)+$/.test(value)) return value;
    return null;
  }

  function isExternal(url) {
    if (!/^https?:/i.test(url)) return false;
    try { return new URL(url).host !== location.host; } catch (e) { return true; }
  }

  // Adresses web et e-mail repérées dans le texte brut, avant tout échappement.
  var AUTO_LINK = /(https?:\/\/[^\s<>"'«»]*[^\s<>"'«».,;:!?)])|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

  function formatText(str) {
    return escapeHtml(typo(str)).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  // Mise en forme légère : **gras**, liens et adresses e-mail automatiques.
  function inline(str) {
    var source = String(str);
    var html = "";
    var last = 0;
    var m;
    AUTO_LINK.lastIndex = 0;
    while ((m = AUTO_LINK.exec(source))) {
      html += formatText(source.slice(last, m.index));
      if (m[2]) {
        html += '<a href="mailto:' + escapeHtml(m[2]) + '">' + escapeHtml(m[2]) + "</a>";
      } else {
        html += '<a href="' + escapeHtml(m[1]) + '" target="_blank" rel="noopener">' + escapeHtml(m[1]) +
          '<span class="visually-hidden"> (nouvel onglet)</span></a>';
      }
      last = AUTO_LINK.lastIndex;
    }
    return html + formatText(source.slice(last));
  }

  // Paragraphes séparés par une ligne vide ; lignes « - » en liste à puces, « 1. » en liste numérotée.
  function richText(text, className) {
    var wrap = el("div", { className: "rich" + (className ? " " + className : "") });
    String(text || "")
      .trim()
      .split(/\n\s*\n/)
      .forEach(function (block) {
        var list = null;
        var listType = null;
        var para = [];
        function flushPara() {
          if (para.length) {
            wrap.appendChild(el("p", { html: para.map(inline).join("<br>") }));
            para = [];
          }
        }
        block.split("\n").forEach(function (line) {
          var bullet = line.match(/^\s*[-•]\s+(.*)$/);
          var numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
          var m = bullet || numbered;
          if (m) {
            var type = bullet ? "ul" : "ol";
            flushPara();
            if (!list || listType !== type) {
              list = el(type);
              listType = type;
              wrap.appendChild(list);
            }
            list.appendChild(el("li", { html: inline(m[1]) }));
          } else {
            list = null;
            if (line.trim()) para.push(line.trim());
          }
        });
        flushPara();
      });
    return wrap;
  }

  function linkList(links) {
    var valid = (links || []).filter(function (l) { return l && safeUrl(l.url); });
    if (!valid.length) return null;
    return el("ul", { className: "link-list" }, valid.map(function (l) {
      var url = safeUrl(l.url);
      var ext = isExternal(url);
      var mail = /^mailto:/i.test(url);
      return el("li", null, [
        el("a", {
          href: url,
          target: ext ? "_blank" : null,
          rel: ext ? "noopener" : null,
          className: "link-pill"
        }, [
          mail ? icon("mail") : null,
          el("span", { text: l.label || url }),
          ext ? newTabHint() : null,
          ext ? el("span", { className: "link-arrow", "aria-hidden": "true", text: "↗" }) : null
        ])
      ]);
    }));
  }

  function docButton(doc, title) {
    var url = safeUrl(doc.file);
    if (!url) return null;
    var meta = ["PDF"];
    if (doc.pages) meta.push(doc.pages + (doc.pages > 1 ? " pages" : " page"));
    if (doc.size) meta.push(doc.size);
    return el("a", { className: "doc-link", href: url, target: "_blank", rel: "noopener" }, [
      el("span", { className: "doc-icon" }, [icon("file")]),
      el("span", { className: "doc-text" }, [
        el("span", { className: "doc-action", text: doc.label || "Ouvrir le document" }),
        // Le titre de la carte, lu par les lecteurs d'écran : chaque bouton a ainsi un nom distinct.
        title ? el("span", { className: "visually-hidden", text: " : " + title + ", " }) : null,
        el("span", { className: "doc-meta", text: meta.join(" · ") })
      ]),
      newTabHint()
    ]);
  }

  function pointList(points) {
    if (!points || !points.length) return null;
    return el("ul", { className: "points" }, points.map(function (p) {
      return el("li", { html: inline(p) });
    }));
  }

  function dateList(dates) {
    if (!dates || !dates.length) return null;
    return el("dl", { className: "dates" }, dates.map(function (d) {
      return el("div", { className: "date-item" }, [el("dt", { text: d.label }), el("dd", { text: d.date })]);
    }));
  }

  function get(path) {
    return path.split(".").reduce(function (obj, key) { return obj ? obj[key] : undefined; }, data);
  }

  // ---------- Rendu des blocs ----------

  function renderCard(item) {
    return el("article", { className: "card" + (item.wide ? " card-wide" : ""), id: item.id || null }, [
      item.tag ? el("div", { className: "card-head" }, [el("span", { className: "badge", text: item.tag })]) : null,
      el("h4", { className: "card-title", text: item.title }),
      item.text ? richText(item.text) : null,
      pointList(item.points),
      dateList(item.dates),
      item.note ? el("p", { className: "card-note", text: item.note }) : null,
      linkList(item.links),
      item.doc ? docButton(item.doc, item.title) : null
    ]);
  }

  function renderLevels(group) {
    return el("ul", { className: "levels" }, (group.items || []).map(function (item) {
      var url = safeUrl(item.url);
      if (!url) return null;
      var code = item.code || url.split("/").pop();
      return el("li", null, [
        el("a", {
          className: "level-tile",
          href: url,
          target: "_blank",
          rel: "noopener",
          // Le nom accessible commence par le libellé visible (« 6e », « Tle »…).
          "aria-label": item.label + (item.title ? " : " + item.title : "") + ", code " + code + " (nouvel onglet)"
        }, [
          el("span", { className: "level-label", text: item.label }),
          el("span", { className: "level-caption", text: group.itemCaption || "" }),
          el("span", { className: "level-code" }, [
            el("span", { text: "Code " }),
            el("strong", { text: code })
          ]),
          el("span", { className: "level-arrow", "aria-hidden": "true", text: "↗" })
        ])
      ]);
    }));
  }

  function renderTimeline(group) {
    return el("ol", { className: "timeline" }, (group.items || []).map(function (item) {
      return el("li", null, [
        el("span", { className: "timeline-when", text: item.when }),
        richText(item.text, "timeline-text")
      ]);
    }));
  }

  function renderGroup(group, id) {
    var body;
    if (group.layout === "levels") body = renderLevels(group);
    else if (group.layout === "timeline") body = renderTimeline(group);
    else body = el("div", { className: "card-grid" }, (group.items || []).map(renderCard));

    return el("div", { className: "group", id: id }, [
      group.title ? el("h3", { className: "group-title", text: group.title }) : null,
      group.intro ? el("p", { className: "group-intro", text: group.intro }) : null,
      body,
      group.after ? el("div", { className: "group-after" }, group.after.map(renderCard)) : null
    ]);
  }

  function renderCallout(callout) {
    return el("div", { className: "callout" }, [
      callout.title ? el("p", { className: "callout-title", text: callout.title }) : null,
      richText(callout.text, "callout-text"),
      callout.highlight ? el("p", { className: "callout-highlight" }, [
        el("span", { className: "callout-highlight-label" }, [icon("pin"), el("span", { text: callout.highlight.label + " :" })]),
        el("span", { text: " " + callout.highlight.text })
      ]) : null
    ]);
  }

  function renderSection(section) {
    var titleId = section.id + "-titre";
    var groups = section.groups || [];

    var head = el("header", { className: "section-head" }, [
      el("p", { className: "eyebrow" }, [
        section.number ? el("span", { className: "eyebrow-num", text: section.number }) : null,
        el("span", { text: section.eyebrow || "" })
      ]),
      el("h2", { id: titleId, text: section.title }),
      section.lead ? el("p", { className: "section-lead", text: section.lead }) : null
    ]);

    var chips = null;
    if (groups.length > 1) {
      chips = el("nav", { className: "chips", "aria-label": "Rubriques : " + section.title },
        groups.map(function (g, i) {
          return g.title ? el("a", { className: "chip", href: "#" + (g.id || section.id + "-g" + (i + 1)), text: g.title }) : null;
        })
      );
    }

    var body = el("div", { className: "section-body" }, groups.map(function (g, i) {
      return renderGroup(g, g.id || section.id + "-g" + (i + 1));
    }));

    var footer = null;
    var srcUrl = section.source && safeUrl(section.source.url);
    if (srcUrl) {
      footer = el("p", { className: "section-source" }, [
        el("span", { text: "Source : " }),
        el("a", { href: srcUrl, target: "_blank", rel: "noopener" }, [
          el("span", { text: section.source.label }),
          newTabHint()
        ]),
        section.source.author ? el("span", { text: ", par " + section.source.author }) : null
      ]);
    }

    return el("section", {
      className: "section accent-" + (section.accent || "rentree"),
      id: section.id,
      "aria-labelledby": titleId
    }, [el("div", { className: "container" }, [
      head,
      section.callout ? renderCallout(section.callout) : null,
      chips,
      body,
      footer
    ])]);
  }

  function renderHero() {
    var panel = document.getElementById("hero-panel");
    data.sections.forEach(function (s) {
      panel.appendChild(el("a", { className: "quick-tile accent-" + (s.accent || "rentree"), href: "#" + s.id }, [
        el("span", { className: "quick-num", text: s.number || "" }),
        el("span", { className: "quick-body" }, [
          el("span", { className: "quick-title", text: s.title }),
          s.summary ? el("span", { className: "quick-meta", text: s.summary }) : null
        ]),
        el("span", { className: "quick-arrow", "aria-hidden": "true", text: "→" })
      ]));
    });

    var quick = data.hero.quickLinks || [];
    if (quick.length) {
      panel.appendChild(el("div", { className: "quick-links" }, [
        el("p", { className: "quick-links-title", text: "Accès rapide" }),
        el("ul", null, quick.map(function (q) {
          var href = q && safeUrl(q.href);
          return href ? el("li", null, [el("a", { href: href, text: q.label })]) : null;
        }))
      ]));
    }
  }

  function renderNav() {
    var list = document.getElementById("nav-list");
    data.sections.forEach(function (s) {
      list.appendChild(el("li", null, [el("a", { href: "#" + s.id, text: s.navLabel || s.title })]));
    });
  }

  function renderFooter() {
    var sources = document.getElementById("footer-sources");
    data.sections.forEach(function (s) {
      var url = s.source && safeUrl(s.source.url);
      if (!url) return;
      sources.appendChild(el("li", null, [
        el("a", { href: url, target: "_blank", rel: "noopener" }, [
          el("span", { text: s.source.label }),
          newTabHint()
        ]),
        s.source.author ? el("span", { className: "footer-author", text: " · " + s.source.author }) : null
      ]));
    });
    if (data.meta.updated) {
      var d = new Date(data.meta.updated + "T12:00:00");
      var label = isNaN(d) ? data.meta.updated : d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
      document.getElementById("footer-updated").textContent = typo("Mise à jour : " + label);
    }
  }

  function bindText() {
    each(document.querySelectorAll("[data-bind]"), function (node) {
      var value = get(node.getAttribute("data-bind"));
      if (value != null) node.textContent = typo(value);
    });
  }

  // ---------- Interactions ----------

  function toast(message) {
    var t = document.getElementById("toast");
    t.textContent = message;
    t.classList.add("is-visible");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () {
      t.classList.remove("is-visible");
      setTimeout(function () { t.textContent = ""; }, 250);
    }, 2600);
  }

  function copyLink(url) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(
        function () { toast("Lien copié dans le presse-papiers"); },
        function () { window.prompt("Copiez le lien de la page :", url); }
      );
    } else {
      window.prompt("Copiez le lien de la page :", url);
    }
  }

  function share() {
    var url = location.href.split("#")[0];
    if (navigator.share) {
      navigator.share({ title: document.title, url: url }).catch(function (err) {
        // Partage annulé par l'utilisateur : rien à faire. Autre refus : on propose de copier le lien.
        if (!err || err.name !== "AbortError") copyLink(url);
      });
    } else {
      copyLink(url);
    }
  }

  function setupInteractions() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");

    function isOpen() {
      return nav.classList.contains("is-open");
    }
    function closeNav() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
    toggle.addEventListener("click", function () {
      var open = !isOpen();
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", function (e) {
      if (closest(e.target, "a")) closeNav();
    });
    // Le menu mobile se referme quand le focus le quitte (tabulation au-delà du dernier lien).
    nav.addEventListener("focusout", function (e) {
      if (isOpen() && e.relatedTarget && !nav.contains(e.relatedTarget) && e.relatedTarget !== toggle) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if ((e.key === "Escape" || e.key === "Esc") && isOpen()) {
        var focusInside = nav.contains(document.activeElement);
        closeNav();
        if (focusInside) toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      // Un toucher en dehors du menu ouvert le referme.
      if (isOpen() && !closest(e.target, ".site-nav") && !closest(e.target, ".nav-toggle")) closeNav();

      var btn = closest(e.target, "[data-action]");
      if (!btn) return;
      var action = btn.getAttribute("data-action");
      if (action === "print") window.print();
      if (action === "share") share();
      // Sans option : le navigateur applique scroll-behavior (animation désactivée si l'utilisateur le demande).
      if (action === "top") window.scrollTo(0, 0);
    });

    var toTop = document.querySelector(".to-top");
    function onScroll() {
      var y = window.pageYOffset;
      header.classList.toggle("is-scrolled", y > 8);
      toTop.hidden = y < 600;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Surligne la rubrique en cours de lecture dans le menu.
    if ("IntersectionObserver" in window) {
      var links = {};
      each(nav.querySelectorAll("a"), function (a) { links[a.getAttribute("href").slice(1)] = a; });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var link = links[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
            link.setAttribute("aria-current", "true");
          } else if (link.hasAttribute("aria-current") && entry.boundingClientRect.top > 0) {
            // Remonté au-dessus de la première rubrique : plus aucune rubrique active.
            link.removeAttribute("aria-current");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      data.sections.forEach(function (s) {
        var node = document.getElementById(s.id);
        if (node) observer.observe(node);
      });
    }
  }

  // ---------- Démarrage ----------

  try {
    bindText();
    renderNav();
    renderHero();
    var container = document.getElementById("sections");
    data.sections.forEach(function (s) { container.appendChild(renderSection(s)); });
    renderFooter();
    // Tout s'est affiché : on retire le message de secours.
    document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, "").trim();
  } catch (err) {
    if (window.console) console.error(err);
  }
  setupInteractions();
})();
