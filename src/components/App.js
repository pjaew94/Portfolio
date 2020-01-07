import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import './App.scss'
import FadeTopBottom, {FadeLeftRight, FadeBottomTop} from './Fade/Fade'
import NavBar from './navbar/NavBar'
import LandingPage from './landing-page/LandingPage'
import MyWorks from './myWorks/MyWorks'
import About from './about/About'


function App(props) {
  return (
    <div class='App'>
      <NavBar />
      <FadeTopBottom>
        <LandingPage />
      </FadeTopBottom>
        <MyWorks />
        <About />
    </div>
  );
}

export default App;
