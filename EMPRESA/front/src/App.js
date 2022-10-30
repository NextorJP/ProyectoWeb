import React from 'react'
import './App.css';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Ubicacion } from './components/Ubicacion';
import { Horarios } from './components/Horarios';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/Menu" element={<Monjnijbbbhenu/>}/>
          <Route exact path="/ubicacion" element={<Ubicacion/>}/>
          <Route exact path="/horarios" element={<Horarios/>}/>
          <Route exact path="*" element={<ErrorNotFound/>}/>
        </Routes>     
      </BrowserRouter>        
    </div>
  );
}

export default App;