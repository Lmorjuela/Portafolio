import './styles/skills.css'

const Skills = () => {
  return (
    <div className="skills" id='skills'>
        <h1 className='title'>Skills</h1>
        <div className='section_skills'>
            <div className='container_skills'>
                <img className='img_skills'src="/css.png" alt="" />
                <h3 className='name_skills'>CSS</h3>
            </div>
            <div className='container_skills'>
                <img className='img_skills'src="/html.png" alt="" />
                <h3 className='name_skills'>HTML</h3>
            </div>
            <div className='container_skills'>
                <img className='img_skills'src="/js.png" alt="" />
                <h3 className='name_skills'>JavaScript</h3>
            </div>
            <div className='container_skills'>
                <img className='img_skills'src="/react.jpg" alt="" />
                <h3 className='name_skills'>React</h3>
            </div>
            <div className='container_skills'>
                <img className='img_skills'src="/python1.png" alt="" />
                <h3 className='name_skills'>Python</h3>
            </div>
            <div className='container_skills'>
                <img className='img_skills'src="/github1.jpeg" alt="" />
                <h3 className='name_skills'>Github</h3>
            </div>
        </div>
    </div>
  )
}

export default Skills