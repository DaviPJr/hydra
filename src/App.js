import React from "react";
import Nav from "./Components/Nav/Nav.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import "./index.css";
import Info from "./Components/Info/Info.jsx";
import Outdoor from "./Components/Outdoor/Outdoor.jsx";
import ResponsiveCard from "./Components/ResponsiveCard/ResponsiveCard.jsx";
import BannerTech from "./Components/BannerTech/BannerTech.jsx";
import Circles from "./Components/Circles/Circles.jsx";
import Form from "./Components/Form/Form.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import FooterInfo from "./Components/FooterInfo/FooterInfo.jsx";
import ResponsiveBanner from "./Components/ResponsiveBanner/ResponsiveBanner.jsx";
import circlesData from "./data.js";
import ResponsiveImagens from "./Components/ResponsiveImagens/ResponsiveImagens.jsx";

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
      <div className="circles-container">
        {circlesData.map((circle) => (
          <Circles
            key={circle.id}
            title={circle.title}
            firstTitle={circle.firstTitle}
            secondTitle={circle.secondTitle}
          />
        ))}
      </div>
      <Form />
      <Footer />
      <FooterInfo />
    </div>
  );
}

export default App;
