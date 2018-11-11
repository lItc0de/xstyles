export const capitalize = str =>
  (typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : '');

export const camelCaseToDash = str =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
