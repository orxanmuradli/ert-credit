import React, { useEffect, useRef } from "react";
import "./Home.css";
import "./Homeresponsive.css";
import bg from "../../../assets/images/bg.png";
import home from "../../../assets/images/home.png";
import Compaines from "../../Compaines/Compaines";
import Value from "../../Value/Value";
import Credit from "../../Credit/Credit";
import Faqs from "../../Section/Faqs";
import Document from "../../Document/Document";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




const Home = () => {

  






  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const videoPlayRef = useRef(null);
  useEffect(() => {
    gsap.set([titleRef.current, descriptionRef.current], {
      x: "-100%",
    });
    gsap.set([buttonRef.current], {
      x: "-300%",
    });
    gsap.set([videoPlayRef.current], {
      x: "600%",
      opacity: 0,
    });

    const tl = gsap.timeline();

    tl.to(titleRef.current, { x: 0, duration: 1, ease: "power4.out" });
    tl.to(descriptionRef.current, { x: 0, duration: 1, ease: "power4.out" });
    tl.to(buttonRef.current, { x: 0, duration: 1, ease: "power4.out" });
    tl.to(videoPlayRef.current, {
      x: 0,
      duration: 1,
      ease: "power4.out",
      opacity: 1,
    });
  }, []);

  return (
    <>
      <section className="hero-wrapper container">
        <div className="wrapper">
          <img
            style={{
              width: "100%",
              height: 380,
            }}
            src={bg}
            alt="bg"
          />
          <div
            style={{
              position: "relative",
              top: -247,
              right: 0,
              width: " 100%",
            }}
            className="hero-container"
          >
            {/* left-side */}

            <div className="hero-left paddings" >
              <div className="hero-tittle">
                <h1 className= "lsgaljsga titleh1" ref={titleRef} >
                  Get your Employee Retention Credit <br /> today.
                </h1>
                <div className="titleDes" ref={descriptionRef}>
                  Under the American Rescue Plan Act of 2021, the Federal
                  Government authorized up to $33,000 in refunds per employee
                  that was on payroll
                </div>
              </div>
              <div className="button-aply">
                <button ref={buttonRef}>Apply Now</button>

                <div className="button-play" ref={videoPlayRef}>
                  <svg
                    width="86"
                    height="86"
                    viewBox="0 0 177 177"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_211_555)">
                      <circle cx="88" cy="69" r="27" fill="#242B31" />
                    </g>
                    <path
                      d="M93.1762 68.6012C93.9326 69.1173 93.9326 70.2328 93.1762 70.7489L85.6452 75.8874C84.7823 76.4762 83.6125 75.8582 83.6125 74.8136L83.6125 64.5365C83.6125 63.4918 84.7823 62.8738 85.6452 63.4626L93.1762 68.6012Z"
                      fill="#FEFEFE"
                    />
                    <defs>
                      <filter
                        id="filter0_d_211_555"
                        x="0.65"
                        y="0.500002"
                        width="176"
                        height="176"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="4"
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow_211_555"
                        />
                        <feOffset dx="0.65" dy="19.5" />
                        <feGaussianBlur stdDeviation="32.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_211_555"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_211_555"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div>Play Video</div>
                </div>
              </div>
            </div>

            {/* right-side */}
            <div className="flexCenter hero-right">
              <div className="img-container">
                <img src={home} alt="home" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Compaines />
      <Value />
      <Credit />
      <Document />
      <Faqs />
    </>
  );
};

export default Home;
