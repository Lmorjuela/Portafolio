import './styles/contactMe.css'

const ContactMe = () => {
    return (
        <form className='form' id='contact_me'   action="https://formspree.io/f/xoqoqjwp"
        method="POST">
            <div className='form_container'>
                <h1 className='title_CM'>Contact Me</h1>
                <p className='paragraph_contact'>Complete the form below and I will contact you as soon as possible.</p>
                <div className='input'>
                <input type="text" className='form_input' placeholder='Name' name="name"/>
                <input type="email" className='form_input' placeholder='Email' name="email" />
                <textarea className='form_input form_input--message' placeholder='Message' name="message"></textarea>
           
                <input type="submit" value='Send' className='form_btn' />
                </div>
            </div>
        </form>
    )
}

export default ContactMe