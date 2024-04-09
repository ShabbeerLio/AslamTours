import React, { useEffect } from 'react'
import "./About.css"
import ScrollReveal from 'scrollreveal'
import AboutKey from "../../Assets/Images/services3.jpg"

const About = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.about-main', {})

    return () => sr.destroy();
  }, []);



  return (
    <>
      <div className="aboutUs">
        <div className="about-main">
          <div className="about-left">
            <div className="about-title">
              <h2>Aslam Tours And Travels</h2>
            </div>
            <div className="about-detail">
              <p>Welcome to Aslam Tours And Travels, Aslam Tours and Travels is your premier destination for convenient and reliable car hire services. With a commitment to excellence and customer satisfaction, we pride ourselves on delivering top-notch vehicles and exceptional service to meet all your transportation needs. Whether you're planning a business trip, family vacation, or weekend getaway, our diverse fleet of well-maintained vehicles ensures you'll find the perfect ride for any occasion.</p>
              <p>Backed by years of industry experience and a team of dedicated professionals, Aslam Tours and Travels is your trusted partner in seamless travel experiences. From compact cars to spacious SUVs, we offer competitive rates and flexible rental options, making us the go-to choice for discerning travelers seeking comfort, convenience, and peace of mind on the road. Experience the difference with Aslam Tours and Travels – where your journey begins with us.</p>
            </div>
          </div>
          <div className="about-right">
            <img className="image2" src={AboutKey} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
