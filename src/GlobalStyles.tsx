import { createGlobalStyle } from 'styled-components'

export const theme = {
   colors: {
      primary: '#fb3f5c',
      secondary: '#1a1018',
      accent: '#F8EEEF',
      body: 'white',
      text: '#000',
      textSecondary: 'white',
   },
}
const size = {
   mobileS: '320px',
   mobileM: '375px',
   mobileL: '425px',
   tablet: '768px',
   laptop: '1024px',
   laptopL: '1440px',
   desktop: '2560px',
}
export const device = {
   mobileS: `(min-width: ${size.mobileS})`,
   mobileM: `(min-width: ${size.mobileM})`,
   mobileL: `(min-width: ${size.mobileL})`,
   tablet: `(min-width: ${size.tablet})`,
   laptop: `(min-width: ${size.laptop})`,
   laptopL: `(min-width: ${size.laptopL})`,
   desktop: `(min-width: ${size.desktop})`,
   desktopL: `(min-width: ${size.desktop})`,
}
const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Nunito Sans', sans-serif;
    max-width: 100vw;
    max-height: 100vh;

    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, p {
      margin-top: 0;
      margin-bottom: 0;
    }

    margin: 0;
  }


  img {
    max-width: 100%;
  }
`

export default GlobalStyles
