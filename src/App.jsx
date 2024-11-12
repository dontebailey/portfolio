import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background-gradient"></div>
      <div className="container"></div>
    </div>
  );
}

export default App;
