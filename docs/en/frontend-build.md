# Frontend build

An opinionated frontend build using the Vue CLI suite.

- Vue CLI - Dependency management and build tooling
- Vue - Javascript framework
- VueX - Javascript framework global state management
- aXe - Accessibility audit
- NPM audit - Security audit
- Jest - Unit tests

## Project setup

Requirements:

- [Node](https://nodejs.org/en/download/) (>8)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html) (optional)

### Install dependencies

```bash
yarn install
```

### Compile and watch for development

```bash
yarn run dev
```

### Compiles and minifies for production

```bash
yarn run prod

or

yarn run build
```

### Run the test suite

```bash
yarn run test
```

### Update the test snapshots

```bash
yarn run test:update
```

### Lint the files

```bash
yarn run lint
```

### Runs a security audit against package dependencies

```bash
yarn run audit
```

## Project structure

### /src

Four main components to the `/src` directory.

1. `main.js`: Instantiates the Vue application, mounting to the `#app` element (default placed in `index.html` - see [/public](#public)).
2. `store/`:
3. `components/`: Generally larger Vue elements. Should integrate with the VueX store.
4. `elements/`: Smaller Vue elements. Can be standalone, or part of a component composition. Should not integrate into the VueX store.

All `.vue` `/components` and `/elements` are automatically placed in the Vue context through `./themes/app/src/utilities/component-import.js`. That way you don't need to assign them to the application when a new component is created.

Building a test in the same folder as the component/element provides a way of coupling the concerns of the test with the element, raises awareness and ownership.

An example is if the project has a component, `Banner.vue`, your project structure might look like:

`./themes/app/src/components/Banner/Banner.vue`
`./themes/app/src/components/Banner/Banner.spec.vue`

Having both the `Banner.vue` component and `Banner.spec.vue` test in the same folder.

### /public

## Vue CLI

The CLI tool can be spun up by running `vue ui` on the command line.

## Assets

## Tests

[Jest](https://jestjs.io/) is the testing tool of choice.

Configuration is all managed through the `./jest.config.js` file. More details can be found in the [Jest configuration docs](https://jestjs.io/docs/en/configuration.html).

All files in the `./themes/app/src/` directory with the extension `**.spec.js` will be included in the test run.

The [vue-test-utils](https://vue-test-utils.vuejs.org/) are included to provide testing utilities for Vue components.

[Jest Snapshot](https://jestjs.io/docs/en/snapshot-testing.html) testing is also available.

## Linting

## Accessibility audit

## Security audit

## Git hooks
