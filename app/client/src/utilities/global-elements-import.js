/**
 * Imports all global elements.
 * By default these are all vue components in the `@/elements` directory.
 * All elements are placed in there own chunk (as opposed to individual chunks).
 * It is more performant to place larger components into there own import in `@/main.js`.
 *
 * Note: The require structure is fairly opinionated, at the moment it expects
 * the components to be in the structure `@/elements/{ComponentName}/{ComponentName}.vue`.
 */

import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

/**
 * Format the fileName string into the componentName.
 * @param {string} fileName
 */
function getComponentName(fileName) {
  // get the componentName from the fileName
  let formattedFileName = fileName.split('/').pop();
  formattedFileName = formattedFileName.split('.').slice(0, -1).join('.');
  formattedFileName = formattedFileName.replace(/^\.\/(.*)\.\w+$/, '$1');

  // format the componentName into pascal case
  return upperFirst(camelCase(formattedFileName));
}

// get a list of all vue components in the '@/elements' directory and sub-folders.
const requireElement = require.context('@/elements', true, /\.vue$/);

requireElement.keys().forEach((fileName) => {
  const componentName = getComponentName(fileName);

  Vue.component(componentName, (resolve) => {
    /* eslint-disable-next-line */
    require([`@/elements/${componentName}/${componentName}.vue`], resolve);
  });
});
