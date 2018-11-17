import { installComponents, components } from './components';
import { installFilters, filters } from './filters';
import installTheme from './theme';
import installVueHead from './plugins/vueHead';
import './style.styl';

const install = (Vue, options = {}) => {
  installFilters(Vue);
  installVueHead(Vue);
  installTheme(Vue, options);
  installComponents(Vue);
};

export {
  components, filters,
};

export default { install };
