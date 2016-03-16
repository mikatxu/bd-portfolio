# bd-portfolio

A JQuery custom slider in a WordPress plugin.

## Usage

Le portfolio est structuré par des shortcodes.

### Syntaxe de base

[bdp-open]
[bdp-more-info]
[/bdp-more-info]
[bdp-content]
...
[bdp-content-end]
[bdp-samecategory]
[bdp-close]

*[bdp-open]*

Ouvre nécessairement le portfolio.

*[bdp-more-info]...[/bdp-more-info]*

Contient le texte qui apparaît quand on clique en haut à gauche pour avoir plus d'infos.

*[bdp-content][bdp-content-end]*

Bien noter qu'il n'y a pas de [/bdp-content] ! Mais bien [bdp-content-end].
On entre entre ces deux balises les différents slides à l'aide des shortcodes présentés plus loin.

*[bdp-samecategory]*

Affiche entre les flèches de navigation du slider des liens vers les autres portfolio présents dans la même catégorie.

*[bdp-close]*

Ferme nécessairement le portfolio

### Les différents types de contenus

*[bdp-text]...[/bdp-text]*

Pour du contenu texte ou HTML.

*[bdp-image]...[/bdp-image]*

Pour une image. Le script calcule s'il s'agit d'une image en format portrait ou paysage afin de l'aligner correctement dans la slide.

*[bdp-vimeo]...[/bdp-vimeo]*

Attention à bien mettre entre les balises le lien vers la page de Vimeo où se trouve la vidéo. Le code d'embed ("<iframe...") ne fonctionnera pas.

*[bdp-youtube]...[/bdp-youtube]*

Attention à bien mettre entre les balises le lien vers la page de Youtube où se trouve la vidéo. Le code d'embed ("<iframe...") ne fonctionnera pas.
