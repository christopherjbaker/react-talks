import { future as theme } from 'mdx-deck/themes';

export default {
    ...theme,
    fontSizes: [ '0.75em', '0.75em', '1em', '1.5em', '2em', '3em' ],
    css: {
      fontSize: '32px',
      textAlign: 'center',
    },

    heading: {
      textTransform: 'none',
      fontWeight: 600
    },
    ul: {
        li: {
            p: {
                margin: 0,
            },
        },
    },
    ol: {
        li: {
            p: {
                margin: 0,
            },
        },
    },
};
