/*
 * CONTENU DU SITE : c'est le seul fichier à modifier pour mettre à jour les textes.
 *
 * Mise en forme possible dans les champs « text » :
 *   - une ligne vide sépare deux paragraphes ;
 *   - une ligne commençant par « - » devient un élément de liste ;
 *   - **texte** s'affiche en gras ;
 *   - les adresses web (https://…) deviennent des liens cliquables.
 *
 * Chaque publication peut aussi avoir :
 *   links: [{ label: "Texte du lien", url: "https://…" }]
 *   placeholder: true   → affiche le badge « À compléter » (à retirer une fois le vrai contenu saisi)
 */

window.SITE_CONTENT = {
  meta: {
    school: "Lycée Montaigne",
    title: "Espace parents",
    footerNote: "Page d’information à destination des familles.",
    updated: "2026-09-25",
    // Passer à false une fois le contenu des padlets intégré : retire le bandeau « Version de travail ».
    draft: true
  },

  hero: {
    eyebrow: "Année scolaire 2026-2027",
    title: "Toutes les informations utiles aux familles, au même endroit",
    lead: "Retrouvez ici les informations de la rentrée 2026 et le parcours « IA & parentalité » proposé par le Lycée Montaigne pour accompagner vos enfants dans le numérique."
  },

  sections: [
    {
      id: "rentree",
      layout: "cards",
      accent: "rentree",
      number: "01",
      navLabel: "Rentrée 2026",
      eyebrow: "Rentrée 2026",
      title: "Bonne rentrée 2026",
      lead: "Les informations pratiques pour bien démarrer l’année.",
      source: {
        label: "Padlet « Bonne rentrée 2026 »",
        url: "https://padlet.com/micha_semaan/bonne-rentree-2026-s02374j2htrj9svmdi3m"
      },
      groups: [
        {
          title: "Colonne 1 du padlet",
          items: [
            {
              title: "Publication à reprendre",
              text: "Texte de la publication du padlet « Bonne rentrée 2026 ».",
              placeholder: true
            },
            {
              title: "Publication à reprendre",
              text: "Texte de la publication du padlet « Bonne rentrée 2026 ».",
              placeholder: true
            },
            {
              title: "Publication à reprendre",
              text: "Texte de la publication du padlet « Bonne rentrée 2026 ».",
              placeholder: true
            }
          ]
        },
        {
          title: "Colonne 2 du padlet",
          items: [
            {
              title: "Publication à reprendre",
              text: "Texte de la publication du padlet « Bonne rentrée 2026 ».",
              placeholder: true
            },
            {
              title: "Publication à reprendre",
              text: "Texte de la publication du padlet « Bonne rentrée 2026 ».",
              placeholder: true
            }
          ]
        }
      ]
    },

    {
      id: "ia-parentalite",
      layout: "steps",
      accent: "ia",
      number: "02",
      navLabel: "IA & parentalité",
      eyebrow: "Numérique et intelligence artificielle",
      title: "IA & parentalité : le parcours",
      lead: "Un parcours en plusieurs étapes pour comprendre l’intelligence artificielle et accompagner vos enfants dans ses usages.",
      source: {
        label: "Padlet « IA & parentalité : le parcours »",
        url: "https://padlet.com/ebechalani/lycee-montaigne-ia-parentalite-parcours-2omrt3gchvn7v0dp"
      },
      steps: [
        {
          title: "Étape à reprendre",
          text: "Texte de l’étape du padlet « IA & parentalité ».",
          placeholder: true
        },
        {
          title: "Étape à reprendre",
          text: "Texte de l’étape du padlet « IA & parentalité ».",
          placeholder: true
        },
        {
          title: "Étape à reprendre",
          text: "Texte de l’étape du padlet « IA & parentalité ».",
          placeholder: true
        }
      ]
    }
  ]
};
