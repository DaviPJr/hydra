import React from 'react';
import Nav from './Components/Nav/Nav.jsx';
import Hero from './Components/Hero/Hero.jsx';
import './index.css'
import Banner from './Components/Banner/Banner.jsx';
import Info from './Components/Info/Info.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Banner />
      <Info />
    </div>
  );
}

export default App;
