import React from 'react'
import img1 from '../../Assets/lawimg6.avif'
import img2 from '../../Assets/law15.jpg'
import img3 from '../../Assets/law13.jpg'
import LandingServices from './LandingServices'
import '../../Styles/LandingCarousel.css'
import LandingNavbar from './LandingNavbar'
import AboutUs from '../Common/AboutUs'
import Footer from '../Common/Footer'
import UserFooter from '../Common/UserFooter'
import ContactUs from '../Common/ContactUs'
function Landingcarousel() {
  return (
    <div>
      <LandingNavbar />

      <div className='landingcarimage' />
      <div className='landingcarText'>
        <p>The law is a weapon <br/> if you know how to use it.</p>
      </div>

      <div className='container'>

      </div>




      <LandingServices />
      <AboutUs />
      {/* <ContactUs /> */}
      {/* <Footer /> */}
      <UserFooter />
    </div>
  )
}

export default Landingcarousel