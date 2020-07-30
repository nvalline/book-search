import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Search from './pages/Search';
import Saved from './pages/Saved';

import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Hero />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
