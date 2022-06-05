import Layout from './components/layout/Layout'
import { Contacts } from './pages/Contacts'
import { Intro } from './pages/Intro'
import { Projects } from './pages/Projects'
import { Skills } from './pages/Skills'

function App() {
   return (
      <Layout>
         <Intro />
         <Skills />
         <Projects />
         <Contacts />
      </Layout>
   )
}

export default App
