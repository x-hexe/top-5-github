import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Person from "./components/Person";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="person/:name" element={<Person />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
