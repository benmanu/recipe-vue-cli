/**
 * @see {@link https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components}
 */

import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

function importAll(requireComponent) {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}

importAll(require.context('../components', true, /\.vue$/));
importAll(require.context('../elements', true, /\.vue$/));
