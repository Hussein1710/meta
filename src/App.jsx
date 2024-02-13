import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import SubHero from "./Components/SubHero";
import Products from "./Components/Products";
import Games from "./Components/Games";
import LatestNews from "./Components/LatestNews";
import Newsletter from "./Components/Newsletter";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <SubHero />
      <Products />
      <Games />
      <LatestNews />
      <Newsletter />
    </div>
  );
}

export default App;
