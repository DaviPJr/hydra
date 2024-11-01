import React from 'react';
import Nav from './Components/Nav/Nav.jsx';
import Hero from './Components/Hero/Hero.jsx';
import './index.css'
import Banner from './Components/Banner/Banner.jsx';
import Info from './Components/Info/Info.jsx';
import Outdoor from './Components/Outdoor/Outdoor.jsx';
import  Card  from './Components/Card/Card.jsx';
import BannerTech from './Components/BannerTech/BannerTech.jsx';
import Imagens from './Components/Imagens/Imagens.jsx';
import Circles from './Components/Circles/Circles.jsx';
import Form from './Components/Form/Form.jsx';
import img1 from './Assets/Imagens/img1.png'
import img2 from './Assets/Imagens/img2.png'
import img3 from './Assets/Imagens/img3.png'
import img4 from './Assets/Imagens/img4.png'
import Footer from './Components/Footer/Footer.jsx';
import FooterInfo from './Components/FooterInfo/FooterInfo.jsx';
import ResponsiveBanner from './Components/ResponsiveBanner/ResponsiveBanner.jsx';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ResponsiveBanner />
      <Info title="INTRODUCTION" otherTitle="TO HYDRA VR"/>
      <Outdoor />
      <Info title="WHY BUILD" otherTitle="WITH HYDRA?"/>
      <div className='card-container'>
          <Card title="SIMULATION" img={img1}/>
          <Card title="EDUCATION" img={img2}/>
          <Card title="SELF-CARE" img={img3}/>
          <Card title="OUTDOOR" img={img4}/>
      </div>
      <BannerTech />
      <Imagens />
      <Info title="HOW WE BUILD" otherTitle="WITH HYDRA VR?"/>
      <div className='circles-container'>
          <Circles title="01" firstTitle="3D Conception" secondTitle="& Design" />
          <Circles title="02" firstTitle="Interaction" secondTitle="Design" />
          <Circles title="03" firstTitle="VR World" secondTitle="User Testing" />
          <Circles title="04" firstTitle="Hydra VR" secondTitle="Deploy" />
      </div>
      <Form />
      <Footer />
      <FooterInfo />
    </div>
  );
}

export default App;
