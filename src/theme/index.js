import defaultTheme from './default';
import { install, update } from './setTheme';

export default (Vue, options = { theme: {} }) => {
  const theme = { ...defaultTheme, ...options.theme };

  /* eslint-disable no-param-reassign */
  Vue.prototype.$xstyles = new Vue({
    data: {
      theme,
    },
  });

  Vue.prototype.$updateTheme = update(Vue);
  /* eslint-enable no-param-reassign */

  install(Vue)();
};
