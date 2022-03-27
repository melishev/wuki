/* eslint-disable vue/no-reserved-props */
import { defineComponent, inject, ref } from 'vue';
import { Grid as GridCss } from '@wuki-ui/css';
import { combineClass, convertStyle } from '@wuki-ui/utils';

const Grid = defineComponent({
  props: {
    style: {
      type: Object,
      default: null,
    },
    tag: {
      type: String,
      default: 'div',
    },
    col: {
      type: [Number, Object],
      default: 1,
    },
    offset: {
      type: Number,
      default: null,
    },
    container: {
      type: Boolean,
      default: false,
    },
  },
  setup({
    style, tag: Tag, col, offset, container,
  }, { slots }) {
    const theme = inject('theme');
    const { classes } = GridCss(theme);
    const inlineCss = convertStyle(style);

    const classCol = ref('');
    const classOffset = ref('');
    const classContainer = ref('');

    if (container) {
      classContainer.value = classes.con;
    } else {
      /**
       * Creates and returns a className col
       */
      if (typeof col === 'object') {
        classCol.value = Object.entries(col).reduce((acc, [key, value]) => {
          acc.push(classes[`col-${key}-${value}`]);
          return acc;
        }, []).join(' ');
      } else {
        classCol.value = classes[`col-xs-${col}`];
      }

      /**
       * Creates and returns a class Name offset
       */
      if (offset) {
        classOffset.value = classes[`offset-${offset}`];
      }
    }

    return () => (
      <Tag class={combineClass(classCol.value, classOffset.value, classContainer.value, inlineCss)}>
        {slots.default()}
      </Tag>
    );
  },
});

export default Grid;
