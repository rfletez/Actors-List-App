import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListActorsComponent from './components/ListActorsComponent';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (

    <div>

      <Header/>
      <div className='container'>
        <ListActorsComponent/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
