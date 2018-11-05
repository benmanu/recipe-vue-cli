# vue-ss-boilerplate

An opinionated frontend build for SilverStripe 4 sites.

## Installation

```bash
composer require-recipe benmanu/recipe-vue-cli
```

Update the recipe

```bash
composer update-recipe benmanu/recipe-vue-cli
```

Add the following to the project `composer.json` file config.

```json
{
  "extra": {
    "expose": [
      "themes/app/dist"
    ]
  }
}
```

## Guide

See the [frontend build documentation](./docs/en/frontend-build.md) for more information.

See the [frontend development documentation](./docs/en/frontend-development) for coding conventions etc.
