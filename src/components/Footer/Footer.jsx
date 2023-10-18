import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
import { onMousehandler } from "../Helper/onmouse";
import { onMouseleave } from "../Helper/onmouseleave";
import Burger from "../Header/Burger";

const Footer = () => {
  const { pathname } = useLocation();
  console.log({ pathname });
  return (
    <section className="Footer-wrapper">

      {pathname !== "/contact" && (
        <div className="Footer-container">
          <div className="map-text">
            <h1>CONTACT US</h1>
            <span>Schedule a Free Consultation</span>
          </div>

          <div className="map-lorem">
            <span>
              Call or email us today to determine within a few minutes if your
              business qualifies for the ERC Credit. There is no financial
              investment upfront and you only invest in the service if your
              return is significantly higher than your investment.
            </span>
          </div>
        </div>
      )}

      <div id="iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1789798585896!2d49.8220317146187!3d40.38272567936917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da6f327d463%3A0xbe68553e791e5e84!2sCoders%20Azerbaijan!5e0!3m2!1sru!2s!4v1671532160201!5m2!1sru!2s"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="end-text">
        <div
          className="footer-left"
          onMouseEnter={onMousehandler}
          onMouseLeave={onMouseleave}
        >
          <span>ert.credit</span>
          <p>copyright @ert.credit 2021 reserved</p>
        </div>

        <div
          className="footer-right"
          onMouseEnter={onMousehandler}
          onMouseLeave={onMouseleave}
        >
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Partnerships</a>
          <a href="/">FAQs</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
