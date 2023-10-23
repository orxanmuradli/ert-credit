import React from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Navbar";
import Home from "./components/pages/Home/Home";
import Compaines from "./components/Compaines/Compaines";
import Value from "./components/Value/Value";
import Credit from "./components/Credit/Credit";
import Document from "./components/Document/Document";
import Faqs from "./components/Section/Faqs";
import Footer from "./components/Footer/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./components/pages/About us/About";
import Partnerships from "./components/Partnerships/Partnerships";
import Contact from "./components/pages/Contact/Contact";
import CursorElement from "./components/Helper";

// import About from "./components/pages/About";

const App = () => {
  return (
    <div className="App">
      <CursorElement/>
      {/* <Home/> */}
      {/* <Compaines/>
   <Value/>
   <Credit/>
   <Document/>
   <Faqs/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Partnerships" element={<Partnerships />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
};

export default App;
