/*
 * CONTENU DU SITE : c'est le seul fichier à modifier pour mettre à jour les textes.
 * Le mode d'emploi (types de blocs, mise en forme des textes) est dans README.md.
 */

window.SITE_CONTENT = {
  meta: {
    school: "Lycée Montaigne",
    title: "Espace parents",
    footerNote: "Page d’information à destination des familles du Lycée Montaigne.",
    credit: "Conception et réalisation du site : Eddy Bachaalany",
    updated: "2026-09-25"
  },

  hero: {
    eyebrow: "Année scolaire 2026-2027",
    title: "Toutes les informations utiles aux familles, au même endroit",
    lead: "Retrouvez ici les documents de la rentrée 2026-2027, les campagnes Pix de votre enfant et le parcours « IA & parentalité » pour l’accompagner dans le numérique.",
    quickLinks: [
      { label: "Calendrier scolaire", href: "#doc-calendrier" },
      { label: "École élémentaire", href: "#rentree-elementaire" },
      { label: "Collège et lycée", href: "#rentree-college-lycee" },
      { label: "Campagnes Pix 2026-2027", href: "#ia-campagnes" },
      { label: "Outils numériques", href: "#doc-outils-numeriques" }
    ]
  },

  sections: [
    // ------------------------------------------------------------------
    // 01 · Padlet « Bonne rentrée 2026 »
    // ------------------------------------------------------------------
    {
      id: "rentree",
      accent: "rentree",
      number: "01",
      navLabel: "Rentrée 2026",
      eyebrow: "Rentrée 2026-2027",
      title: "Bonne rentrée 2026",
      lead: "Les documents de référence de l’année : calendrier, chartes, règlements intérieurs, consignes de rentrée et services aux familles.",
      summary: "Calendrier, règlements, consignes de rentrée, BCD, CCC et démarches",
      source: {
        label: "Padlet « Bonne rentrée 2026 »",
        url: "https://padlet.com/micha_semaan/bonne-rentree-2026-s02374j2htrj9svmdi3m",
        author: "Micheline Semaan"
      },
      groups: [
        {
          id: "rentree-infos",
          title: "Informations générales",
          items: [
            {
              id: "doc-calendrier",
              title: "Calendrier scolaire 2026-2027",
              wide: true,
              doc: { file: "assets/docs/calendrier-scolaire-2026-2027.pdf", pages: 1, size: "183 Ko" }
            },
            {
              title: "Charte des parents",
              doc: { file: "assets/docs/charte-des-parents-2026-2027.pdf", pages: 2, size: "333 Ko" }
            },
            {
              title: "Pour un dialogue réussi",
              doc: { file: "assets/docs/dialogue-parents-enseignants-2026-2027.pdf", pages: 2, size: "379 Ko" }
            },
            {
              title: "Politique d’enseignement de la langue arabe",
              doc: { file: "assets/docs/politique-enseignement-arabe-2026-2027.pdf", pages: 2, size: "324 Ko" }
            }
          ]
        },
        {
          id: "rentree-elementaire",
          title: "École élémentaire (1er degré)",
          items: [
            {
              title: "Règlement intérieur élémentaire 2026-2027",
              doc: { file: "assets/docs/reglement-interieur-elementaire-2026-2027.pdf", pages: 19, size: "648 Ko" }
            },
            {
              title: "Consignes de rentrée élémentaire",
              doc: { file: "assets/docs/consignes-rentree-elementaire-2026.pdf", pages: 6, size: "394 Ko" }
            },
            {
              title: "Fonctionnement de la BCD",
              doc: { file: "assets/docs/bcd-presentation-2026-2027.pdf", pages: 1, size: "2,3 Mo" }
            },
            {
              title: "Prêt de livres de la BCD",
              doc: { file: "assets/docs/bcd-pret-livres-parents-2026-2027.pdf", pages: 2, size: "264 Ko" }
            }
          ]
        },
        {
          id: "rentree-college-lycee",
          title: "Collège et lycée (2nd degré)",
          items: [
            {
              title: "Règlement intérieur collège-lycée 2026-2027",
              doc: { file: "assets/docs/reglement-interieur-college-lycee-2026-2027.pdf", pages: 12, size: "916 Ko" }
            },
            {
              title: "Consignes de rentrée collège-lycée",
              doc: { file: "assets/docs/consignes-rentree-college-lycee-2026.pdf", pages: 3, size: "341 Ko" }
            },
            {
              title: "Le CCC : structure, rôle et activités",
              doc: { file: "assets/docs/ccc-note-de-service-2026-2027.pdf", pages: 1, size: "563 Ko" }
            },
            {
              title: "Prêt de livres du CCC",
              doc: { file: "assets/docs/ccc-pret-livres-2026-2027.pdf", pages: 1, size: "509 Ko" }
            }
          ]
        },
        {
          id: "rentree-services",
          title: "Numérique et service financier",
          items: [
            {
              id: "doc-outils-numeriques",
              tag: "Numérique",
              title: "Les outils numériques aux parents",
              text: "Accès direct aux tutoriels des différents outils numériques (Pronote, Office, Teams…).",
              doc: { file: "assets/docs/outils-numeriques-parents.pdf", pages: 2, size: "87 Ko" }
            },
            {
              tag: "Service financier",
              title: "Procédure de demande d’attestation",
              doc: { file: "assets/docs/demande-attestation-scolaire.pdf", pages: 1, size: "153 Ko" }
            }
          ]
        }
      ]
    },

    // ------------------------------------------------------------------
    // 02 · Padlet « IA, parentalité, parcours »
    // ------------------------------------------------------------------
    {
      id: "ia-parentalite",
      accent: "ia",
      number: "02",
      navLabel: "IA & parentalité",
      eyebrow: "Pix et intelligence artificielle",
      title: "IA, parentalité & parcours",
      lead: "Accompagner votre enfant avec Pix : parcours élèves, nouveautés IA, défis pour les parents, calendrier et aides pas-à-pas.",
      summary: "Campagnes Pix par niveau, parcours IA, ressources pour accompagner votre enfant",
      source: {
        label: "Padlet « IA, parentalité, parcours »",
        url: "https://padlet.com/ebechalani/lycee-montaigne-ia-parentalite-parcours-2omrt3gchvn7v0dp",
        author: "Eddy Bachaalany"
      },
      callout: {
        title: "Message d’accueil",
        text: "Bienvenue sur l’espace parents du Lycée Montaigne. Ici, vous trouverez l’essentiel pour accompagner votre enfant avec Pix : parcours élèves, nouveautés IA, défis pour les parents, calendrier et aides pas-à-pas.",
        highlight: {
          label: "Objectif",
          text: "que chaque famille se sente outillée pour « grandir avec le numérique »."
        }
      },
      groups: [
        {
          id: "ia-campagnes",
          title: "Parcours élèves 2026-2027",
          layout: "levels",
          intro: "Campagnes Pix de rentrée 2026-2027 : choisissez le niveau de votre enfant.",
          itemCaption: "Campagne de rentrée",
          items: [
            { label: "6e", title: "Campagne Pix de rentrée 6e 2026-2027", url: "https://app.pix.fr/campagnes/BCUPBS944" },
            { label: "5e", title: "Campagne Pix de rentrée 5e 2026-2027", url: "https://app.pix.fr/campagnes/TWTNUJ994" },
            { label: "4e", title: "Campagne Pix de rentrée 4e 2026-2027", url: "https://app.pix.fr/campagnes/XGSPFT887" },
            { label: "3e", title: "Campagne Pix de rentrée 3e 2026-2027", url: "https://app.pix.fr/campagnes/AWBEKX392" },
            { label: "2de", title: "Campagne Pix de rentrée 2de 2026-2027", url: "https://app.pix.fr/campagnes/NQTPPR936" },
            { label: "1re", title: "Campagne Pix de rentrée 1re 2026-2027", url: "https://app.pix.fr/campagnes/HGABTE272" },
            { label: "Tle", title: "Campagne Pix de rentrée Terminale 2026-2027", url: "https://app.pix.fr/campagnes/TMDWKQ353" }
          ],
          after: [
            {
              tag: "Pix élève",
              title: "Réinitialiser mon mot de passe Pix",
              doc: { file: "assets/docs/pix-reinitialiser-mot-de-passe.pdf", pages: 2, size: "342 Ko" }
            }
          ]
        },
        {
          id: "ia-calendrier",
          title: "Calendrier & attentes",
          layout: "timeline",
          items: [
            { when: "Sept.–oct. 2025", text: "Parcours de rentrée." },
            { when: "Toute l’année", text: "Entraînements ciblés selon les cours." },
            { when: "Dès janv. 2026", text: "Déploiement obligatoire des modules **Pix IA** (4e, 2nde, CAP) selon le calendrier ministériel." }
          ]
        },
        {
          id: "ia-pix",
          title: "Pix",
          items: [
            {
              title: "À quoi sert Pix ?",
              text: "Pix est le service public pour développer et évaluer les compétences numériques (collège-lycée) et guider aussi les familles.",
              links: [{ label: "Découvrir Pix", url: "https://pix.fr/" }]
            },
            {
              title: "La certification Pix",
              doc: { file: "assets/docs/pix-certification-flyer.pdf", pages: 2, size: "886 Ko", label: "Ouvrir le flyer" }
            }
          ]
        },
        {
          id: "ia-parcours",
          title: "Parcours IA",
          items: [
            {
              tag: "Nouveau",
              title: "Parcours « Pix IA »",
              text: "À la rentrée 2025, Pix lance des modules sur l’intelligence artificielle (IA) pour les collégiens et lycéens : compréhension des IA génératives, usages responsables, limites et sécurité.",
              links: [{ label: "L’actualité Pix de la rentrée (DANE de Lille)", url: "https://dane.site.ac-lille.fr/2025/09/10/lactualite-pix-pour-la-rentree-25-26/" }]
            },
            {
              title: "Pourquoi un parcours IA ?",
              text: "Les élèves utilisent déjà des outils d’IA ; l’objectif est d’acquérir des **compétences éclairées et éthiques** (droits d’auteur, données, biais, impacts)."
            }
          ]
        },
        {
          id: "ia-parents",
          title: "Accompagner son enfant",
          items: [
            {
              tag: "Défi pour les parents",
              title: "Défis rapides (10 min)",
              text: "Pix propose des **parcours thématiques courts** (sur smartphone, sans compte) pour aider les parents à accompagner l’usage du numérique à la maison.",
              links: [{ label: "Pix et la parentalité numérique (DANE de Grenoble)", url: "https://dane.web.ac-grenoble.fr/actualites-nationales/pix-et-la-parentalite-numerique" }]
            },
            {
              tag: "Accompagner son enfant",
              title: "Découvrez les parcours pour les parents",
              text: "1. Réagir face au cyberharcèlement\n2. Bien vivre le numérique à la maison\n3. À la découverte du contrôle parental !\n4. Les jeux vidéo : comment accompagner mon enfant ?\n5. Réseaux sociaux : les comprendre et les paramétrer\n6. Aider mon enfant dans ses recherches en ligne\n7. Le numérique à l’école",
              links: [{ label: "Accéder aux parcours sur pix.fr", url: "https://pix.fr/parents#slice-2" }]
            },
            {
              tag: "Bien grandir avec les écrans",
              title: "IA & écrans en famille",
              text: "Conseils « bien grandir avec les écrans », repères par âge, esprit critique, cadre d’usage.",
              links: [{ label: "Des repères pour chaque âge (education.gouv.fr)", url: "https://www.education.gouv.fr/bien-grandir-avec-les-ecrans-des-reperes-pour-chaque-age-451121" }]
            }
          ]
        }
      ]
    }
  ]
};
