import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import React from 'react';
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

const App = () => {
  return (
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/articles" element={<Articles />} >
              <Route path=":id" element={<Article />} />
          </Route>
      </Routes>
  );
}

export default App;
