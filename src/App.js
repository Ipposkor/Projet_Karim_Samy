
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Favorite from './component/Favoris/Favorite';
import Card from './component/card/Card';
import Header from './component/header/Header';
import booknot from './images/open-book.png'
import bookread from './images/read.png'


function App() {


  const [movies, setMovies] = useState([])
  const [anime, setAnime] = useState([])
  const [favorite, setFavorite] = useState('favHeader')
  const [home, setHome] = useState('iconNone')
  const [filteredInput, setFilteredInput] = useState('');




  // console.log(curbook)
  const animeFav = (book) => {

    setAnime((prevBook) => {
      return ([book, ...prevBook]);
    })

  }

  // console.log(book)
  // const onReadBook = (e) => {

  //   setCurBook((prevE) => {
  //     return ([e, ...prevE])
  //   })
  // }

  const inputChangeHandler = (selectedAnime) => {
    setFilteredInput(selectedAnime);
  };

  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books/').then((response) => {
      setMovies(response.data)
      // console.log(response)
    }).catch(err => { console.log(err) })
  }, [anime])

  useEffect(() => {

    animeFav()
  }, [movies])
  const changeMenu = () => {
    setFavorite('iconNone')
    setHome('favHeader')
  }
  const changeMenuTwo = () => {
    setFavorite('favHeader')
    setHome('iconNone')
  }

  return (
    <div className="App">
      <Header getManga={inputChangeHandler} FavClick={favorite} HomeClick={home} changeFav={changeMenu} changeHome={changeMenuTwo} />
      <Switch>
        {/* PAGE FAVORIS */}

        <Route path={"/Favoris"}>
          <div className='tqtt'>
            {movies.map((item, index) => {
              return item.title.toLowerCase().includes(filteredInput.toLowerCase()) ? <Favorite stock={anime} id={index} item={item} /> : null
            })}
          </div>
        </Route>

        {/* PAGE PRINCPALE */}

        <Route path={"/"}>
          <div className='main'>
            {movies.map((item, index) => {
              if (item.title.toLowerCase().includes(filteredInput)) {
                return (
                  <Card id={index} key={index} item={item} goFav={() => { animeFav(item.title) }} />
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
