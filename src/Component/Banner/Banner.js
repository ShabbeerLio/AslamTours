import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
// import bannerimg from "../../Assets/Images/banner.webp"
import "./Banner.css"

const Banner = () => {

  useEffect(() => {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: true,
    });

    sr.reveal('.banner-heading', {})

    return () => sr.destroy();
}, []);

  return (
    <>
      <div className="banner">
        <div className="banner-heading">
          {/* <h1 >Urban Home Appliances Point</h1> */}
        </div>
        <img src="https://imgd.aeplcdn.com/1056x594/n/c6es93a_1572125.jpg?q=80" alt="" />
      </div>
    </>
  )
}

export default Banner
