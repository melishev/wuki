import colors from './colors';

export default {
  base: 16,
  family: 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", sans-serif',
  variants: {
    h1: {
      fontSize: '2.566rem',
      fontWeight: 'bold',
      lineHeight: 1.18,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xs: {
          fontSize: '1.764rem',
        },
        sm: {
          fontSize: '1.924rem',
        },
        md: {
          fontSize: '2.085rem',
        },
        lg: {
          fontSize: '2.245rem',
        },
        xl: {
          fontSize: '2.406rem',
        },
        xxl: {
          fontSize: '2.566rem',
        },
      },
    },
    h2: {
      fontSize: '2.281rem',
      fontWeight: 'bold',
      lineHeight: 1.2,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '2.138rem',
        },
        xxl: {
          fontSize: '2.281rem',
        },
      },
    },
    h3: {
      fontSize: '2.027rem',
      fontWeight: 'bold',
      lineHeight: 1.24,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '1.901rem',
        },
        xxl: {
          fontSize: '2.027rem',
        },
      },
    },
    h4: {
      fontSize: '1.802rem',
      fontWeight: 'bold',
      lineHeight: 1.26,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '1.689rem',
        },
        xxl: {
          fontSize: '1.802rem',
        },
      },
    },
    h5: {
      fontSize: '1.602rem',
      fontWeight: 'bold',
      lineHeight: 1.24,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '1.502rem',
        },
        xxl: {
          fontSize: '1.602rem',
        },
      },
    },
    h6: {
      fontSize: '1.424rem',
      fontWeight: 'bold',
      lineHeight: 1.22,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '1.335rem',
        },
        xxl: {
          fontSize: '1.424rem',
        },
      },
    },
    subTitle: {
      fontSize: '1.266rem',
      fontWeight: 600,
      lineHeight: 1.4,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '1.186rem',
        },
        xxl: {
          fontSize: '1.266rem',
        },
      },
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.54,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '1.055rem',
        },
        xxl: {
          fontSize: '1.125rem',
        },
      },
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.48,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '0.938rem',
        },
        xxl: {
          fontSize: '1rem',
        },
      },
    },
    small: {
      fontSize: '0.79rem',
      fontWeight: 500,
      lineHeight: 1.24,
      color: colors.grey[900],
      margin: '0',
      breakPoints: {
        xl: {
          fontSize: '0.741rem',
        },
        xxl: {
          fontSize: '0.79rem',
        },
      },
    },
  },
};
