import React, { useEffect, useState } from 'react'
import "./ContactUs.css"
import ScrollReveal from 'scrollreveal'
import contactImg from "../../Assets/Images/contact.jpg"

const ContactUs = (props) => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.contact-main', {})
    sr.reveal('.contact-body', {})

    return () => sr.destroy();
  }, []);

  // form
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name;
    const phoneNumber = formData.number;
    const message = formData.message;

    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);

    setFormData({
      name: '',
      number: '',
      message: ''
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };


  return (
    <>
      <div className="contact">
        <div className="contact-main">
          <div className="contact-left">
            <h2>Need a ride? Contact us today!</h2>
            <p>Welcome to Aslam Tours and Travels, your premier destination for hassle-free car rentals. Whether you're planning a family vacation, a business trip, or a weekend getaway, we've got you covered. With our extensive fleet of vehicles, including sedans, SUVs, and minivans, you can choose the perfect ride to suit your needs. Our dedicated team is committed to providing top-notch customer service, ensuring a seamless booking experience from start to finish.</p>
            <p>Contact us today to reserve your vehicle and embark on your next adventure with confidence. At Aslam Tours and Travels, we're here to make your journey memorable and convenient.</p>
            <div className="contact-caller-button">
              <a href="tel: +916398097875">
                <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path strokeDasharray="64" strokeDashoffset="64" d="M8 3C8.5 3 10.5 7.5 10.5 8C10.5 9 9 10 8.5 11C8 12 9 13 10 14C10.3943 14.3943 12 16 13 15.5C14 15 15 13.5 16 13.5C16.5 13.5 21 15.5 21 16C21 18 19.5 19.5 18 20C16.5 20.5 15.5 20.5 13.5 20C11.5 19.5 10 19 7.5 16.5C5 14 4.5 12.5 4 10.5C3.5 8.5 3.5 7.5 4 6C4.5 4.5 6 3 8 3Z">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                      <animateTransform attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.6s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></animateTransform>
                    </path>
                    <path strokeDasharray="4" strokeDashoffset="4" d="M14 7.04404C14.6608 7.34734 15.2571 7.76718 15.7624 8.27723M16.956 10C16.6606 9.35636 16.2546 8.77401 15.7624 8.27723" opacity="0">
                      <set id="lineMdPhoneCallLoop0" attributeName="opacity" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" to="1"></set>
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.2s" values="4;8"></animate>
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s;lineMdPhoneCallLoop0.begin+3.3s" dur="0.3s" values="0;4"></animate>
                      <set attributeName="opacity" begin="1.6s;lineMdPhoneCallLoop0.begin+3.6s" to="0"></set>
                    </path>
                    <path strokeDasharray="10" strokeDashoffset="10" d="M20.748 9C20.3874 7.59926 19.6571 6.347 18.6672 5.3535M15 3.25203C16.4105 3.61507 17.6704 4.3531 18.6672 5.3535" opacity="0">
                      <set attributeName="opacity" begin="1s;lineMdPhoneCallLoop0.begin+3s" to="1"></set>
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s;lineMdPhoneCallLoop0.begin+3s" dur="0.2s" values="10;20"></animate>
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s;lineMdPhoneCallLoop0.begin+3.5s" dur="0.3s" values="0;10"></animate>
                      <set attributeName="opacity" begin="1.8s;lineMdPhoneCallLoop0.begin+3.8s" to="0"></set>
                    </path>
                  </g>
                </svg>
                <div className="contact-caller-button-number">
                  <p>Are you searching for Technician</p>
                  <h4>+91 6398097875</h4>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-right">
            <h3 style={{ paddingBottom: "10px" }}>Get a Quick Help </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  value={formData.name}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  value={formData.number}
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Phone No."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={formData.message}
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Get Call Back
              </button>
            </form>
          </div>
        </div>
        <div className="contact-body">
          <div className="contact-body-left">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact-body-right">
            <p>At Aslam Tours and Travels, we understand that flexibility is key when it comes to travel plans. That's why we offer flexible rental durations, whether you need a car for a day, a week, or even longer. Our competitive rates and transparent pricing ensure that you get the best value for your money, with no hidden fees or surprises along the way.</p>
            <p> Customer satisfaction is our top priority, and we strive to exceed your expectations with every rental. From our easy online booking platform to our convenient pickup and drop-off locations, we're dedicated to making your experience with us as convenient and enjoyable as possible. Contact us today to learn more about our services and start planning your next journey with Aslam Tours and Travels.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
