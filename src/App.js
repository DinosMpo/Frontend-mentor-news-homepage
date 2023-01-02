import React from 'react';
import Menu from './Menu/Menu';
import MainSection from './MainSection/MainSection';
import SideSection from './SideSection/SideSection';
import BottomSection from './BottomSection/BottomSection';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Menu />
      <MainSection />
      <SideSection />
      <BottomSection />
    </div>
  )
}