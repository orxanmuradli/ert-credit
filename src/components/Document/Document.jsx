
import React, { useEffect } from "react";
import "./Document.css";
import document1 from "../../assets/icons/document1.png";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); 

const Document = () => {
  useEffect(() => {
    const elements1 = document.querySelectorAll(
      ".Cart1"
    );
    const elements2 = document.querySelectorAll(
      ".Cart2"
    );
    const elements3 = document.querySelectorAll(
      ".Cart3"
    );
    const elements4 = document.querySelectorAll(
      ".Cart4"
    );
    const elements5 = document.querySelectorAll(
      ".D-container"
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
    elements4.forEach((item, index) => {
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
    elements5.forEach((item, index) => {
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
    <section className="D-wrapper">
      <div className="D-container">
        <span>Why ERT.Credit?</span>
      </div>
         <div className="Contents">
         <div className="Cart1">
            <div><img src={document1} alt="/" /></div>
        
        <h1>Your entire commitment will be less than 15 minutes</h1>
   
      </div>
      <div> <svg xmlns="http://www.w3.org/2000/svg" width="169" height="40" viewBox="0 0 169 40" fill="none">
  <path d="M0.375 1.23828H155.426C158.991 1.23828 161.791 4.03888 161.791 7.60329V29.7535" stroke="#EAE9F0" stroke-width="2.31686" stroke-miterlimit="10"/>
  <path d="M155.428 27.9727L161.793 39.0478L168.158 27.9727H155.428Z" fill="#DFE1E5"/>
</svg>
      </div>

      <div className="Cart2">
        <div> <img src={document1} alt="/" /></div>
       
        <h1>Audit-proof supporting documentation for IRS Support.</h1>
      </div>
   
     

      <div className="Cart3">
        <div> <img src={document1} alt="/" /></div>
       
        <h1>Guaranteed to maximize your credit and leave no money on the table.</h1>
      </div>

   
      <div><svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 160 40" fill="none">
  <path d="M159.078 38.2614H13.0652C9.5008 38.2614 6.7002 35.4608 6.7002 31.8964V9.87346" stroke="#EAE9F0" stroke-width="2.31686" stroke-miterlimit="10"/>
  <path d="M13.0659 11.7802L6.70094 0.832428L0.335938 11.7802H13.0659Z" fill="#DFE1E5"/>
</svg></div>
      <div className="Cart4">
        <div> <img src={document1} alt="/" /></div>
       
        <h1>This is our specialty do daily for scores of businesses across the country.</h1>
      </div>


         </div>
     
    </section>
  );
};

export default Document;
