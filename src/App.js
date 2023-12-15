import React from 'react';
import './App.css';


import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import About from "./components/About";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";


function App() {
  return (
            <>
                <Navbar />
                <HeroSection/>
                <Highlights/>
                <About/>
                <Footer/>
            </>
  );
}

export default App;
