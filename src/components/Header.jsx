import './styles/header.css'

const Header = () => {
  return (
    <>
    <header>
        <nav className ="navbar">
            <a href="#home">
                <img className='logo' src="/logo-lm.png" alt="" />
            </a>
            <ul className = "menu">
                <li className="home_header">
                    <a className= 'ref' href="#home">
                        Home
                     </a>
                </li>
                <li className="about_me_header">
                    <a className= 'ref' href="#about_me">
                        About Me
                    </a>
                </li>
                <li className="skills_header">
                    <a className= 'ref' href="#skills">
                        Skills
                    </a>
                </li>
                <li className="education_header">
                    <a className= 'ref' href="#education">
                        Education
                    </a>
                </li>
                <li className="projects_header">
                    <a className= 'ref' href="#projects">
                        Projects
                    </a>
                </li>
                <li className="contact_me_header">
                    <a className= 'ref' href="#contact_me">
                        Contact me
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header