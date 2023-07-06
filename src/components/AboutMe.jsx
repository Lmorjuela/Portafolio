import './styles/aboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutMe' id='about_me'>
            <div className='img_aboutMe'>
                <img className='img_aboutMe' src="/img_about_me.jpeg" alt="" />
            </div>
            <div className='description'>
                <h1 className='name_about'>Laura Marcela Orjuela Reinosa</h1>
                <p className='paragraph_me'>I am a professional in industrial engineering and a proactive student of web development.
                    I aspire to obtain employment in the world of web development. To gain experience, new knowledge and strengthen my professional life.
                    <br />
                    <br />
                    I am an optimistic and persistent person to achieve my goals. I am competent in teamwork, assertive communication, problem solving, responsible and committed. I like to learn every day and continuously improve myself.
                </p>
            </div>
        </div>
    )
}

export default AboutMe