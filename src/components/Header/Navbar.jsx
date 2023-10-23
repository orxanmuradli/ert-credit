import React, { useState } from "react";
import "./Navbar.css";
import ert from "../../assets/images/ert.png";
import { onMousehandler } from "../Helper/onmouse";
import { onMouseleave } from "../Helper/onmouseleave";

const Navbar = () => {
  const [active, setActive] = useState(false);
  // const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  // const [menu_class, setMenuClass] = useState("menu hidden");
  // const [isMenuClicked, setIsMenuClicked] = useState(false);

  // // toggle burger menu change
  // const updateMenu = () => {
  //   if (!isMenuClicked) {
  //     setBurgerClass("burger-bar clicked");
  //     setMenuClass("h-container1 visible");
  //   } else {
  //     setBurgerClass("burger-bar unclicked");
  //     setMenuClass("menu hidden");
  //   }
  //   setIsMenuClicked(!isMenuClicked);
  // };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        {<img src={ert} alt="Logo" />}
        <div className="slgljs">
          <div className="flexCenter h-menu">
            <a
              href="/"
              onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}
            >
              Home
            </a>

            <a
              href="/about"
              onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}
            >
              About Us
            </a>
            <a
              href="/partnerships"
              onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}
            >
              Partnerships
            </a>
            <a
              href="/"
              onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}
            >
              FAQs
            </a>
            <a
              href="/contact"
              onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}
            >
              Contact
            </a>
          </div>

          <button className="button">
            <a
              href="/contact"
              onMouseEnter={onMousehandler}
              onMouseLeave={onMouseleave}
            >
              Sign up
            </a>
          </button>

          <div className="Hamburger-Logo">
            <svg
              onClick={() => {
                setActive(!active);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <rect width="18" height="2" fill="#0A083A" />
              <rect y="7" width="18" height="2" fill="#0A083A" />
              <rect y="14" width="18" height="2" fill="#0A083A" />
            </svg>

            <div className={`Hamburger-menyu ${active && "active"}`}>

              <div className="closing-burger">
              <svg
                onClick={() => {
                  setActive(!active);
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <rect width="18" height="2" fill="#0A083A" />
                <rect y="7" width="18" height="2" fill="#0A083A" />
                <rect y="14" width="18" height="2" fill="#0A083A" />
              </svg>
              </div>
                <div className="restoree">
                <span>Home</span>
                <span>About Us</span>
                <span> Partnerships</span>
                <span>FAQs</span>
                <span>Contact</span>
                <span>Sign up</span>
              </div>
           
              
            </div>
          </div>

          {/* <div className="burgermenyu" style={{ height: "30px" }}>
            <div style={{ width: "100%", height: "100vh" }}>
              <nav>
                <div className="burger-menu" onClick={updateMenu}>
                  <div className={burger_class}></div>
                  <div className={burger_class}></div>
                  <div className={burger_class}></div>
                </div>
              </nav>

              <div className={menu_class}></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
