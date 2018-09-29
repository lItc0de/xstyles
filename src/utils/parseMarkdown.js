import { markdown } from 'markdown'; // eslint-disable-line

export const REGEX = /(?:```[\s\S]*?```)|([\s\S]*?(?=```))|([\s\S]+)/g;
export const TEMPLATE_REGEX = /<template>([\s\S]*)<\/template>/;
export const SCRIPT_REGEX = /<script>[\s\S]*export default([\s\S]*)<\/script>/;

export const getFilePartsArr = file => file.match(REGEX).map(part => part.trim());

export const toJs = (string) => {
  let options;
  eval(`options = ${string}`); // eslint-disable-line no-eval
  return options;
};
export const toHTML = string => markdown.toHTML(string);
export const toVue = (template, script = {}) => ({ template, ...script });

export const getTemplate = string => (string.match(TEMPLATE_REGEX) || ['', ''])[1].trim();
export const getScript = string => toJs((string.match(SCRIPT_REGEX) || ['', '{}'])[1].trim());

export const parseMd = (chunk) => {
  if (typeof chunk !== 'string') return null;
  if (chunk.includes('// vuejs')) return null;
  return toVue(toHTML(chunk));
};

export const parseCode = (chunk) => {
  if (typeof chunk !== 'string') return null;
  if (!chunk.includes('// vuejs')) return null;
  return toVue(getTemplate(chunk), getScript(chunk));
};

export const parse = (chunk) => {
  if (chunk.includes('// vuejs')) return parseCode(chunk);
  return parseMd(chunk);
};
