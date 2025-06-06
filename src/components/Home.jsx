
import React from "react";
import HeroSection from "/src/SubComponents/HeroSection";
import TopVillas from "/src/SubComponents/TopVillas";
import Regions from "/src/SubComponents/Regions";
import OurSpecialities from "/src/SubComponents/OurSpecialities";
import Host from "/src/SubComponents/Host";
import About from "/src/SubComponents/About";
import Contact from "/src/SubComponents/Contact";


const Home = () => {
  return (
    <>
      <article className="page">
        <HeroSection/>
        <TopVillas/>
        <Regions/>
        <OurSpecialities/>
        <Host/>
        <About/>
        <Contact/>
      </article>
    </>
  )
}

export default Home
