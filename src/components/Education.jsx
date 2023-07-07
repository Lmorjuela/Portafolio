import './styles/education.css'

const Education = () => {
    return (
        <div className='education' id='education'>
            <h1 className='title_ed'>Education</h1>
            <div className='section_education'>
                <div className='container_education'>
                    <img className='img_education' src="/univ_ibg.jpeg" alt="" />
                    <h2 className='name_education'>Industrial Engineering</h2>
                    <h3 className='time_education'>2017 - 2022</h3>
                </div>
                <div className='container_education'>
                    <img className='img_education' src="/university.png" alt="" />
                    <h2 className='name_education'>Excel Skills for Business</h2>
                    <h3 className='time_education'>2020 - 2021</h3>
                </div>
                <div className='container_education'>
                    <img className='img_education' src="/academlo.png" alt="" />
                    <h2 className='name_education'>Full-Stack Web Development & Computer Sciences</h2>
                    <h3 className='time_education'>2023 - En curso</h3>
                </div>
            </div>

        </div>
    )
}

export default Education