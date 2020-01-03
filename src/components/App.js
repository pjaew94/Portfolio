import React, {useState} from 'react';
import './App.scss'
import NavBar from './navbar/NavBar'
import LandingPage from './landing-page/LandingPage'


function App() {
  return (
    <div class='App'>
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
