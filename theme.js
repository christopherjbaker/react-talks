import theme from 'mdx-deck/themes';
console.log(theme)

export default {
    ...theme,
    fontSizes: [ '0.75em', '0.75em', '1em', '1.5em', '2em', '3em' ],

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

    // Customize your presentation theme here.
    //
    // Read the docs for more info:
    // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
    // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
