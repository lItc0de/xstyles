const context = require.context(
  '.',
  true,
  /^(?!.*(?:__tests__|test.js$|spec.js$|index.js$)).*(?:.vue$|.js$)/,
);

const components = {};

context.keys().forEach((file) => {
  const component = context(file).default;
  const { name } = component;

  components[name] = component;
});

const componentNames = Object.keys(components);

const installComponents = (Vue) => {
  componentNames.forEach(name => Vue.component(name, components[name]));
};

export { componentNames, installComponents, components };
