
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Favorite from './component/Favoris/Favorite';

import Card from './component/card/Card';
import Header from './component/header/Header';

function App() {


  const [movies, setMovies] = useState([])
  const [anime, setAnime] = useState('')
  const [fav, setFav] = useState('inner-movie')
  const animeFav = (expense) => {
    setAnime((prevExpense) => {
      return ([expense, ...prevExpense]);
    })
  }
  console.log(anime);
  const [filteredInput, setFilteredInput] = useState('');
  const inputChangeHandler = (selectedAnime) => {
    setFilteredInput(selectedAnime);
    console.log('agg');
  };

  useEffect(() => {
    axios.get('https://api.jikan.moe/v3/search/anime?q=onepiece').then((response) => {

      setMovies(response.data.results)
      console.log(response)
    }).catch(err => { console.log(err) })
  }, [])





  return (
    <div className="App">
      <Header getManga={inputChangeHandler} />
      <Switch>
        {/* PAGE FAVORIS */}

        <Route path={"/Favoris"}>
          {movies.map((item, index) => {
            return item.title.toLowerCase().includes(filteredInput.toLowerCase()) ? <Favorite getDel={() => setFav('dnone')} fav={fav} stock={anime} id={index} item={item} /> : null

          })}
        </Route>

        {/* PAGE PRINCPALE */}

        <Route path={"/"}>
          <div className='main'>
            {movies.map((item, index) => {
              if (item.title.toLowerCase().includes(filteredInput)) {
                return (
                  <Card id={index} key={index} item={item} goFav={animeFav} />

                );
              }
            })}
          </div>
        </Route>
      </Switch>
    </div >
  );
}

export default App;
