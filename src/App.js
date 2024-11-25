import React from "react";
import Nav from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import "./index.css";
import Info from "./Components/Info/Info.jsx";
import Outdoor from "./Components/Outdoor/Outdoor.jsx";
import ResponsiveCard from "./Components/ResponsiveCard/ResponsiveCard.jsx";
import BannerTech from "./Components/BannerTech/BannerTech.jsx";
import Form from "./Components/Form/Form.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import FooterInfo from "./Components/FooterInfo/FooterInfo.jsx";
import ResponsiveBanner from "./Components/ResponsiveBanner/ResponsiveBanner.jsx";
import ResponsiveImagens from "./Components/ResponsiveImagens/ResponsiveImagens.jsx";
import ResponsiveCircles from "./Components/ReponsiveCircles/ResponsiveCircles.jsx";
import circlesData from "./data.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ResponsiveBanner />
      <Info title="INTRODUCTION" otherTitle="TO HYDRA VR" />
      <Outdoor />
      <Info title="WHY BUILD" otherTitle="WITH HYDRA?" />
      <ResponsiveCard />
      <BannerTech />
      <ResponsiveImagens />
      <Info title="HOW WE BUILD" otherTitle="WITH HYDRA VR?" />
      <ResponsiveCircles circlesData={circlesData} />
      <Form />
      <Footer />
      <FooterInfo />
    </div>
  );
}

export default App;
