import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Education from './components/Education'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='app'>
      <Header />
      <Home/>
      <AboutMe/>
      <Skills/>
      <Education/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
