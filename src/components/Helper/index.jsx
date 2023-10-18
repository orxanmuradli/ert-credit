import React, { useEffect,useState } from "react";
import styles from "./index.module.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CursorElement = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.circleMain}`);
    const elements1 = document.querySelectorAll(`.${styles.circleEl}`);

    gsap.set(elements, { xPercent: -50, yPercent: -50 });
    gsap.set(elements1, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 100, y: window.innerHeight / 100 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 1;
    const xSet = gsap.quickSetter(elements, "x", "px");
    const ySet = gsap.quickSetter(elements, "y", "px");

    const xSet1 = gsap.quickSetter(elements1, "x", "px");
    const ySet1 = gsap.quickSetter(elements1, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;

      xSet(pos.x);
      ySet(pos.y);
      xSet1(pos.x);
      ySet1(pos.y);
    });
    
  }, []);

  return (
    <div className={styles.circleMain} id="circleMain">
      <div className={styles.circleEl} id="circleEl"></div>
      <div className={styles.tempcss}>
        <div className={styles.defcss} id="aa"></div>
      </div>
    </div>
  );
};

export default CursorElement;
