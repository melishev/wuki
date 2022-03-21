/* eslint-disable vue/no-reserved-props */
import { defineComponent, inject, ref } from 'vue';
import { Code as CodeCss } from '@wuki-ui/css';
import { Copy, Check } from 'lucide-vue-next';
import { combineClass, convertStyle } from '@wuki-ui/utils';

const Grid = defineComponent({
  components: {
    Copy,
    Check,
  },
  props: {
    style: {
      type: Object,
      default: null,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    beforeIcon: {
      // type: String,
      default: () => <Copy size={20} stroke-width={1} />,
    },
    afterIcon: {
      // type: String,
      default: () => <Check size={20} stroke-width={1} />,
    },
  },
  setup({
    style, inline, beforeIcon, afterIcon,
  }, { slots }) {
    const theme = inject('theme');
    const { classes } = CodeCss(theme);
    const inlineCss = convertStyle(style);

    const status = ref('disable');

    function copyCode() {
      navigator.clipboard.writeText(slots.default()[0].children)
        .then(() => {
          status.value = 'active';
          setTimeout(() => { status.value = 'disable'; }, 1000);
        });
    }

    const codeMultiLine = () => (
      <pre class={combineClass(classes.code, inlineCss, status.value)}>
        <button type="button" aria-label="Copy" onClick={copyCode}>
          {status.value !== 'active'
            ? <beforeIcon />
            : <afterIcon />
          }
        </button>
        <code>{slots.default()}</code>
      </pre>
    );

    const codeInline = () => (
      <code
        class={combineClass(classes.codeInline, inlineCss, status.value)}
        onClick={copyCode}
        role="button"
        tabIndex={0}
      >
        {slots.default()}
      </code>
    );

    return inline
      ? codeInline
      : codeMultiLine;
  },
});

export default Grid;
