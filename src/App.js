
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Favorite from './component/Favoris/Favorite';
import Search from './component/Favoris/Search';
import Card from './component/card/Card';

function App() {
  const [movies, setMovies] = useState([])
  const [fav, setFav] = useState('')
  const [filteredInput, setFilteredInput] = useState('');
  const inputChangeHandler = (selectedCountry) => {
    setFilteredInput(selectedCountry);
    console.log('agg');
  };

  const test2 = (e) => {
    setFav((preve) => {
      return [...preve, e]
    })
  }

  useEffect(() => {
    axios.get('https://api.jikan.moe/v3/search/anime?q=onepiece').then((response) => {
      setMovies(response.data.results)
      console.log(response)
    }).catch(err => { console.log(err) })
  }, [])

  console.log(fav);

  return (
    <div className="App">
      <Switch>
        <Route path={"/Favoris"}>
          <Search onchangeInput={inputChangeHandler} />
          <Link to={"/"}>
            <button>HOME</button>
          </Link>
          {movies.map((item, index) => {
            if (item.title.toLowerCase().includes(filteredInput.toLowerCase())) {
              return (
                <div>
                  <Favorite item={item} key={index} />
                </div>)
            }
          })}
        </Route>
        <Route path={"/"}>
          <Link to={"/Favoris"}>
            <span>fav</span>
          </Link>
          {movies.map((item, index) => {
            return <Card key={index} item={item} />
          })}
        </Route>

      </Switch>
    </div>
  );
}

export default App;
