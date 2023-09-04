import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }>
          <Route index element={ <Home/> }/>

          <Route path="login" element={ <Login/> }/>
          <Route path="registration" element={ <Registration/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
