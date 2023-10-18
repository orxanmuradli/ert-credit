import React, { useEffect } from "react";
import "./Value.css";
// import esas from "../../assets/images/esas.png";
import Logoss from "../../assets/images/Logoss.png";
import girs from "../../assets/images/girs.png"
import Logosss from "../../assets/images/Logosss.png"
import boy1 from "../../assets/images/boy1.png"
import boy2 from "../../assets/images/boy2.png"
import boy3 from "../../assets/images/boy3.png"
import insta2 from "../../assets/images/insta2.png"
import boy4 from "../../assets/images/boy4.png"
import facelogo from "../../assets/images/facelogo.png"
import masks from "../../assets/images/masks.png"
import tiktokzz from "../../assets/images/tiktokzz.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import boy5 from "../../assets/images/boy5.png"
const Value = () => {
  useEffect(() => {
    const elements1 = document.querySelectorAll(
      ".img_container"
    );
    const elements2 = document.querySelectorAll(
      ".ajb"
    );
  
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
  });
  return (
    <section className="v-wrapper">
      <div className="paddings innerwidth flexCenter v-container">
        {/* left-side */}
        <div className="v-left">
          <div className="img_container">
            {/* <img src={Logoss} alt="Logoss" /> */}
            <div className="images-icos">
              <div className="img1">
                <img src={Logoss} alt="Logoss" />
              </div>
              <div className="img2">
                <img src={girs} alt="Logoss" />
              </div>
              <div className="img3">
                <img src={Logosss} alt="Logoss" />
              </div>
              <div className="img4">
                <img src={boy1} alt="Logoss" />
              </div>
              <div className="img5">
                <img src={boy2} alt="Logoss" />
              </div>
              <div className="img6">
                <img src={boy3} alt="Logoss" />
              </div>
              <div className="img7">
                <img src={insta2} alt="Logoss" />
              </div>
              <div className="img8">
                <img src={boy4} alt="Logoss" />
              </div>
              <div className="img9">
                <img src={facelogo} alt="Logoss" />
              </div>
            
              <div className="img10">
                <img src={masks} alt="Logoss" />
              </div>
              <div className="img11">
                <img src={tiktokzz} alt="Logoss" />
              </div>
            </div>
            {/* <img src={esas} alt="esas" /> */}
          </div>
        </div>

        {/* right-side */}
        <div className="ajb">
          <div className="flexColStart v-right">
            <h1>Join 100's of Happy Customers</h1>
            <span>
              Restaurants, bars, medical practices, non-profits, retailers
              e-commerce stores, bakeries, chiropractors, hotels, motels and
              many other businesses have already claimed their Employee
              Retention Tax Credit (ERTC).
            </span>
          </div>
          <div className="alnfa">
            <div className="ajdbf">
              <div className="v-right-v-text">
                <h1>Over $10M+</h1>
                <span>Delivered to our customers to date.</span>
              </div>
              <div className="v-right-v">
                <h1>Brewery & Pub</h1>
                <span>Credit Amount: $591,249</span>
              </div>
            </div>
            <div className="ajdbf">
              <div className="v-right-v">
                <h1>Mexican Restaurant</h1>
                <span>Credit Amount: $312,019</span>
              </div>

              <div className="v-right-v">
                <h1>Chiropractor </h1>
                <span>Credit Amount: $257,493</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
