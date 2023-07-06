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
                    <a href="#home">
                        Home
                     </a>
                </li>
                <li className="about_me">
                    <a href="#about_me">
                        About Me
                    </a>
                </li>
                <li className="skills">
                    <a href="#skills">
                        Skills
                    </a>
                </li>
                <li className="education">
                    <a href="#education">
                        Education
                    </a>
                </li>
                <li className="projects">
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li className="contact_me">
                    <a href="#contact_me">
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