import './App.css'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Header from './components/Header'
import Home from './components/Home'
import Skills from './components/Skills'

function App() {

  return (
    <div className='app'>
      <Header />
      <Home/>
      <AboutMe/>
      <Skills/>
      <Education/>
    </div>
  )
}

export default App
