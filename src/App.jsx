import React from "react";

import { Routes, Route } from "react-router";
import Upper from "./Upper";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Upper />} >
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
