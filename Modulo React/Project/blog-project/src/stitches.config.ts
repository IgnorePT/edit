import { createStitches } from '@stitches/react';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            richBlack: '#0B0D17',
            lavenderBlue: '#D0D6F9',
            white: '#FFFFFF',
            black: '#000000',
        },
        fonts: {
          bellefair: 'Bellefair, apple-system, sans-serif',
          barlowCondensed: 'Barlow Condensed, sans-serif',
        }
    },
    media: {
        bp1: '(min-width: 480px)',
        bp2: '(min-width: 767px)',
        bp3: '(min-width: 1024px)',
    },
    utils: {
        mX: (value : number) => ({ marginLeft: value, marginRight: value }),
        mY: (value : number) => ({ marginTop: value, marginBottom: value }),
        px: (value: number) => ({paddingLeft: `${value}rem`, paddingRight: `${value}rem`}),
        py: (value: number) => ({paddingTop: `${value}rem`, paddingBottom: `${value}rem`}) 

      },
});

export const globalStyles = globalCss({
    "@import": [
      "url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap')",
    ],
    "*": {
      boxSizing: "border-box",
      outline: 0,
    },
    "html,body": {
      padding: 0,
      margin: 0,
      fontFamily: "'Roboto',Helvetica,Arial,sans-serif",
      fontSize: "62.5%",
      backgroundColor: "$backgroundProductPage",
    },
    input: {
      fontFamily: "'Roboto',Helvetica,Arial,sans-serif",
      fontWeight: 400,
    },
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    button: {
      fontFamily: "'Roboto',Helvetica,Arial,sans-serif",
    },

  })