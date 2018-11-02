import { addLeadingZero, msToMinSec } from '@/filters/time';

export default (Vue) => {
  Vue.filter('addLeadingZero', addLeadingZero);
  Vue.filter('msToMinSec', msToMinSec);
};
