const context = require.context('.', true, /\.vue$/);

const components = {};

context.keys().forEach((file) => {
  const component = context(file).default;
  const { name } = component;

  components[name] = component;
});

const install = (Vue) => {
  Object.keys(components).forEach(name => Vue.component(name, components[name]));
};

export default {
  install,
  components,
};
