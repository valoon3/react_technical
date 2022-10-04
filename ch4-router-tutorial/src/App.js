import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import React from 'react';
import Profile from "./pages/Profile";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes>
  );
}

export default App;
