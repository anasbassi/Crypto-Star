import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default App;
