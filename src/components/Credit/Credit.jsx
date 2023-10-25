import "./Credit.css";
import calc from "../../assets/icons/calc.png";
import calc5 from "../../assets/icons/calc5.png";
import calc3 from "../../assets/icons/calc3.png";
import calc6 from "../../assets/icons/calc6.png";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { onMousehandler } from "../Helper/onmouse";
import { onMouseleave } from "../Helper/onmouseleave";

gsap.registerPlugin(ScrollTrigger);

const Credit = () => {
  useEffect(() => {
    const elements1 = document.querySelectorAll(".credit-start");
    const elements2 = document.querySelectorAll(".credit-text");

    let tl = gsap.timeline();
    elements1.forEach((item, index) => {
      console.log(item);
      tl.to(item, {
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: item,
          scrub: true,
          end: "+=100",
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
          end: "+=100",
        },
      });
    });
  });
  return (
    <section className="Credit-wrapper">
      <div className="credit-start">
        <h1>ERT CREDIT</h1>
        <span>How Does it Work?</span>
      </div>
      <div className="paddings innerWidth flexCenter credit-container content-calc">
        <div className="credit-text" onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}>
          <img src={calc} alt="calc"  />
          <h1>Data Gathering</h1>
          <span>
            Use our secure webform to upload your PPP loan documents, share
            payroll data, and answer preliminary questions
          </span>
        </div>

        <div className="credit-text" onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}>
          <img src={calc5} alt="calc" />
          <h1>Credit Calculation</h1>
          <span>
            Our team of experts will calculate the exact credit amount you will
            receive from the IRS.{" "}
          </span>
        </div>

        <div className="credit-text" onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}>
          <img src={calc3} alt="calc" />
          <h1>Amending Returns</h1>
          <span>
            {" "}
            Change to We will prepare and audit all documentation and help you
            file the necessary amended payroll tax returns.
          </span>
        </div>

        <div className="credit-text" onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}>
          <img src={calc6} alt="calc" />
          <h1>Get Paid</h1>
          <span>The IRS will process the credit and mail you a check(s).</span>
        </div>
      </div>
    </section>
  );
};

export default Credit;
