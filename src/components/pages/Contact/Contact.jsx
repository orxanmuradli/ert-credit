import React, { useState, useEffect } from "react";
import "./Contact.css";
import asads from "../../../assets/images/asads.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    text: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Istifadəçi adı soyadi daxil edin";
    }

    if (!formData.number.trim()) {
      validationErrors.number = "Nomre daxil edin";
    }
    if (!formData.text.trim()) {
      validationErrors.text = "Isramic gonderin.";
    }
    setErrors(validationErrors);

    console.log(formData);
  };
  return (
    <section className="contact-wrapper container">
      <div className="contact-container">
        <img src={asads} alt="" />
        <h1>Contact</h1>
        <span>
          We are founded by an expert team of payroll and tax specialiasts
          coupled with technologyleaders who are on a mission to make it very
          simple for businesses
        </span>
      </div>
      <div className="Footer-container">
        <div className="map-text">
          <h1>CONTACT US</h1>
          <span>Schedule a Free Consultation</span>
        </div>

        <div className="map-lorem">
          <span>
            Call or email us today to determine within a few minutes if your
            business qualifies for the ERC Credit. There is no financial
            investment upfront and you only invest in the service if your return
            is significantly higher than your investment.
          </span>
        </div>
      </div>
      <div className="form-form">
      <form onSubmit={handleSubmit} className="form">
        <div className="main">
          <div className="leftside">
            <div className="kafas">
              <div>
                <div className="naming">
                  <label for="">Full Name</label> <br />
                  <input
                    type="text"
                    placeholder="phone number"
                    className="inputss"
                    onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="naming-2">
                  <label for="">INDUSTRY</label> <br />
                  <input
                    type="text"
                    placeholder="Enter your indutry"
                    className="inputss"
                    onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
                
              </div>
              <div>
                <div className="naming-4">
                  <label for="">Company Name</label> <br />
                  <input
                    type="text"
                    placeholder="Enter your comany name"
                    className="inputss"
                    onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="naming-5">
                  <label for="">phone number</label> <br />
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="inputss"
                    onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
              </div>
            </div>
            <div className="naming-3">
                  <label for="">YOUR EMAIL</label> <br />
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    className="inputss"
                    onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </div>
          </div>
        </div>
        <div className="contact-general">
          <div className="contact-left">
            <span>AVERAGE # OF EMPLOYEES IN 2020</span>

            <div className="contact-icon">
              <p>1-5</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M-6.61271e-08 1.51281L6 8L12 1.51281L10.5996 -6.12134e-08L6 4.97308L1.4004 -4.63323e-07L-6.61271e-08 1.51281Z"
                  fill="#4A4A4A"
                />
              </svg>
            </div>
          </div>

          <div className="contact-right">
            <span>CURRENT # NUMBER OF EMPLOYEES IN 2021</span>

            <div className="contact-icon">
              <p>10-15</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M-6.61271e-08 1.51281L6 8L12 1.51281L10.5996 -6.12134e-08L6 4.97308L1.4004 -4.63323e-07L-6.61271e-08 1.51281Z"
                  fill="#4A4A4A"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bottomsside">
          <button className="button-send" type="submit">
            <p>Send Message</p>
          </button>
        </div>
      </form>
      </div>
      
      {/* <div className="Contact-text">
        <div className="contact-page">
          <div className="contact-text-left">
            <div className="span-text">
              <p>Full Name</p>
              <span>Enter your Full Name</span>
              <input type="text" />
            </div>

            <div className="span-text">
              <p>INDUSTRY</p>
              <span>Enter your indutry</span>
            </div>

            <div className="span-text">
              <p>YOUR EMAIL</p>
              <span>Enter your email address</span>
            </div>
          </div>
          <div className="contact-option">
            <div className="contact-text-option">
              <p>Company Name</p>
              <span>Enter your comany name</span>
            </div>

            <div className="contact-text-option">
              <p>phone number</p>
              <span>Enter your phone number</span>
            </div>
          </div>
        </div>
        <div className="contact-general">
          <div className="contact-left">
            <span>AVERAGE # OF EMPLOYEES IN 2020</span>

            <div className="contact-icon">
              <p>1-5</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M-6.61271e-08 1.51281L6 8L12 1.51281L10.5996 -6.12134e-08L6 4.97308L1.4004 -4.63323e-07L-6.61271e-08 1.51281Z"
                  fill="#4A4A4A"
                />
              </svg>
            </div>
          </div>

          <div className="contact-right">
            <span>CURRENT # NUMBER OF EMPLOYEES IN 2021</span>

            <div className="contact-icon">
              <p>10-15</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M-6.61271e-08 1.51281L6 8L12 1.51281L10.5996 -6.12134e-08L6 4.97308L1.4004 -4.63323e-07L-6.61271e-08 1.51281Z"
                  fill="#4A4A4A"
                />
              </svg>
            </div>
          </div>
        </div>

        <button className="button-send">
          <p>Send Message</p>
        </button>
      </div> */}
    </section>
  );
};

export default Contact;
