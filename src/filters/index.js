import { addLeadingZero, msToMinSec, toHumanTime } from '../filters/time';
import { capitalize, camelCaseToDash, dashToCamelCase, deCapitalize, toPx } from '../filters/stringHelpers';

export default (Vue) => {
  Vue.filter('addLeadingZero', addLeadingZero);
  Vue.filter('msToMinSec', msToMinSec);
  Vue.filter('capitalize', capitalize);
  Vue.filter('camelCaseToDash', camelCaseToDash);
  Vue.filter('dashToCamelCase', dashToCamelCase);
  Vue.filter('deCapitalize', deCapitalize);
  Vue.filter('toPx', toPx);
  Vue.filter('toHumanTime', toHumanTime);
};
