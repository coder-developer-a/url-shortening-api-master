import React from 'react';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Info />
        <Shorten />
        <Statics />
        <Boost />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
