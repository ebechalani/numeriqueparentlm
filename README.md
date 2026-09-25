# Espace parents · Lycée Montaigne

Site d’information à destination des familles, qui réunit sur une seule page le contenu de deux padlets :

1. **Bonne rentrée 2026**, réalisé par Micheline Semaan
   ([padlet d’origine](https://padlet.com/micha_semaan/bonne-rentree-2026-s02374j2htrj9svmdi3m)) :
   calendrier, chartes, règlements intérieurs, consignes de rentrée, BCD, CCC, outils numériques
   et démarches administratives ;
2. **IA, parentalité & parcours**, réalisé par Eddy Bachaalany
   ([padlet d’origine](https://padlet.com/ebechalani/lycee-montaigne-ia-parentalite-parcours-2omrt3gchvn7v0dp)) :
   campagnes Pix par niveau, parcours IA et ressources pour les parents.

Conception et réalisation du site : Eddy Bachaalany.

Le site est statique (HTML, CSS, JavaScript) : aucune installation n’est nécessaire.

## Organisation des fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Structure de la page |
| `assets/js/content.js` | **Tous les textes et liens du site** : le seul fichier à modifier au quotidien |
| `assets/js/app.js` | Affichage du contenu (rien à modifier) |
| `assets/css/style.css` | Mise en forme |
| `assets/docs/` | Les documents PDF, hébergés avec le site |
| `assets/img/` | Logos (Lycée Montaigne, 15 ans, réseau mlfmonde, AEFE) et icône d’onglet |
| `assets/fonts/` | Polices Inter et Fraunces (licence SIL Open Font License, fichiers `LICENSE-*.txt`) |

Les PDF sont copiés dans `assets/docs/` parce que les liens de téléchargement des padlets
sont temporaires : ils expirent au bout de quelques jours.

## Modifier le contenu

Dans `assets/js/content.js`, chaque rubrique contient des groupes. Un groupe peut être :

- une grille de **cartes** (par défaut) ;
- une grille de **niveaux** (`layout: "levels"`), utilisée pour les campagnes Pix ;
- une **frise** (`layout: "timeline"`), utilisée pour le calendrier Pix.

Une carte peut contenir :

```js
{
  id: "doc-exemple",                    // facultatif : ancre pour un lien direct (#doc-exemple)
  tag: "Nouveau",                        // facultatif : petite étiquette
  title: "Titre de la carte",
  text: "Texte libre (voir la mise en forme ci-dessous).",
  points: ["Point clé 1", "Point clé 2"],
  links: [{ label: "Texte du lien", url: "https://…" }],
  doc: { file: "assets/docs/mon-document.pdf", pages: 2, size: "333 Ko" }
}
```

Dans les textes :

| Saisie | Résultat |
| --- | --- |
| une ligne vide | nouveau paragraphe |
| `- élément` en début de ligne | liste à puces |
| `1. élément` en début de ligne | liste numérotée |
| `**texte**` | texte en gras |
| `https://…` | lien cliquable |

La typographie française (espaces insécables avant « : ; ? ! », dans les guillemets, entre un
nombre et son unité) est ajoutée automatiquement à l’affichage : inutile de la saisir.

**Ajouter un document :** déposer le PDF dans `assets/docs/` (nom sans espaces ni accents),
puis ajouter une carte avec `doc: { file: "assets/docs/nom-du-fichier.pdf", … }`.

**Après chaque modification**, vérifier qu’il ne manque ni virgule ni guillemet :

```sh
node --check assets/js/content.js
```

En cas d’erreur dans ce fichier, la page affiche un message de secours avec les liens vers les padlets.

## Voir le site en local

Ouvrir `index.html` dans un navigateur suffit pour relire le contenu. Pour un rendu identique au site
en ligne (avec les polices), lancer un petit serveur depuis le dossier du site :

```sh
python3 -m http.server 8000
```

puis ouvrir http://localhost:8000.

## Mettre le site en ligne (GitHub Pages)

1. Sur GitHub, ouvrir **Settings → Pages**.
2. Dans **Build and deployment**, choisir **Deploy from a branch**, la branche principale
   et le dossier `/ (root)`.
3. Le site est publié au bout d’une minute environ à l’adresse
   `https://ebechalani.github.io/numeriqueparentlm/`, un lien à envoyer aux parents.

La page demande aux moteurs de recherche de ne pas l’indexer (`<meta name="robots" content="noindex">`
dans `index.html`) : elle reste accessible à toute personne qui a le lien, sans apparaître dans Google.

## Fonctionnalités

- Lisible sur téléphone, tablette et ordinateur, avec un mode sombre automatique.
- Bouton **Partager** (partage natif sur mobile, copie du lien sur ordinateur).
- Bouton **Imprimer / PDF** avec une mise en page adaptée à l’impression.
- Navigation au clavier et compatibilité avec les lecteurs d’écran.
