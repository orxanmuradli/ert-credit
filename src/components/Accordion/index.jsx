import React, { useState } from "react";
import styles from "./index.module.css";

const Accordion = ({ title, content, reqem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={
        !isOpen
          ? entered
            ? {
                overflow: "hidden",
                height: 80,
                border: "1px solid  var(--color-backgroundHover)",
              }
            : { overflow: "hidden", height: 80 }
          : entered
          ? { height: 180, border: "1px solid var(--color-backgroundHover)" }
          : { height: 180 }
      }
      onMouseEnter={() => {
        setEntered(true);
      }}
      onMouseLeave={() => {
        setEntered(false);
      }}
      className={`${styles.accordion} ${isOpen ? styles.open : ""}`}
    >
      <div className={`${styles.accordionHeader} ${isOpen ? styles.open : ""}`}>
        <div className={styles.jaf}>
          <div>
            <p>{reqem}</p>
          </div>
          <h2>{title}</h2>
        </div>
        <div
          className={styles["cursor"]}
          onClick={toggleAccordion}
          style={{ cursor: "pointer", padding: "10px" }}
        >
          <div
            className={`${styles.burgerIcon} ${isOpen ? styles.open : ""}`}
            onClick={toggleAccordion}
          >
            <div className={styles["commited_section"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9 -3.93402e-07C4.03579 -6.10395e-07 -1.7641e-07 4.03579 -3.93402e-07 9C-6.10395e-07 13.9642 4.03579 18 9 18C13.9642 18 18 13.9642 18 9C18 4.03579 13.9642 -1.7641e-07 9 -3.93402e-07ZM13.3389 11.1411C13.0358 11.4442 12.5621 11.4442 12.2779 11.1411L9 7.86316L5.74105 11.1221C5.58947 11.2737 5.4 11.3495 5.21053 11.3495C5.02105 11.3495 4.83158 11.2737 4.68 11.1221C4.37684 10.8189 4.37684 10.3453 4.68 10.0611L8.46947 6.27158C8.77263 5.96842 9.24631 5.96842 9.53053 6.27158L13.3389 10.08C13.6232 10.3642 13.6232 10.8379 13.3389 11.1411Z"
                  fill="#303542"
                />
              </svg>
            </div>

            {/* <div className={`${styles.bar} ${isOpen ? styles.close : ""}`} />
            <div className={`${styles.bar} ${isOpen ? styles.close : ""}`} /> */}
          </div>
        </div>
      </div>
      <div className={styles.accordionContent}>
        <p
          className={`${styles.accordionContentp} ${isOpen ? styles.open : ""}`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
