import React from "react";
import "./Partnerships.css";
import asads from "../../assets/images/asads.png";
import help1 from "../../assets/icons/help1.png";
import help2 from "../../assets/icons/help2.png";
import help3 from "../../assets/icons/help3.png";
import help4 from "../../assets/icons/help4.png";
import help5 from "../../assets/icons/help5.png";
import velo from "../../assets/icons/velo.png";
import help7 from "../../assets/icons/help7.png";
import bullet from "../../assets/icons/bullet.png";
import bullet2 from "../../assets/icons/bullet2.png";
const Partnerships = () => {
  return (
    <section className="parterships-wrapper container">
      <div className="parterships-container">
        <img src={asads} alt="" />
        <h1>Partnerships</h1>
        <span>
          We are founded by an expert team of payroll and tax specialiasts
          coupled with technologyleaders who are on a mission to make it very
          simple for businesses to claim their Employee Retention Credit (ERC)
        </span>
      </div>

      <div className="Partner">
        <div className="Partner-wrapper">
          <h2>PARTNERSHIP</h2>
          <span>Why Partner With Us?</span>
          <p>
            Our goal is to maximize our clients returns and stand by them until
            they receive their refund checks from the IRS.
          </p>
        </div>
      </div>
      <div className="Help-text">
        <div className="Help-texteria">
          <div className="Help-wrapper">
            <img src={help1} alt="" />
            <span>
              We’ll help you develop a strategic prospecting approach, which
              will help you gain access into accounts easier.
            </span>
          </div>

          <div className="Help-wrapper">
            <img src={help2} alt="" />
            <span>
              You’ll have the option to earn commissions, which will also help
              increase your employee retention.
            </span>
          </div>

          <div className="Help-wrapper">
            <img src={help3} alt="" />
            <span>
              We’ll provide valuable content, which will help you drive
              conversations.
            </span>
          </div>

          <div className="Help-wrapper">
            <img src={help4} alt="" />
            <span>
              You’ll have the opportunity to increase your client retention.
            </span>
          </div>

          <div className="Help-wrapper">
            <img src={help5} alt="" />
            <span>
              We’ll provide sales support and webinars to help drive education
              for you and your teams.
            </span>
          </div>

          <div className="Help-wrapper">
            <img src={velo} alt="" />
            <span>
              You’ll have the ability to receive more referrals from clients.
            </span>
          </div>

          <div className="Help-wrapper-flexx">
            <img src={help7} alt="" />
            <span>
              You’ll have a new opportunity to deliver an impactful ROI, which
              will help your company sell more to your current clients, while
              securing new clients as well.
            </span>
          </div>
        </div>
      </div>

      <div className="Partner-options">
        <div className="option-refellal">
          <p>We've Got You Covered.</p>
          <span>Partnership Options</span>
        </div>
      </div>

      <div className="refellal-card">
        <div className="refellals-card">
          <img src={bullet} alt="calc" />
          <h3>Referral</h3>

          <span>
            We’ll develop a co-branded site specific to your company, that will
            provide helpful content to educate your referrals on The Employee
            Retention Tax Credit along with the ability to submit their
            information.
          </span>
        </div>
        <div className="refellals-card">
          <img src={bullet2} alt="calc" />
          <h3>White-Label</h3>
          <span>
            We’ll give you the opportunity to white-label our service as your
            own offering while helping establish a secure connection of your
            client’s data to our company.
          </span>
        </div>
      </div>

      <div className="Connect">
        <div className="Lets-Connect">
          <div className="Sign">
            <p>PArtnership </p>
            <span>Let's Connect.</span>
          </div>
        </div>
      </div>

      <div className="Connect-text">
        <div className="text-area">
        <div className="input-text-left">
        <div className="input-text">
        <p>FIRST Name</p>
        <span>Enter your first name</span>
        </div>

        <div className="input-text">
        <p>company</p>
        <span>Enter your company Name</span>
        </div>


        <div className="input-text">
        <p>email</p>
        <span>Enter your email address</span>
        </div>

        <div className="input-text">
        <p>How did you hear about us?</p>
        <span>Enter your Full Name</span>
        </div>

        <div className="input-text">
        <p>Please tell us a brief overview of your business:</p>
        <span>Write here ..</span>
        </div>

        <div className="input-text">
        <p>Let us know how you envision us working together?</p>
        <span>Write here ..</span>
        </div>
        </div>
         <div className="chages-option">

        <div className="input-text-option">
        <p>last name</p>
        <span>Enter your last name</span>
        </div>

        <div className="input-text-option">
        <p>phone number</p>
        <span>Enter your phone number</span>
        </div>

        <div className="input-text-options">
        <p>Partnership Option</p>
        <div className="select-options">
        <span>Select one</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
  <path d="M-6.61271e-08 1.51281L6 8L12 1.51281L10.5996 -6.12134e-08L6 4.97308L1.4004 -4.63323e-07L-6.61271e-08 1.51281Z" fill="#4A4A4A"/>
</svg>

        </div>
       
        </div>

        </div>
        </div>
      
       
        <button className="submit-now">
          <p>Submit Now</p>
        </button>
     
      </div>
     
    </section>
  );
};

export default Partnerships;
