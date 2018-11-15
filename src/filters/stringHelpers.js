export const capitalize = str => (typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : '');

export const deCapitalize = str => (typeof str === 'string' ? str.charAt(0).toLowerCase() + str.slice(1) : '');

export const camelCaseToDash = str => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const dashToCamelCase = str => deCapitalize(str.split('-').map(part => capitalize(part)).join(''));

export const toPx = input => (input.toString().search(/\D/) === -1 ? `${input}px` : input);
