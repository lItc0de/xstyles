import readme from '@/components/__mocks__/README.md';

import { createElement, convertToVue, getHtmlElements } from '@/utils/parseMarkdown';

describe('parseMarkdown', () => {
  it('parses a markdown file into vue components', () => {

  });
});

describe('hasClass', () => {
  it('checks the class of a html elemen', () => {

  });
});

describe('createElement', () => {
  it('returns HTML element', () => {
    const el = createElement(readme);

    expect(el.innerHTML.replace(/(\r\n|\n|\r)/gm, '')).toEqual(readme.replace(/(\r\n|\n|\r)/gm, ''));
  });
});

describe('convertToVue', () => {
  it('converts escaped HTML to vue code', () => {
    const html = createElement(readme);
    const vueCode = html.querySelector('pre.hljs').textContent;
    const vue = convertToVue(vueCode);

    expect(vue.data()).toEqual({ bla: 'lol hahahah' });
  });
});

describe('getHtmlElements', () => {
  it('returns an array of html elements', () => {
    expect(getHtmlElements(readme).length).toBe(1);
  });
});
