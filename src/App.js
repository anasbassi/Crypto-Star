import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
