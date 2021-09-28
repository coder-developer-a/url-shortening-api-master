import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Info from './components/Info';
import Shorten from './components/Shorten';
import Statics from './components/Statics';
import Boost from './components/Boost';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Nav />
      <Info />
      <Shorten />
      <Statics />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
