import './styles/home.css'

const Home = () => {
    return (
        <>
        <div id='home2'>
            <div className='home' id='home'>
                <div className='text'>
                    <h2 className='hi'>Hi! My name is </h2>
                    <h1 className='name'>Laura Marcela Orjuela</h1>
                    <h2 className='ocupation'> And I am <span className='span_ocupation'> Full Stack Developer </span></h2>
                    <div className='social_network'>
                        <a href="http://www.linkedin.com/in/laura-marcela-o-5bb302118" target='_blank'>
                            <i className='bx bxl-linkedin'></i>
                        </a>
                        <a href="https://github.com/Lmorjuela" target='_blank'>
                        <i className='bx bxl-github'></i>
                        </a>
                        <a href="https://instagram.com/laura_marcela24?igshid=NGExMmI2YTkyZg==" target='_blank'>
                        <i className='bx bxl-instagram' ></i>
                        </a>
                    </div>
                    <div className='CV'>
                        <a className='download_cv' href="/CV_Laura_Orjuela.pdf" download='CV_Laura_Orjuela' title='Download CV'> Download CV </a>
                    </div>
                </div>
                <div className='img'>
                    <img className='img_me' src="/img_home.jpeg" alt="" />
                </div>

            </div>
        </div>
        </>
    )
}

export default Home