# Adding more languages
1. Create new language directories like this: 

content/
├── en/
|   ├── posts/
|   |   ├── post1.md
|   |   └── post2.md
|   └── _index.md [homepage for the language] => this is the default homepage because of this setting in hugo.toml: defaultContentLanguageInSubdir = true
├── fr/
|   ├── posts/
|   |   ├── post1.md [will be automatically considered translation of the other language counterpart if name is identical]
|   |   └── post3.md
|   └── _index.md [homepage for the language]
└── _index.md [homepage for whole site - redirects to en homepage because of this setting in hugo.toml: defaultContentLanguageInSubdir = true, so never displayed]

2. add language parameters to hugo.toml like this

[languages]
[languages.en]
  contentDir = 'content/en'
  languageCode = 'en-US'
  languageDirection = 'ltr'
  languageName = "English"
  weight = 1
  [languages.en.permalinks]
  [languages.en.permalinks.page]
    posts = '/:slug/'
[languages.fr]
  contentDir = 'content/fr'
  languageCode = 'fr-FR'
  languageDirection = 'ltr'
  languageName = "Français"
  weight = 2
  [languages.fr.permalinks]
  [languages.fr.permalinks.page]
    posts = '/:slug/'

# Adding images to posts

A post with images should be a directory instead of a single file.

en/
└── posts/
    └── post-1/           <-- page bundle
        ├── index.md
        └── Embarazado.jpeg    <-- page resource

Then can add the following tag to markdown file
{{< figure src="Embarazado.jpeg" width="300" alt="embarrassed alt" caption="embarrassed" >}}

