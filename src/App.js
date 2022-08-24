
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Favorite from './component/Favorite';
import Search from './component/Search';
import Card from './component/card/Card';
import Header from './component/header/Header';

function App() {
  const [filteredInput, setFilteredInput] = useState('');
  const inputChangeHandler = (selectedAnime) => {
    setFilteredInput(selectedAnime);
    console.log('agg');
  };
  const [movies,setMovies] = useState([])

  useEffect(()=>{
  axios.get('https://api.jikan.moe/v3/search/anime?q=onepiece').then((response)=>{
      setMovies(response.data.results)
    }).catch(err=>{console.log(err)})
  },[])

  return (
    <div className="App">
      <Switch>
        <Route path={"/Favoris"}>
          <Favorite />
            <Link to={"/"}>
              <button>Go Home !</button>
            </Link>
        </Route>

        <Route path={"/"}>
          <Link to={"/Favoris"}>
            <span>fav</span>
          </Link>
          <Header getManga={inputChangeHandler} />
          <div className='main'>
            {movies.map((item,index)=>{
              if(item.title.toLowerCase().includes(filteredInput)){
                return(
                  <div>
                    <Card key={index} item={item}/>
                  </div>
                );
              }
            })}
          </div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;

// return <Card key={index} item={item} />