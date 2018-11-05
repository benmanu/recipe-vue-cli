# recipe-vue-cli

An opinionated frontend build for SilverStripe 4 sites. Adds a new theme `app` containing all source files. Uses [Vue CLI](https://cli.vuejs.org/) to handle the frontend build. See the [docs](./docs/en/) for more details.

## Installation

```bash
composer require-recipe benmanu/recipe-vue-cli
```

Update the recipe:

```bash
composer update-recipe benmanu/recipe-vue-cli
```

## Update project files

These are some changes to make to the project to get everything up and running.

### composer.json

Add the following to the project `composer.json` file config:

```json
{
  "extra": {
    "expose": [
      "themes/app/dist"
    ]
  }
}
```

Then run to sync it to the public directory:

```bash
composer vendor-expose
```

### .editorconfig

Add the following:

```
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
end_of_line = lf
trim_trailing_whitespace = true
insert_final_newline = true
max_line_length = 100
```

### .gitignore

Add the following:

```
.DS_Store
node_modules
/themes/app/dist/*

# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw*
```

### app/_config/theme.yml

Replace with the following:

```yml
---
Name: mytheme
---
SilverStripe\View\SSViewer:
  themes:
    - '$public'
    - 'app'
    - '$default'
```

## Guide

See the [frontend build documentation](./docs/en/frontend-build.md) for more information.

See the [frontend development documentation](./docs/en/frontend-development) for coding conventions etc.
