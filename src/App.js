
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Favorite from './component/Favorite';
import Search from './component/Search';

import { Route, Switch,Link } from 'react-router-dom';
import axios from 'axios';
import React,{useState, useEffect} from 'react';

import './App.css';
import Card from './component/card/Card';

function App() {
  const [movies,setMovies] = useState([])

  useEffect(()=>{
  axios.get('https://api.themoviedb.org/2/movie/top_rated?api_key=1d3ead8417a1330e1bfbf4195f564f62&language=en-US&page=1').then((response)=>{
      setMovies(response.data.results)
    }).catch(err=>{console.log(err)})
  },[])

  return (
    <div className="App">

      <Search />

      <Switch>


        <Route path={"/Favoris"}>

          <Favorite />

        </Route>
      </Switch>

      <Link to={"/"}>
        <button>HOME</button>
      </Link>
		<Switch>
        
        <Route path={"/Favoris"}>


        </Route>
        <Route path={"/"}>
          <Link to={"/Favoris"}>
            <span>fav</span>
          </Link>
          {movies.map((item,index)=>{
            return <Card key={index} item={item} />
          })}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
