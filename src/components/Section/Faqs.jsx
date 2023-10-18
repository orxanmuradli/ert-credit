import React from "react";
import "./Faqs.css";
import data from "../../Data/dta.json";
import Accordion from "../Accordion";
import starts from "../../assets/icons/starts.png";

const Faqs = () => {
  return (
    <div>
      <section className="Faqs-Wrapper">
        <div className="faqscontainer">
          <div className="Faqs-container">
            <img src={starts} alt="" />

            <h1>Frequently Asked Questions</h1>
            <span>FAQ</span>
          </div>

          <div className="wrapper-textssss">
            {data?.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
                
                reqem={item.reqem}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
