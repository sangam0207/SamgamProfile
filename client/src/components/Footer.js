import React from 'react'
import "./footer.css"

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <div className="footer">
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          <div className="first mt-5">
            <h4>Sangam Shukla</h4>
            <p>© {year} Sangam Shukla All rights reserved</p>
            <p className='d-flex'>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook mx-3'></i>
            </p>
          </div>
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>Feel free to reach out anytime – I'm just a message away, ready to assist you!</p>
            <p>ssrv2024@gmail.com</p>
            <p>+91 8381847820</p>
          </div>
          <div className="forth mt-5">
            <h4>Connect me on</h4>
            <a href='https://www.linkedin.com/in/sangam-shukla-225412271/'><img src='/linkedin.png' alt='linkedin'style={{backgroundColor:'white',borderRadius:'50%',margin:'4px',padding:'4px',width:'40px'}}/></a>
            <a href='https://github.com/sangam0207'><img src='/github.png' alt='github' style={{backgroundColor:'white',borderRadius:'50%',margin:'4px',padding:'4px',width:'40px'}}/></a>
            <a href='https://www.instagram.com/sangam.shukla.7503/'><img src='/instagram.png' alt='instagram' style={{backgroundColor:'white',borderRadius:'50%',margin:'4px',padding:'4px',width:'40px'}}/></a>
          </div>
          <div className="third mt-5">
            <h4>About</h4>
            <p><a href='https://drive.google.com/file/d/1bQIH4m0fGAWtd1XN56FUr3SQzd8n3YvR/view?usp=sharing' style={{textDecoration:'none',color:'white'}}>Resume</a></p>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Footer