import defaultTheme from './default.json';

export default (Vue, options = { theme: {} }) => {
  const theme = { ...defaultTheme, ...options.theme };

  Vue.prototype.$theme = theme; // eslint-disable-line no-param-reassign
};
