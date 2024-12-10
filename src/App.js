import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import profile from "./data/profile.jpg";

export default function App() {
  return (
    <div className="maincontainer">
      <div className="bio">
        <div className="imageContainer">
          <img
            title="Erick Villegaz"
            src={profile}
            alt="profile"
            className="profilePicture"
          ></img>
        </div>

        <div className="textContainer">
          <h1>Erick Villgaz</h1>
          <h2>Full Stack Dev</h2>
          <p>Life is like an RPG, grinding that EXP is part of it!</p>
        </div>
      </div>
      {/* <BrowserRouter> */}
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/" element={<Skills />} />
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}
