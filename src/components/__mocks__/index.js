const components = { test: { render(createElement) { return createElement('h1', 'foo'); } } };

const install = (Vue) => {
  Object.keys(components).forEach(name => Vue.component(name, components[name]));
};

export default {
  install,
  components,
};
