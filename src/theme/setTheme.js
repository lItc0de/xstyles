const convertToCSS = (theme) => {
  const flatTheme = Object.values(theme).reduce((vars, category) => ({
    ...vars,
    ...category,
  }), {});

  const variables = Object.keys(flatTheme).map(key => `--${key}: ${flatTheme[key]};`).join('');

  return `:root { ${variables} }`;
};

const createStyleTag = () => {
  const styleTag = document.createElement('style');

  styleTag.setAttribute('type', 'text/css');
  styleTag.setAttribute('id', 'variables');

  document.head.appendChild(styleTag);

  return styleTag;
};

const setTheme = (theme) => {
  const cssTheme = convertToCSS(theme);

  const styleTag = document.getElementById('variables') || createStyleTag();

  styleTag.innerHTML = cssTheme;
};

export const update = Vue => (category, item, value) => {
  const { theme } = Vue.prototype.$xstyles;

  theme[category][item] = value;

  setTheme(theme);
};

export const install = Vue => () => {
  const { theme } = Vue.prototype.$xstyles;
  setTheme(theme);
};
