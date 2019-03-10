function convertColor(color) {
  return Object.keys(this.$xstyles.theme.colors).includes(color)
    ? this.$xstyles.theme.colors[color] : color;
}

export const colorMixin = {
  props: {
    color: {
      type: String,
      default: 'inherit',
      description: 'changes the text color of the element',
    },

    backgroundColor: {
      type: String,
      default: '',
      description: 'changes the background color of the element',
    },

    gradient: {
      type: Boolean,
      default: false,
      description: 'adds an background gradient',
    },
  },

  computed: {
    colorMixin() {
      const style = {};
      const convertColorBound = convertColor.bind(this);

      style.color = convertColorBound(this.color);

      if (this.backgroundColor) style.backgroundColor = convertColorBound(this.backgroundColor);
      if (this.gradient) {
        const { sizes, colors } = this.$xstyles.theme;
        style.background = `linear-gradient(${sizes.gradientDeg}, ${colors.gradientFrom}, ${colors.gradientTo})`;
      }


      return style;
    },
  },
};

export const fontMixin = {
  props: {
    bold: {
      type: Boolean,
      default: false,
      description: 'changes the font weight to bold',
    },

    inline: {
      type: Boolean,
      default: false,
      description: 'displays the element inline',
    },

    size: {
      type: [String, Number],
      default: 0,
      description: 'changes font size and line height',
    },

    slim: {
      type: Boolean,
      default: false,
      description: 'removes margin and reduces line heigt to font size',
    },
  },

  computed: {
    fontMixin() {
      const style = {};
      if (this.bold) style.fontWeight = 'bold';
      if (this.inline) style.display = 'inline';
      if (Number.isNaN(Number(this.size))) {
        style.fontSize = this.size;
        style.lineHeight = `calc(${this.size} + .5rem)`;
      } else {
        style.fontSize = `${Number(this.size) * 0.005 + 1}rem`;
        style.lineHeight = `${Number(this.size) * 0.005 + 1.5}rem`;
      }
      if (this.slim) {
        style.margin = 0;
        style.lineHeight = style.fontSize;
      }
      return style;
    },
  },
};

export const alignmentMixin = {
  props: {
    justifyContent: {
      type: [String, Object],
      default: null,
    },

    justifyItems: {
      type: [String, Object],
      default: null,
    },

    alignContent: {
      type: [String, Object],
      default: null,
    },

    alignItems: {
      type: [String, Object],
      default: null,
    },

    row: {
      type: Boolean,
      default: false,
      description: 'aligns the content as a row',
    },
  },

  computed: {
    alignmentMixin() {
      const {
        justifyContent,
        justifyItems,
        alignContent,
        alignItems,
        row,
      } = this;

      const style = {};

      if (justifyContent) style.justifyContent = justifyContent;
      if (justifyItems) style.justifyItems = justifyItems;
      if (alignContent) style.alignContent = alignContent;
      if (alignItems) style.alignItems = alignItems;
      if (row) style.flexFlow = 'row';

      return style;
    },
  },
};

export const spacingMixin = {
  props: {
    slim: {
      type: Boolean,
      default: false,
      description: 'removes margin and padding',
    },
  },

  computed: {
    spacingMixin() {
      const style = {};

      if (this.slim) {
        style.padding = 0;
        style.margin = 0;
      }

      return style;
    },
  },
};

export const rippleMixin = {
  methods: {
    rippleMixin(e) {
      const { currentTarget: btn } = e;
      const left = (e.clientX - btn.offsetLeft) - 2.5;
      const top = (e.clientY - btn.offsetTop) - 2.5;
      const ripple = document.createElement('div');
      ripple.setAttribute('class', 'ripple');
      btn.appendChild(ripple);
      ripple.setAttribute('style', `top: ${top}px; left: ${left}px`);
      setTimeout(() => {
        btn.removeChild(ripple);
      }, 2000);
    },
  },
};
