# bd-portfolio

A slider in a WordPress plugin tailored for an architect.

## Utilisation

Le plugin crée un *custom type* bd-portfolio. Ces pages portfolio se structurent à l'aide de shortcodes. En attribuant une catégorie à ces post de type portfolio, il est possible d'afficher des liens vers les autres portfolio de même catégorie.

### Syntaxe de base

[bdp-open]

[bdp-more-info]

[/bdp-more-info]

[bdp-content]

...

[bdp-content-end]

[bdp-samecategory]

[bdp-close]

____

**[bdp-open]**

Ouvre nécessairement le code du portfolio.

Ce shortcode a une option *close-link* (exemple : [bdp-open close-link="bd-portfolio"]) qui permet de choisir la page où mène la fermeture du portfolio.

Par défaut, la fermeture du portfolio renvoie à la page d'accueil de WordPress.

**[bdp-more-info]...[/bdp-more-info]** (optionnel)

Contient le texte qui apparaît quand on clique en haut à gauche pour avoir plus d'infos.

**[bdp-content][bdp-content-end]**

Bien noter qu'il n'y a pas de [/bdp-content] ! Mais bien [bdp-content-end].
On entre entre ces deux balises les différents slides à l'aide des shortcodes présentés plus loin.

**[bdp-samecategory]** (optionnel)

Affiche entre les flèches de navigation du slider des liens vers les autres portfolio présents dans la même catégorie.

**[bdp-close]**

Ferme nécessairement le code du portfolio.

### Les différents types de contenus

**[bdp-text]...[/bdp-text]**

Encadre du contenu texte ou HTML.

**[bdp-image]...[/bdp-image]**

Encadre une image choisie à l'aide du bouton "Ajouter un média". Le script récupère la meilleure définition disponible, et aligne l'image horizontalement ou verticalement en fonction de son orientation.

**[bdp-vimeo]...[/bdp-vimeo]**

Attention à bien mettre entre les balises le lien vers la page de Vimeo où se trouve la vidéo. Le code d'embed ("<iframe...") ne fonctionnera pas.

**[bdp-youtube]...[/bdp-youtube]**

Attention à bien mettre entre les balises le lien vers la page de Youtube où se trouve la vidéo. Le code d'embed ("<iframe...") ne fonctionnera pas.

## Un exemple
```
[bdp-open]
[bdp-more-info]
<h1>Plus d'infos</h1>
<h6>Ah bah oui alors !</h6>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
[/bdp-more-info]
[bdp-content]
[bdp-text]<h1>Vazi tavu</h1>
<h6>Ah bah oui alors ! Et pourtant <strong>non. </strong></h6>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
[/bdp-text]
[bdp-image]
<img class="alignnone size-medium wp-image-71" src="http://localhost:8888/wp-content/uploads/2016/03/XVM589a6056-afab-11e5-993c-18dd6a418a25-805x453-300x168.jpg" alt="XVM589a6056-afab-11e5-993c-18dd6a418a25-805x453" width="300" height="168" />
[/bdp-image]
[bdp-image]
<img class="alignnone size-medium wp-image-72" src="http://localhost:8888/wp-content/uploads/2016/03/les-photos-de-vacances-de-kate-middleton-du-prince-william-et-de-leurs-enfants-george-et-charlotte-de-cambridge_2-207x300.jpg" alt="les-photos-de-vacances-de-kate-middleton-du-prince-william-et-de-leurs-enfants-george-et-charlotte-de-cambridge_2" width="207" height="300" />
[/bdp-image]
[bdp-vimeo]
https://vimeo.com/52214380
[/bdp-vimeo]
[bdp-youtube]
https://www.youtube.com/watch?v=dQw4w9WgXcQ
[/bdp-youtube]
[bdp-text]<h1>Vazi tavu BIS</h1>
<h6>Ah bah oui alors ! Et pourtant <strong>non. </strong></h6>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
[/bdp-text]
[bdp-content-end]
[bdp-samecategory]
[bdp-close]
```
