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
      { label: "Maternelle et élémentaire", href: "#rentree-1er-degre" },
      { label: "Collège et lycée", href: "#rentree-2nd-degre" },
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
              text: "Calendrier de l’année scolaire 2026-2027, de septembre 2026 à juillet 2027 : dates de rentrée par niveau, congés de mi-trimestre, congé de Noël et du Nouvel An, et autres jours de congé.",
              dates: [
                { label: "Congé de mi-trimestre 1", date: "Du lundi 26 au samedi 31 octobre 2026" },
                { label: "Congé de Noël et du Nouvel An", date: "Du lundi 21 décembre 2026 au vendredi 1er janvier 2027" },
                { label: "Congé de mi-trimestre 2", date: "Du lundi 15 au vendredi 19 février 2027" },
                { label: "Congés scolaires", date: "Du lundi 12 au vendredi 16 avril 2027" }
              ],
              note: "Les autres jours de congé (fêtes religieuses et nationales) figurent sur le calendrier complet.",
              doc: { file: "assets/docs/calendrier-scolaire-2026-2027.pdf", pages: 1, size: "183 Ko", label: "Voir le calendrier complet" }
            },
            {
              title: "Charte des parents",
              text: "Charte qui définit la place, les droits et les devoirs des parents au Lycée Montaigne, ainsi que le rôle et les moyens du Comité des parents.",
              points: [
                "Les parents ont le devoir de veiller à l’assiduité de leur enfant.",
                "Droit d’être informé sur la scolarité : programmes, évaluations, règles de vie en classe.",
                "Les parents sont représentés aux conseils d’établissement, d’école et de classe.",
                "Chaque parent peut adhérer au Comité des parents lors des élections."
              ],
              doc: { file: "assets/docs/charte-des-parents-2026-2027.pdf", pages: 2, size: "333 Ko" }
            },
            {
              title: "Pour un dialogue réussi",
              text: "Principes et règles de conduite pour les échanges et les rencontres entre parents et enseignants, fondés sur le respect et la confiance mutuels.",
              points: [
                "Rencontre à la demande des parents ou sur invitation de l’enseignant.",
                "Réponse attendue sous 48 heures, de l’enseignant comme des parents.",
                "Horaire choisi en commun ; présence de l’élève conseillée, à déterminer selon les cas.",
                "Échanges confidentiels : l’enseignant garantit une totale discrétion."
              ],
              doc: { file: "assets/docs/dialogue-parents-enseignants-2026-2027.pdf", pages: 2, size: "379 Ko" }
            },
            {
              title: "Politique d’enseignement de la langue arabe",
              text: "Courrier de mars 2026 expliquant, cycle par cycle, l’enseignement de l’arabe, la dispense du programme libanais et le brevet à présenter (libanais ou DNB).",
              points: [
                "Cycle 1 (PS, MS, GS) : tous les enfants, même étrangers, suivent les cours d’arabe.",
                "Dès le CE2, dispense possible : étrangers, binationaux, 3 années consécutives hors Liban.",
                "Dispense officielle du programme libanais à présenter impérativement à la rentrée de 5e.",
                "Sans dispense : brevet libanais ; élèves dispensés ne le présentant pas : DNB."
              ],
              doc: { file: "assets/docs/politique-enseignement-arabe-2026-2027.pdf", pages: 2, size: "324 Ko" }
            }
          ]
        },
        {
          id: "rentree-1er-degre",
          title: "1er degré : maternelle et élémentaire",
          items: [
            {
              title: "Règlement intérieur élémentaire 2026-2027",
              text: "Règlement intérieur du 1er degré (maternelle et élémentaire) pour 2026-2027 : horaires, retards et absences, santé, tenue, comportement et sanctions. Il est remis aux parents pour signature.",
              points: [
                "Accueil dès 7h15, début des cours à 7h45 et sortie à 14h30, du lundi au vendredi.",
                "Retard prévu : prévenir l’administration par courriel ou via Pronote avant 8h.",
                "Absence de plus de 2 jours et maladie contagieuse : certificat médical à l’infirmière.",
                "Changement d’accompagnement à la sortie : prévenir la vie scolaire par écrit avant 13h."
              ],
              doc: { file: "assets/docs/reglement-interieur-elementaire-2026-2027.pdf", pages: 19, size: "648 Ko" }
            },
            {
              title: "Consignes de rentrée élémentaire",
              text: "Consignes de rentrée 2026-2027 de la maternelle et de l’élémentaire : dates de rentrée par niveau, transport, restauration, arrivées et sorties au bâtiment B, sécurité et organisation de la journée.",
              points: [
                "Cours de 7h45 à 14h30 (PS : accueil jusqu’à 8h) ; le portail du bâtiment B ferme à 7h45.",
                "Service d’attente de 14h30 à 15h30 réservé aux élèves ayant une fratrie au 2nd degré.",
                "Activités périscolaires (MS au CM2) à partir d’octobre, sortie à 15h30 au bâtiment B.",
                "Tenue de sport obligatoire en EPS, disponible chez « Cotton Mall » à Mtayleb."
              ],
              doc: { file: "assets/docs/consignes-rentree-elementaire-2026.pdf", pages: 6, size: "394 Ko" }
            },
            {
              title: "Fonctionnement de la BCD",
              text: "Affiche « BCD mode d’emploi 2026-2027 » : présentation de la bibliothèque centre documentaire, de ses horaires, de ses modalités d’accès, de ses activités et de son équipe.",
              points: [
                "Ouverte du lundi au vendredi, de 8h à 15h30.",
                "Accès : séances de BCD, récréations de 12h à 12h35, club lecture et club théâtre."
              ],
              doc: { file: "assets/docs/bcd-presentation-2026-2027.pdf", pages: 1, size: "2,3 Mo" }
            },
            {
              title: "Prêt de livres de la BCD",
              text: "Lettre de la BCD aux parents (septembre 2026) : règles de prêt de livres de la PS au CM2, livres perdus ou abîmés, club lecture et accès aux catalogues en ligne.",
              points: [
                "Prêt de 3 livres à la fois (français, anglais, arabe) pour 2 semaines, de la PS au CM2.",
                "Nouveau prêt possible uniquement après le retour des livres déjà empruntés.",
                "Livre perdu : facturation aux parents ; livre abîmé : à remplacer ou à rembourser.",
                "Club lecture deux fois par semaine pendant les récréations, du CE1 au CM2."
              ],
              links: [
                { label: "Catalogue de la BCD sur Esidoc (français et anglais)", url: "https://2050048n.esidoc.fr/" },
                { label: "Catalogue de la BCD sur Datarays (arabe)", url: "http://lyceemontaignebo.datarays.co/publicforms/SearchBooks.aspx" }
              ],
              doc: { file: "assets/docs/bcd-pret-livres-parents-2026-2027.pdf", pages: 2, size: "264 Ko" }
            }
          ]
        },
        {
          id: "rentree-2nd-degre",
          title: "2nd degré : collège et lycée",
          items: [
            {
              title: "Règlement intérieur collège-lycée 2026-2027",
              text: "Règlement intérieur du 2nd degré pour 2026-2027 : droits et devoirs des élèves, horaires, retards et absences, suivi sur Pronote, santé, téléphone portable et procédures disciplinaires.",
              points: [
                "Absence : prévenir la vie scolaire via Pronote avant 9h.",
                "Arrivée après 7h45 : l’élève n’intègre sa classe qu’à la deuxième heure de cours.",
                "Téléphone éteint et déposé dans les boîtes sécurisées prévues, dès l’arrivée.",
                "Moyenne annuelle de 10 : seuil conditionnel de réinscription en classe supérieure."
              ],
              doc: { file: "assets/docs/reglement-interieur-college-lycee-2026-2027.pdf", pages: 12, size: "916 Ko" }
            },
            {
              title: "Consignes de rentrée collège-lycée",
              text: "Lettre de la Direction aux parents pour la rentrée 2026-2027 au collège-lycée : premiers jours, arrivée et sortie des élèves, horaires, transport, restauration, tenue de sport et sécurité.",
              points: [
                "Accueil dès 7h15 : bâtiment A si fratrie au bâtiment B, sinon porte du gymnase au -2.",
                "Sortie anticipée : demande écrite 24h avant (Pronote ou courriel), pas par téléphone.",
                "Options (LVC, EPS, Arts plastiques, SI/CIT) dès le 21 septembre ; périscolaire en octobre."
              ],
              doc: { file: "assets/docs/consignes-rentree-college-lycee-2026.pdf", pages: 3, size: "341 Ko" }
            },
            {
              title: "Le CCC : structure, rôle et activités",
              text: "Présentation du Centre de Connaissances et de Culture (CCC) du collège-lycée : horaires, accès, prêt, espaces, ressources, abonnements et contacts des professeures documentalistes.",
              points: [
                "Ouvert tous les jours de 8h00 à 15h30, au 2e étage du bâtiment A.",
                "Accès pendant les récréations, les heures de permanence ou dans le cadre d’un cours.",
                "Prêt de 3 livres maximum par élève, pour une durée de 15 jours.",
                "En ligne via E-sidoc et Datarays (Pronote) : recherche, disponibilité, nouveautés."
              ],
              doc: { file: "assets/docs/ccc-note-de-service-2026-2027.pdf", pages: 1, size: "563 Ko" }
            },
            {
              title: "Prêt de livres du CCC",
              text: "Règlement du prêt de livres et de documents du CCC pour 2026-2027 : conditions, nombre de documents, durée, respect des ouvrages, retards, pertes et dégradations.",
              points: [
                "Jusqu’à 3 documents simultanément, dans 3 langues différentes maximum.",
                "Prêt de 15 jours, renouvelable si le document n’a pas été réservé par un autre lecteur.",
                "En cas de retard, des rappels sont adressés à l’élève et à sa famille.",
                "Tout document perdu ou détérioré devra être remplacé ou remboursé."
              ],
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
              wide: true,
              text: "Accès direct aux tutoriels des différents outils numériques (Pronote, Office, Teams…).\n\nNote d’information présentant les espaces numériques du Lycée : Pronote pour les parents et les élèves de la 6e à la Terminale, Office 365 pour les élèves du CP à la Terminale, Class Dojo et Zoom pour les PS-GS.",
              points: [
                "Codes Pronote : codes parents envoyés par mail, codes élèves remis directement aux élèves.",
                "Accès à Pronote et Office 365 à partir de septembre 2026, identifiants transmis par mail.",
                "Les comptes parents sont individuels et ne doivent jamais être transmis aux élèves.",
                "En cas de difficulté : M. Raed El Kady (informatique), raed.elkady@lycee-montaigne.edu.lb"
              ],
              links: [
                { label: "Tutoriel : accéder à Pronote depuis un ordinateur", url: "https://lyceemontaigneedulb.sharepoint.com/:b:/s/Montaigne/IQBhxop9_a-8QpnZd875BCG4AUs7bDsfjDe7I98VVm-_Tl8?e=zK6KhV" },
                { label: "Tutoriel : application Pronote sur téléphone", url: "https://lyceemontaigneedulb.sharepoint.com/:b:/s/Montaigne/IQCHGy_uXPlGTpAzV9ZGS0ZhAfJejvnYAQaO07tkiSb4K7g?e=sbqZOU" },
                { label: "Tutoriel : réinitialiser son mot de passe Pronote", url: "https://lyceemontaigneedulb.sharepoint.com/:b:/s/Montaigne/IQCx5g_sZmsRS5y0hVjQJdfaAU_fgBlBqTTD7mPzFid58b0?e=lcBEnS" },
                { label: "Tutoriel : Office 365 (élèves CP-Terminale)", url: "https://lyceemontaigneedulb.sharepoint.com/:f:/s/Montaigne/IgCz_vx03AbVRbBuJvK7QCsJAdnhZeFZOpEO8RcXI-BkKb0?e=aYxJjf" },
                { label: "Tutoriel : Class Dojo (PS-GS)", url: "https://lyceemontaigneedulb.sharepoint.com/:b:/s/Montaigne/IQCSxWYnvIjkR7hIZVNV7JAuAf5DSQdgHBtiFO-azitROdk?e=ajFxnN" },
                { label: "Tutoriel : Zoom (PS-GS)", url: "https://lyceemontaigneedulb.sharepoint.com/:b:/s/Montaigne/IQCP9BnyfSOKTLmAIMXlG81IAefvr8b0iU1-dmNfeS0lWbk?e=bOUdBn" }
              ],
              doc: { file: "assets/docs/outils-numeriques-parents.pdf", pages: 2, size: "87 Ko" }
            },
            {
              tag: "Service financier",
              title: "Procédure de demande d’attestation",
              text: "Note du service financier expliquant comment demander une attestation scolaire, avec ou sans mention des frais scolaires : à qui écrire, informations à fournir et délais de retrait.",
              points: [
                "Avec mention des frais : mail au service financier (nom de l’enfant, classe, année).",
                "Retrait au service financier 5 jours après réception, par vous ou un tiers désigné.",
                "Sans mention des frais : secrétariat, Direction en CC ; retrait bâtiment A après 2 jours.",
                "Si un formulaire spécifique est exigé, joindre une copie numérisée au mail de demande."
              ],
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
              text: "Tutoriel illustré en 7 étapes pour réinitialiser son mot de passe Pix à partir de l’adresse mail du Lycée, en passant par la messagerie Outlook (Office 365).",
              points: [
                "Sur Pix, cliquer sur « Mot de passe oublié ? » puis saisir l’adresse mail du lycée.",
                "Dans Outlook (Office 365), ouvrir le mail de Pix puis « Définir un nouveau mot de passe ».",
                "Le lien de réinitialisation reçu par mail est valide 24 heures."
              ],
              doc: { file: "assets/docs/pix-reinitialiser-mot-de-passe.pdf", pages: 2, size: "342 Ko" }
            }
          ]
        },
        {
          id: "ia-calendrier",
          title: "Calendrier & attentes",
          layout: "timeline",
          items: [
            { when: "Sept.–oct. 2026", text: "Parcours de rentrée." },
            { when: "Toute l’année", text: "Entraînements ciblés selon les cours." },
            { when: "Depuis janv. 2026", text: "Déploiement obligatoire des modules **Pix IA** (4e, 2nde, CAP) selon le calendrier ministériel." }
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
              text: "Dépliant de Pix (rentrée 2025) présentant la Certification Pix : format de l’épreuve, niveaux attendus en 3e et en Terminale, intérêt du certificat et grandes étapes dans l’établissement.",
              points: [
                "Épreuve de 32 questions, 1 h 45 maximum hors tiers-temps, sur un navigateur sécurisé.",
                "Niveau global attendu : 3 en 3e, 4 en Terminale (note de service du 23-10-2024).",
                "Certification des élèves de 3e, de Terminale et post-bac, passée dans l’établissement.",
                "Score reporté automatiquement dans le livret scolaire et, en Terminale, sur Parcoursup."
              ],
              links: [
                { label: "Repères de score Pix pour chaque niveau", url: "https://pix.fr/certification-comprendre-score-niveau" },
                { label: "Note de service du 23-10-2024", url: "https://www.education.gouv.fr/bo/2024/Hebdo43/MENE2421869N" }
              ],
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
