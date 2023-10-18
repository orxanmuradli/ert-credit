import React from "react";
import "./About.css";
import our from "../../../assets/images/our.png";

import about from "../../../assets/images/about.png";
import men from "../../../assets/images/men.png";
import person1 from "../../../assets/images/person1.png";
import bg223 from "../../../assets/images/bg223.png";

import boy1 from "../../../assets/images/boy1.png";
import insta2 from "../../../assets/images/insta2.png";
import boy3 from "../../../assets/images/boy3.png";
import tiktokzz from "../../../assets/images/tiktokzz.png";

const About = () => {
  return (
    <section className="about-wrapper container">
      <div className="about-wrappers">
        <div className="imgDiv">

        <img src={about} alt="" />
        </div>
        <h1>About Us</h1>
        <span>
          We are founded by an expert team of payroll and tax specialiasts
          coupled with technologyleaders who are on a mission to make it very
          simple for businesses to claim their Employee Retention Credit (ERC)
        </span>
      </div>

      <div className="about-start">
        <div className="about-start-left">
          <img src={our} alt="" />
        </div>
        <div className="about-start-right">
          <p>Our story</p>
          <span>
            We believe almost every small to medium size organization in the USA
            can claim the Employee Retention Credit (ERC). We designed and built
            a system that allows us to compute the ERC for any organization with
            fewer than 500 employees within 48 hours. At ERT.credit, you have a
            team of payroll tax specialists and technologists with over 40 years
            of combined experience building automated systems that maximize
            benefits for our customers. <br />{" "}
          </span>
          Read More
        </div>
      </div>

      <div className="employe-start">
        <div className="employe-start-left">
          <h2>
            We want to make claiming your Employee Retention Credit simple
          </h2>
          <span>
            Getting the ball rolling is simple. We only require basic
            information about your organization that includes type of business,
            number of employees, PPP loans (if received) and ownership
            percentage. The process takes all of 5 minutes.
          </span>
        </div>

        <div className="Employe-start-right">
          <img src={men} alt="people" />
        </div>
      </div>

      <div className="our-proces">
        <div className="our-proces-left">
          <div className="wrapper-proces">
            <span>
              Ready to move forward? Fill out our intake form on our website
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="505"
              height="338"
              viewBox="0 0 505 338"
              fill="none"
            >
              <g filter="url(#filter0_d_211_731)">
                <path
                  d="M100.501 106.642C100.231 94.423 110.411 84.5556 122.615 85.2069L345.119 97.0818C356.266 97.6767 365 106.889 365 118.052V160.498C365 172.045 355.677 181.426 344.13 181.498L122.858 182.872C111.391 182.943 101.987 173.801 101.733 162.337L100.501 106.642Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_211_731"
                  x="0.495605"
                  y="0.176453"
                  width="504.504"
                  height="337.696"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="20" dy="35" />
                  <feGaussianBlur stdDeviation="60" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_211_731"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_211_731"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="wrapper-proces-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="68"
              viewBox="0 0 265 68"
              fill="none"
            >
              <path
                d="M0.724211 22.4861C0.332562 10.3257 10.3242 0.37846 22.4826 0.824161L244.769 8.97267C256.06 9.38658 265 18.66 265 29.9586V45.9685C265 57.5315 255.652 66.919 244.09 66.9683L22.6114 67.9129C11.2419 67.9614 1.8987 58.9528 1.53271 47.5891L0.724211 22.4861Z"
                fill="white"
              />
            </svg>
            <span> We determine your eligibility</span>
          </div>
          <div className="wrapper-proces-3">
            <span>
              Provide us with payroll access; our process is quick and secure
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="529"
              height="327"
              viewBox="0 0 529 327"
              fill="none"
            >
              <g filter="url(#filter0_d_211_719)">
                <path
                  d="M100.618 107.525C100.284 95.3498 110.344 85.4449 122.513 85.9682L368.902 96.5643C380.139 97.0475 389 106.298 389 117.545V149.671C389 161.228 379.662 170.613 368.105 170.67L122.922 171.897C111.508 171.954 102.138 162.884 101.825 151.474L100.618 107.525Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_211_719"
                  x="0.610352"
                  y="0.948364"
                  width="528.39"
                  height="325.949"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="20" dy="35" />
                  <feGaussianBlur stdDeviation="60" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_211_719"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_211_719"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="wrapper-proces-4">
            <span>
              Provide us with payroll access; our process is quick and secure
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="529"
              height="327"
              viewBox="0 0 529 327"
              fill="none"
            >
              <g filter="url(#filter0_d_211_719)">
                <path
                  d="M100.618 107.525C100.284 95.3498 110.344 85.4449 122.513 85.9682L368.902 96.5643C380.139 97.0475 389 106.298 389 117.545V149.671C389 161.228 379.662 170.613 368.105 170.67L122.922 171.897C111.508 171.954 102.138 162.884 101.825 151.474L100.618 107.525Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_211_719"
                  x="0.610352"
                  y="0.948364"
                  width="528.39"
                  height="325.949"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="20" dy="35" />
                  <feGaussianBlur stdDeviation="60" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_211_719"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_211_719"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="107"
              viewBox="0 0 265 107"
              fill="none"
            >
              <path
                d="M0.460536 21.7105C0.212245 9.4665 10.451 -0.391535 22.6768 0.320266L245.221 13.277C256.326 13.9235 265 23.1176 265 34.2415V84.3616C265 95.904 255.684 105.283 244.142 105.361L22.908 106.86C11.4208 106.937 2.00293 97.771 1.77003 86.2859L0.460536 21.7105Z"
                fill="url(#paint0_linear_211_717)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_211_717"
                  x1="132.5"
                  y1="-1"
                  x2="133"
                  y2="101"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop
                    offset="0.651268"
                    stop-color="#D3E4E9"
                    stop-opacity="0.41"
                  />
                  <stop offset="1" stop-color="#D9EBF0" />
                </linearGradient>
              </defs>
            </svg> */}
          </div>
        </div>
        <div className="our-proces-right">
          <h3>Our process</h3>
          <span>
            We do all the heavy lifting. Our simple 8-step process makes it
            extremely efficient and quick. The process is completely electronic
            and requires very little work on the part of our clients. We support
            our clients through the process until we provide the final
            deliverables. We then stand by our clients for the entire duration
            of working with their payroll company and receiving the retention
            tax credit checks from the IRS. Our support line remains open around
            the clock.
          </span>
        </div>
      </div>

      <div className="our-team">
        <div className="big-team">
          <h4>OUR TEAM</h4>
          <p>Small team, Big hearts.</p>
          <span>
            Trusted by 100s of small to medium-sized businesses is what it
            should say.
          </span>
        </div>
        <div className="team-img">
          <img src={person1} alt="" />
          <img src={person1} alt="" />
          <img src={person1} alt="" />
          <img src={person1} alt="" />
        </div>
      </div>

      <div className="trusted">
        <div className="trusted-img">
          <img src={bg223} alt="bg223" />
          <div className="trusted-text">
            <span>Trusted by 100's of small tomedium sized businesses</span>
            <p>We have been doing payroll, tax for over 40 years</p>
          </div>
          <div className="trust-text1">
            <img src={boy1} alt="boy1" />
          </div>

          <div className="trust-text2">
            <img src={insta2} alt="insta" />
          </div>

          <div className="trust-text3">
            <img src={boy3} alt="boy3" />
          </div>

          <div className="trust-text4">
            <img src={tiktokzz} alt="insta" />
          </div>

          <div className="trust-text5">
            {/* <img src={insta2} alt="insta" /> */}
          </div>

          <div className="trust-text6">
            {/* <img src={insta2} alt="insta" /> */}
          </div>

          <div className="trust-text7"></div>

          <div className="trust-text8">
            {/* <img src={insta2} alt="insta" /> */}
          </div>

          <div className="trust-text9">
            {/* <img src={insta2} alt="insta" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
