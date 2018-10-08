const hasClass = (htmlElement, htmlClass) => (htmlElement.getAttribute('class') === htmlClass);

const createElement = (string) => {
  const el = document.createElement('div');
  el.innerHTML = string;
  return el;
};

const convertToVue = (string) => {
  const html = createElement(string);
  const template = html.querySelector('template').innerHTML;
  const script = html.querySelector('script').innerHTML;
  let options = {}; // eslint-disable-line prefer-const
  eval(script.replace('export default', 'options =')); // eslint-disable-line no-eval

  return { ...options, template };
};

const getHtmlElements = (string) => {
  const html = createElement(string);
  return Object.keys(html.children).reduce((children, i) => {
    children.push(html.children[i]);
    return children;
  }, []);
};

export { hasClass, createElement, convertToVue, getHtmlElements };

export default string =>
  getHtmlElements(string).reduce((vueElements, htmlElement) => {
    const vueCode = hasClass(htmlElement, 'hljs');
    if (vueCode) vueElements.push(convertToVue(htmlElement.innerText));
    vueElements.push({ template: htmlElement.outerHTML });
    return vueElements;
  }, []);
