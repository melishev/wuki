import { defineComponent, provide } from 'vue';
import { WukiProvider as WukiProviderCss, Normalize } from '@wuki-ui/css';
import * as wukiTheme from '@wuki-ui/theme';

const WukiProvider = defineComponent({
  props: {
    theme: {
      type: Object,
      default: null,
    },
    cssBaseLine: {
      type: Boolean,
      default: false,
    },
  },
  setup({ theme, cssBaseLine }, { slots }) {
    provide('theme', theme || wukiTheme); // lodash - merge
    WukiProviderCss(theme || wukiTheme); // lodash - merge

    if (cssBaseLine) {
      Normalize();
    }

    return () => slots.default();
  },
});

export default WukiProvider;
