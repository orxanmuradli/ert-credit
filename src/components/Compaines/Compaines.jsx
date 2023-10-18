import React, { useEffect } from "react";

import "./Compaines.css";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon9 from "../../assets/icons/icon9.png";

import { onMousehandler } from "../Helper/onmouse";
import { onMouseleave } from "../Helper/onmouseleave";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Compaines = () => {
  useEffect(() => {
    const elements1 = document.querySelectorAll(".text-text-1");
    const elements2 = document.querySelectorAll(".text-text-2");
    const elements3 = document.querySelectorAll(".text-text-3");
    let tl = gsap.timeline();
    elements1.forEach((item, index) => {
      console.log(item);
      tl.to(item, {
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          end: "+=50",
        },
      });
    });
    elements2.forEach((item, index) => {
      console.log(item);
      tl.to(item, {
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          end: "+=50",
        },
      });
    });
    elements3.forEach((item, index) => {
      console.log(item);
      tl.to(item, {
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          end: "+=50",
        },
      });
    });
  }, []);

  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth  flexCenter  c-container">
        <div className="text-text-1">
          <div
            className="text-title-text"
            onMouseEnter={onMousehandler}
            onMouseLeave={onMouseleave}
          >
            <img src={icon7} alt="icon" />
          </div>
          <div className="text_icon">
            <h1>System Built to Maximize your Returns </h1>
            <p>Our entire system is designed to maximize your returns</p>
          </div>
        </div>

        <div className="text-text-2">
          <div
            className="text-title-text"
            onMouseEnter={onMousehandler}
            onMouseLeave={onMouseleave}
          >
            <img src={icon8} alt="icon2" />
          </div>
          <div className="text_icon">
            <h1>Risk Free </h1>
            <p>We do not get paid unless you are</p>
          </div>
        </div>

        <div
          className="text-text-3"
          onMouseEnter={onMousehandler}
          onMouseLeave={onMouseleave}
        >
          <div className="text-title-text">
            <img src={icon9} alt="icon3" />
          </div>
          <div className="text_icon">
            <h1>Fast & Easy Returns </h1>
            <p>
              Find out how much you are owed within 48 hours with little effort
              on your part
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compaines;
