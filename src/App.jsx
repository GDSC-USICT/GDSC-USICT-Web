import React from 'react';
import './App.css';
import Home from './pages/Home';
import Team from './pages/Team';
import Projects from './pages/Projects';
import About from './pages/Aboutus';
import Event from './pages/Events';

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="Team" element={<Team />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Aboutus" element={<About />} />
        <Route path="Events" element={<Event />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
