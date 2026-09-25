/* Affiche le contenu défini dans content.js. Normalement, rien à modifier ici. */
(function () {
  "use strict";

  var data = window.SITE_CONTENT;
  if (!data) return;

  // ---------- Utilitaires ----------

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value == null || value === false) return;
        if (key === "text") node.textContent = value;
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
    return /^(https?:|mailto:|tel:|#)/i.test(value) ? value : null;
  }

  function isExternal(url) {
    if (!/^https?:/i.test(url)) return false;
    try { return new URL(url).host !== location.host; } catch (e) { return true; }
  }

  // Mise en forme légère : **gras** et liens automatiques, appliqués sur du texte déjà échappé.
  function inline(str) {
    return escapeHtml(str)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)»])/g, function (url) {
        return '<a href="' + url + '" target="_blank" rel="noopener">' + url + "</a>";
      });
  }

  // Paragraphes séparés par une ligne vide ; lignes « - » ou « • » en liste.
  function richText(text) {
    var wrap = el("div", { className: "rich" });
    String(text || "")
      .trim()
      .split(/\n\s*\n/)
      .forEach(function (block) {
        var lines = block.split("\n");
        var list = null;
        var para = [];
        function flushPara() {
          if (para.length) {
            wrap.appendChild(el("p", { html: para.map(inline).join("<br>") }));
            para = [];
          }
        }
        lines.forEach(function (line) {
          var m = line.match(/^\s*[-•]\s+(.*)$/);
          if (m) {
            flushPara();
            if (!list) {
              list = el("ul");
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
    var valid = (links || []).filter(function (l) { return safeUrl(l.url); });
    if (!valid.length) return null;
    return el("ul", { className: "link-list" }, valid.map(function (l) {
      var url = safeUrl(l.url);
      var ext = isExternal(url);
      return el("li", null, [
        el("a", {
          href: url,
          target: ext ? "_blank" : null,
          rel: ext ? "noopener" : null,
          className: "link-pill"
        }, [
          el("span", { text: l.label || url }),
          el("span", { className: "link-arrow", "aria-hidden": "true", text: ext ? "↗" : "→" })
        ])
      ]);
    }));
  }

  function placeholderBadge(item) {
    return item.placeholder ? el("span", { className: "badge badge-todo", text: "À compléter" }) : null;
  }

  function get(path) {
    return path.split(".").reduce(function (obj, key) { return obj ? obj[key] : undefined; }, data);
  }

  // ---------- Rendu ----------

  function renderCards(section) {
    var body = el("div", { className: "section-body" });
    var groups = section.groups || [];

    if (groups.length > 1) {
      body.appendChild(el("nav", { className: "chips", "aria-label": "Rubriques : " + section.title },
        groups.map(function (g, i) {
          return el("a", { className: "chip", href: "#" + section.id + "-g" + (i + 1), text: g.title });
        })
      ));
    }

    groups.forEach(function (group, gi) {
      var gid = section.id + "-g" + (gi + 1);
      var grid = el("div", { className: "card-grid" }, (group.items || []).map(function (item) {
        return el("article", { className: "card" + (item.placeholder ? " is-placeholder" : "") }, [
          el("div", { className: "card-head" }, [
            item.tag ? el("span", { className: "badge", text: item.tag }) : null,
            placeholderBadge(item)
          ]),
          el("h4", { className: "card-title", text: item.title }),
          item.text ? richText(item.text) : null,
          linkList(item.links)
        ]);
      }));
      body.appendChild(el("div", { className: "group", id: gid }, [
        group.title ? el("h3", { className: "group-title", text: group.title }) : null,
        group.intro ? el("p", { className: "group-intro", text: group.intro }) : null,
        grid
      ]));
    });

    return body;
  }

  function renderSteps(section) {
    var steps = section.steps || [];
    var list = el("ol", { className: "steps" }, steps.map(function (step, i) {
      return el("li", { className: "step" + (step.placeholder ? " is-placeholder" : "") }, [
        el("div", { className: "step-marker", "aria-hidden": "true", text: String(i + 1) }),
        el("div", { className: "step-card" }, [
          el("div", { className: "card-head" }, [
            el("span", { className: "step-label", text: "Étape " + (i + 1) }),
            step.duration ? el("span", { className: "badge", text: step.duration }) : null,
            placeholderBadge(step)
          ]),
          el("h3", { className: "step-title", text: step.title }),
          step.text ? richText(step.text) : null,
          linkList(step.links)
        ])
      ]);
    }));
    return el("div", { className: "section-body" }, [list]);
  }

  function renderSection(section) {
    var titleId = section.id + "-titre";
    var head = el("header", { className: "section-head" }, [
      el("p", { className: "eyebrow" }, [
        section.number ? el("span", { className: "eyebrow-num", text: section.number }) : null,
        el("span", { text: section.eyebrow || "" })
      ]),
      el("h2", { id: titleId, text: section.title }),
      section.lead ? el("p", { className: "section-lead", text: section.lead }) : null
    ]);

    var body = section.layout === "steps" ? renderSteps(section) : renderCards(section);

    var footer = null;
    var srcUrl = section.source && safeUrl(section.source.url);
    if (srcUrl) {
      footer = el("p", { className: "section-source" }, [
        el("span", { text: "Source : " }),
        el("a", { href: srcUrl, target: "_blank", rel: "noopener", text: section.source.label })
      ]);
    }

    return el("section", {
      className: "section accent-" + (section.accent || "rentree"),
      id: section.id,
      "aria-labelledby": titleId
    }, [el("div", { className: "container" }, [head, body, footer])]);
  }

  function renderHeroPanel() {
    var panel = document.getElementById("hero-panel");
    data.sections.forEach(function (s) {
      var n = s.layout === "steps"
        ? (s.steps || []).length
        : (s.groups || []).reduce(function (sum, g) { return sum + (g.items || []).length; }, 0);
      var count = n + " " + (s.layout === "steps" ? "étape" : "information") + (n > 1 ? "s" : "");
      panel.appendChild(el("a", { className: "quick-tile accent-" + (s.accent || "rentree"), href: "#" + s.id }, [
        el("span", { className: "quick-num", text: s.number || "" }),
        el("span", { className: "quick-body" }, [
          el("span", { className: "quick-title", text: s.title }),
          el("span", { className: "quick-meta", text: count })
        ]),
        el("span", { className: "quick-arrow", "aria-hidden": "true", text: "→" })
      ]));
    });
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
      sources.appendChild(el("li", null, [el("a", { href: url, target: "_blank", rel: "noopener", text: s.source.label })]));
    });
    if (data.meta.updated) {
      var d = new Date(data.meta.updated + "T12:00:00");
      var label = isNaN(d) ? data.meta.updated : d.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
      document.getElementById("footer-updated").textContent = "Mise à jour : " + label;
    }
  }

  function bindText() {
    document.querySelectorAll("[data-bind]").forEach(function (node) {
      var value = get(node.getAttribute("data-bind"));
      if (value != null) node.textContent = value;
    });
  }

  // ---------- Interactions ----------

  function toast(message) {
    var t = document.getElementById("toast");
    t.textContent = message;
    t.classList.add("is-visible");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { t.classList.remove("is-visible"); }, 2600);
  }

  function share() {
    var payload = { title: document.title, url: location.href.split("#")[0] };
    if (navigator.share) {
      navigator.share(payload).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(payload.url).then(
        function () { toast("Lien copié dans le presse-papiers"); },
        function () { toast(payload.url); }
      );
    } else {
      toast(payload.url);
    }
  }

  function setupInteractions() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");

    function closeNav() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-action]");
      if (!btn) return;
      var action = btn.getAttribute("data-action");
      if (action === "print") window.print();
      if (action === "share") share();
      if (action === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    });

    var toTop = document.querySelector(".to-top");
    function onScroll() {
      var y = window.scrollY;
      header.classList.toggle("is-scrolled", y > 8);
      toTop.hidden = y < 600;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Surligne la rubrique en cours de lecture dans le menu.
    if ("IntersectionObserver" in window) {
      var links = {};
      nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var link = links[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
            link.setAttribute("aria-current", "true");
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

  bindText();
  renderNav();
  renderHeroPanel();
  var container = document.getElementById("sections");
  data.sections.forEach(function (s) { container.appendChild(renderSection(s)); });
  renderFooter();
  if (data.meta.draft) document.getElementById("draft-banner").hidden = false;
  setupInteractions();

  // Arrivée directe sur une ancre (#rentree…) : le contenu vient d'être généré, on s'y replace.
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }
})();
