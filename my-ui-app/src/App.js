import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListActorsComponent from './components/ListActorsComponent';

function App() {
  return (
    <div className='container'>
      <ListActorsComponent/>
    </div>
  );
}

export default App;
