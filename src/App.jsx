import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <div className="background-gradient"></div>
    </div>
  );
}

export default App;
