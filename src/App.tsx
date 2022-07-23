import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ItemPage from './components/ItemPage/ItemPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:id" element={<ItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
