import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import './App.scss'
import FadeTopBottom, {FadeLeftRight} from './Fade/Fade'
import NavBar from './navbar/NavBar'
import LandingPage from './landing-page/LandingPage'
import MyWorks from './myWorks/MyWorks'


function App(props) {
  return (
    <div class='App'>
      <NavBar />
      <FadeTopBottom>
        <LandingPage />
      </FadeTopBottom>
      <FadeLeftRight>
        <MyWorks />
      </FadeLeftRight>
    </div>
  );
}

export default App;
