import  {useRef} from 'react'
import "./Contact.css"
import LinkedIn from "../Assets/linkedin.svg"
import Github from "../Assets/github.svg"
import Insta from "../Assets/instagram.svg"
import Facebook from "../Assets/facebook.svg"
import emailjs from '@emailjs/browser'

function Contact() {const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zb5jzzm', 'template_q87sg8h', form.current, {
        publicKey: 'fXImG0dyj2uTGHGY1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <section id='contact'>
        <div id='social'>
            <h1 className='socialTitle'>Socials</h1>
            <p>Here you connect with me on my social media</p>

            <div className='socialImgs'>
                <a href='https://www.linkedin.com/in/aditya-nagar-766956325'><img src={LinkedIn} alt='LinkedIn' className='socialImg'/></a>
                <a href='https://github.com/adii360/nagaradii.git'><img src={Github} alt='Github' className='socialImg'/></a>
                <a href='https://www.instagram.com/darkknight2577/profilecard/?igsh=cHN5eHdub2YwZG0x'><img src={Insta} alt='Instagram' className='socialImg'/></a>
                <a href='https://www.facebook.com/share/1LHaRCK13E/'><img src={Facebook} alt='Facebook' className='socialImg'/></a>

            </div>
        </div>

        <div id='contactPage'>
            <h1 id='contactTitle'>Contact</h1>
            <span className='contactDesc'>Feel free to contact me</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text'classname='name' placeholder='Your Name' name='from_name' required/>
                <input type='email'classname='email' placeholder='Your Email' name='your_email' required/>
                <textarea className='msg' name='message' rows='5' placeholder='Your Message' required></textarea>
                <button type='submit' value='Send'className='submitBtn' onClick={() =>{alert ("Form Submitted!!")}}>Submit</button>
                
                </form>
        </div>
    </section>
      
    </>
  )
}

export default Contact
