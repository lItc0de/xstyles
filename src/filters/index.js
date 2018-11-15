import { addLeadingZero, msToMinSec, toHumanTime } from './time';
import {
  capitalize, camelCaseToDash, dashToCamelCase, deCapitalize, toPx,
} from './stringHelpers';

const filters = {
  addLeadingZero,
  msToMinSec,
  toHumanTime,
  capitalize,
  camelCaseToDash,
  dashToCamelCase,
  deCapitalize,
  toPx,
};

const installFilters = Vue => Object.keys(filters)
  .forEach(filter => Vue.filter(filter, filters[filter]));

export { installFilters, filters };
