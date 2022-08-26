
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Favorite from './component/Favoris/Favorite';
import Card from './component/card/Card';
import Header from './component/header/Header';
import Banner from './component/banner/Banner';
import bookShelf from './images/bookshelf.jpg'



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
  let randombook = movies[Math.floor(Math.random() * movies.length)]
  function GetR(props) {
    let corp = document.querySelector('.main')
    let bookrandom = document.querySelector('.randomBook')
    corp.classList.toggle('active')
    bookrandom.classList.toggle('active')
    console.log(bookrandom.image_url);
    return (
      <img src={bookrandom.image_url} alt="" />
    );
  }

  return (
    <div className="App">
      <Header getManga={inputChangeHandler} FavClick={favorite} HomeClick={home} changeFav={changeMenu} changeHome={changeMenuTwo} />
      <Switch>
        {/* PAGE FAVORIS */}

        <Route path={"/Favoris"}>
          <div className='tqtt'>
            <div className='books-shelf' >


            </div>
            {movies.map((item, index) => {
              return item.title.toLowerCase().includes(filteredInput.toLowerCase()) ? <Favorite stock={anime} id={index} item={item} /> : null
            })}
          </div>
        </Route>

        {/* PAGE PRINCPALE */}

        <Route path={"/"}>
          <Banner randomBook={GetR} />
          <div className='randomBook active'>
            {GetR}
          </div>
          <div className='main'>

            {movies.map((item, index) => {
              if (item.title.toLowerCase().includes(filteredInput.toLowerCase())) {
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
