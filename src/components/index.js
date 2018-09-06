import Vue from 'vue';

const context = require.context('.', true, /\.vue$/);

/* eslint-disable no-param-reassign */
export default context.keys().reduce((components, fileExports) => {
  const component = context(fileExports).default;
  const { name } = component;

  console.log('name:', name);

  Vue.component(name, component);
  components[name] = component;

  return components;
}, {});
