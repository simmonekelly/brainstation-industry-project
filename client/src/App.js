import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Documents from './pages/Documents/Documents';
import Events from './pages/Events';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Navbar/>
        <hr></hr>
        <Routes>
          <Route path="/" element={<Documents />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;