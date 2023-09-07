import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import ListActorsComponent from './components/ListActorsComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateActor from './components/CreateActor';
import UpdateActor from './components/UpdateActor';
import ViewActorDetails from './components/ViewActorDetails';

function App() {
  return (

    <div>
      <Router>
          <Header/>

            <div className='container'>
                <Routes>
                    <Route path='/' exact element={<ListActorsComponent/>}></Route>
                    <Route path='/actors' element={<ListActorsComponent/>}></Route>
                    <Route path='/create-actor' element={<CreateActor/>}></Route>
                    <Route path='/update-actor/:id' element={<UpdateActor/>}></Route>
                    <Route path='/view-actor/:id' element={<ViewActorDetails/>}></Route>
                </Routes>
            </div>

          <Footer/>
      </Router>
    </div>

  );
}

export default App;
