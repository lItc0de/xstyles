/* eslint-disable import/prefer-default-export */
export const capitalize = string =>
  (typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : '');
