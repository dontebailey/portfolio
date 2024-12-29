import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="background-gradient">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience/>
      <Contact/>
      
    </div>
  );
}

export default App;
