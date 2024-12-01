import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="background-gradient">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
    </div>
  );
}

export default App;
