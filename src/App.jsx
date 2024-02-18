import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
import Products from "./Components/Products";
import Games from "./Components/Games";
import LatestNews from "./Components/LatestNews";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Navbar />
      <Hero />
      <SubHero />
      <Products />
      <Games />
      <LatestNews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
