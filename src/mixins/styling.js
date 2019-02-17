function convertColor(color) {
  return Object.keys(this.$xstyles.theme.colors).includes(color)
    ? this.$xstyles.theme.colors[color] : color;
}

export const colorMixin = {
  props: {
    color: {
      type: String,
      default: 'inherit',
    },

    backgroundColor: {
      type: String,
      default: '',
    },
  },

  computed: {
    colorMixin() {
      const style = {};
      const convertColorBound = convertColor.bind(this);

      style.color = convertColorBound(this.color);

      if (this.backgroundColor) style.backgroundColor = convertColorBound(this.backgroundColor);

      return style;
    },
  },
};

export const fontMixin = {
  props: {
    bold: {
      type: Boolean,
      default: false,
    },

    inline: {
      type: Boolean,
      default: false,
    },

    size: {
      type: [String, Number],
      default: 0,
    },

    slim: {
      type: Boolean,
      default: false,
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
      type: String,
      default: 'initial',
    },

    justifyItems: {
      type: String,
      default: 'initial',
    },

    alignContent: {
      type: String,
      default: 'initial',
    },

    alignItems: {
      type: String,
      default: 'initial',
    },

    row: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    alignmentMixin() {
      const {
        justifyContent,
        justifyItems,
        alignContent,
        alignItems,
      } = this;

      const style = {
        justifyContent,
        justifyItems,
        alignContent,
        alignItems,
      };

      if (this.row) style.flexFlow = 'row';

      return style;
    },
  },
};

export const spacingMixin = {
  props: {
    slim: {
      type: Boolean,
      default: false,
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
