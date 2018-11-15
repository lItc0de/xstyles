const context = require.context('.', true, /\.vue$/);

const components = {};

context.keys().forEach((file) => {
  const component = context(file).default;
  const { name } = component;

  components[name] = component;
});

const componentNames = Object.keys(components);

const install = (Vue) => {
  componentNames.forEach(name => Vue.component(name, components[name]));
};

export { componentNames, install, components };
