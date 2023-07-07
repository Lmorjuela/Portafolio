import './styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='title_footer'>Laura Marcela Orjuela Reinosa</h2>
      <div className='icons'>
        <a href="#home2">
          <i class='bx bx-home'></i>
        </a>

        <a href="http://www.linkedin.com/in/laura-marcela-o-5bb302118" target='_blank'>
          <i className='bx bxl-linkedin'></i>
        </a>

        <a href="https://github.com/Lmorjuela" target='_blank'>
          <i className='bx bxl-github'></i>
        </a>
      </div>
      <div className='autor'>
        <i class='bx bx-copyright'></i> All rights reserved by Laura Orjuela 
      </div>
    </footer>
  )
}

export default Footer