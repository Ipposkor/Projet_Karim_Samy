import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Favorite from './component/Favorite';
import Search from './component/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />

      <Switch>


        <Route path={"/Favoris"}>

          <Favorite />

        </Route>

      </Switch>

    </div>
  );
}

export default App;
