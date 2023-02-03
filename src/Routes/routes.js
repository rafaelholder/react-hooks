/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

import Home from './HomePage';
import About from './AboutPage';
import Contact from './ContactPage';
import Header from './Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
