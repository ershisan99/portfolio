import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import GlobalStyles, { theme } from './GlobalStyles'
import { Contacts } from './pages/Contacts'
import { Intro } from './pages/Intro'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <div>
            <Header />
            <Intro />
            <Skills />
            <Projects />
            <Contacts />
         </div>
      </ThemeProvider>
   )
}

export default App
