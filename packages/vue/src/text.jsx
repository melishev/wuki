/* eslint-disable vue/no-reserved-props */
import { defineComponent, inject, ref } from 'vue';
import { Text as TextCss } from '@wuki-ui/css';
import { combineClass, convertStyle } from '@wuki-ui/utils';

const Text = defineComponent({
  props: {
    style: {
      type: Object,
      default: null,
    },
    tag: {
      type: String,
      default: 'p',
    },
    variant: {
      type: String,
      default: '',
    },
  },
  setup({ style, tag, variant }, { slots }) {
    const theme = inject('theme');
    const { classes } = TextCss(theme);
    const inlineCss = convertStyle(style);

    let classVariant = ref('');

    if (Object.keys(classes).includes(tag)) {
      classVariant = classes[variant] || classes[tag];
    } else {
      classVariant = classes[variant];
    }

    return () => <tag class={combineClass(classVariant, inlineCss)}>{slots.default()}</tag>;
  },
});

export default Text;
