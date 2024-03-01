import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecialDish from "./components/SpecialDish";
import Welcome from "./components/Welcome";
import Introduction from "./components/Introduction";
import Customers from "./components/Customers";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SpecialDish />
      <Welcome />
      <Introduction />
      <Customers />
      <Footer />
    </>
  );
}

export default App;
