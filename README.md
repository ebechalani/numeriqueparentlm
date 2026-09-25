# Espace parents · Lycée Montaigne

Site d’information à destination des familles, qui réunit sur une seule page :

1. **Bonne rentrée 2026** : les informations pratiques de rentrée
   ([padlet d’origine](https://padlet.com/micha_semaan/bonne-rentree-2026-s02374j2htrj9svmdi3m)) ;
2. **IA & parentalité : le parcours** : le parcours numérique proposé aux parents
   ([padlet d’origine](https://padlet.com/ebechalani/lycee-montaigne-ia-parentalite-parcours-2omrt3gchvn7v0dp)).

Le site est statique (HTML, CSS, JavaScript) : aucune installation n’est nécessaire.

## Modifier le contenu

Tous les textes se trouvent dans **`assets/js/content.js`**. Chaque rubrique contient :

- des **groupes de cartes** (`layout: "cards"`), un groupe par colonne du padlet ;
- ou des **étapes numérotées** (`layout: "steps"`), pour un parcours.

Dans les textes :

| Saisie | Résultat |
| --- | --- |
| une ligne vide | nouveau paragraphe |
| `- élément` en début de ligne | liste à puces |
| `**texte**` | texte en gras |
| `https://…` | lien cliquable |

Des boutons de lien s’ajoutent avec `links: [{ label: "…", url: "https://…" }]`.

Une fois le contenu définitif saisi, retirer les `placeholder: true` et passer
`draft` à `false` dans `meta` pour masquer le bandeau « Version de travail ».

## Voir le site en local

Ouvrir `index.html` dans un navigateur.

## Mettre le site en ligne (GitHub Pages)

1. Sur GitHub, ouvrir **Settings → Pages**.
2. Dans **Build and deployment**, choisir **Deploy from a branch**, la branche `main`
   et le dossier `/ (root)`.
3. Le site est publié au bout d’une minute environ à l’adresse
   `https://ebechalani.github.io/numeriqueparentlm/`, un lien à envoyer aux parents.

## Fonctionnalités

- Lisible sur téléphone, tablette et ordinateur, avec un mode sombre automatique.
- Bouton **Partager** (partage natif sur mobile, copie du lien sur ordinateur).
- Bouton **Imprimer / PDF** avec une mise en page adaptée à l’impression.
- Navigation au clavier et compatibilité avec les lecteurs d’écran.
