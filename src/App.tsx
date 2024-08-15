import { About,Contact,Home,Projects, Header, Footer } from './components'
import { RefProvider } from './store/ref_store'
import './App.css'

function App() {

  return (
    <RefProvider>
      <div>
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </RefProvider>
  )
}

export default App
