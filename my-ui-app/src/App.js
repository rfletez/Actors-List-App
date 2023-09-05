import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import ListActorsComponent from './components/ListActorsComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateActor from './components/CreateActor';

function App() {
  return (

    <div>
      <BrowserRouter>
          <Header/>

            <div className='container'>
                <Switch>
                    <Route path='/' exact Component={ListActorsComponent}></Route>
                    <Route path='/actors' Component={ListActorsComponent}></Route>
                    <Route path='/create-actor' Component={CreateActor}></Route>
                </Switch>
            </div>

          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
