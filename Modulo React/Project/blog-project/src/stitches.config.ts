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
    mX: (value: number) => ({ marginLeft: value, marginRight: value }),
    mY: (value: number) => ({ marginTop: value, marginBottom: value }),
    px: (value: number) => ({ paddingLeft: `${value}rem`, paddingRight: `${value}rem` }),
    py: (value: number) => ({ paddingTop: `${value}rem`, paddingBottom: `${value}rem` })

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
    fontFamily: "$barlowCondensed",
    fontSize: "62.5%",
    backgroundColor: "$richBlack",
  },
  input: {
    fontFamily: "$barlowCondensed",
    fontWeight: 400,
  },
  a: {
    color: "$white",
    textDecoration: "none",
    letterSpacing: "0.027rem"
  },
  button: {
    fontFamily: "$barlowCondensed",
  },
  "h1,h2,h3,h4": {
    fontFamily: "$Bellefair",
    fontWeight: "400",
    color: '$white'
  },
  "h5,p,span,a": {
    fontFamily: "$barlowCondensed",
    fontWeight: "400",
    fontSize: "1.8rem",
    lineHeight: "3.2rem",
    color: "$lavenderBlue",
  },
  h1: {
    fontSize: "15rem",
    lineHeight: "17.2rem",
    textTransform: "uppercase",
  },

  h2: {
    fontSize: "10rem",
    lineHeight: "11.5rem",
    textTransform: "uppercase",
  },

  h3: {
    fontSize: " 5.8rem",
    lineHeight: "6.4rem",
  },

  h4: {
    fontSize: "3.2rem",
    lineHeight: "3.7rem",
  },

  h5: {
    fontSize: " 2.8rem",
    lineHeight: "3.4rem",
    letterSpacing: "0.4725rem",
  }
})