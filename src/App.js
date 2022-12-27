import React, { Component } from 'react';
import Menu from './Menu/Menu';
import MainSection from './MainSection/MainSection';
import SideSection from './SideSection/SideSection';
import BottomSection from './BottomSection/BottomSection';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        
        <MainSection />
        
        <SideSection />

        <BottomSection />

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    );
  }
}

export default App;
