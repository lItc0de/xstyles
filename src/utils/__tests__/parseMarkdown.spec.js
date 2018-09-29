import {
  getFilePartsArr,
  toJs,
  toHTML,
  toVue,
  getTemplate,
  getScript,
  parseMd,
  parseCode,
} from '@/utils/parseMarkdown';

const CODE_INDICATOR = '```';

const md1 = '# Foo';
const md2 = '# Bar';
const md3 = '# Bla';

const template1 = '<div>111</div>';

const template2 = '<div>222</div>';

const script2 = `{
  data() {
    return {
      dataTest: 'bar',
    };
  },

  methods: {
    methodsTest() { return 'bar' },
  },

  computed: {
    conputedTest() { return 'foo' },
  },
}`;

const code1 = `
${CODE_INDICATOR}js
  // vuejs
  <template>
    ${template1}
  </template>
${CODE_INDICATOR}
`.trim();

const code2 = `
${CODE_INDICATOR}js
  // vuejs
  <template>
    ${template2}
  </template>

  <script>
    export default ${script2}
  </script>
${CODE_INDICATOR}
`.trim();

const file = md1 + code1 + md2 + code2 + md3;

describe('getFilePartsArr', () => {
  it('should return an array of the file parts', () => {
    const splitFile = getFilePartsArr(file);

    expect(splitFile[0]).toEqual(md1);
    expect(splitFile[1]).toEqual(code1);
    expect(splitFile[2]).toEqual(md2);
    expect(splitFile[3]).toEqual(code2);
    expect(splitFile[4]).toEqual(md3);
  });
});

describe('toJs', () => {
  it('should return js from a string', () => {
    let options;
    const js = toJs(script2);
    eval(`options = ${script2}`); // eslint-disable-line no-eval

    expect(js.data()).toEqual(options.data());
  });
});

describe('toHtml', () => {
  it('should return html from a string', () => {
    expect(toHTML(md1)).toEqual('<h1>Foo</h1>');
  });
});

describe('toVue', () => {
  it('should return html from a string', () => {
    const parsedCode = toVue(template2, toJs(script2));
    const testParsedCode = { template: template2, ...toJs(script2) };

    expect(parsedCode.template).toEqual(testParsedCode.template);
    expect(parsedCode.data()).toEqual(testParsedCode.data());
    expect(parsedCode.methods.methodsTest()).toEqual(testParsedCode.methods.methodsTest());
    expect(parsedCode.computed.computedTest).toEqual(testParsedCode.computed.computedTest);
  });
});

describe('getTemplate', () => {
  it('should return the template of a code chunk', () => {
    expect(getTemplate(code2)).toEqual(template2);
  });
});

describe('getScript', () => {
  it('should return the script of a code chunk', () => {
    const script = getScript(code2);
    const testScript = toJs(script2);

    expect(script.data()).toEqual(testScript.data());
    expect(script.methods.methodsTest()).toEqual(testScript.methods.methodsTest());
    expect(script.computed.computedTest).toEqual(testScript.computed.computedTest);
  });
});

describe('parseMd', () => {
  it('should return the template of a code chunk', () => {
    expect(parseMd(md1)).toEqual({ template: toHTML(md1) });
  });
});

describe('parseCode', () => {
  it('should return the template of a code chunk', () => {
    const parsedCode = parseCode(code2);
    const testParsedCode = { template: template2, ...toJs(script2) };

    expect(parsedCode.template).toEqual(testParsedCode.template);
    expect(parsedCode.data()).toEqual(testParsedCode.data());
    expect(parsedCode.methods.methodsTest()).toEqual(testParsedCode.methods.methodsTest());
    expect(parsedCode.computed.computedTest).toEqual(testParsedCode.computed.computedTest);
  });
});
