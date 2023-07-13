import React from 'react'
import '../styles/style.css';
import img1 from '../Assets/Images/im-lifecycle.jpg';

function CodeForInterview() {
  return (
    <>
    <div>
    <section className="hero">
    {/* <img src = {img1} className='image'></img> */}
    <div className="hero-content">
       
      <h1>Welcome to Our Website</h1>
      <p>
        We provide amazing services to help your business grow. Contact us
        today to get started.
      </p>
      
    </div>
  </section>

  <section className="about">
    <div className="about-content">
      <h2>About Us</h2>
      <p>
      We provide amazing services to help your business grow. Contact us
        today to get started.
        
      </p>
    </div>
  </section>

  <section className="services">
    <div className="services-content">
      <h2>Our Services</h2>
      <ul>
        <li>IT services</li>
        <li>Business</li>
        <li>Enterpreneurship</li>
      </ul>
    </div>
  </section>

  <section className="contact">
    <div className="contact-content">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, feel free to reach out to
        us.
      </p>
      <a href="/contact" className="cta-button">
        Contact Us
      </a>
    </div>
  </section>

  <footer>
    <p>&copy; 2023 Your Company. All rights reserved.</p>
  </footer>
</div>
  </>
  )
}

export default CodeForInterview
