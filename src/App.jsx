import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Favorite from './component/Favoris/Favorite';
import Card from './component/card/Card';
import Header from './component/header/Header';
import Banner from './component/banner/Banner';
import bookShelf from './images/bookshelf.jpg'
import fav from './images/fav.png'
import favLike from './images/fav-like.png'
import Empty from './component/Favoris/Empty';
// import Filter from './component/Favoris/Filter';
import Content from './component/Favoris/Content';

import { commentSmile, folderTimes } from 'fontawesome';

import BookR from './component/randomBook/RandomBook';
import refresh from './images/refresh.png'
import Filter from './component/Favoris/Filter';





function App() {

  const [movies, setMovies] = useState([])
  let [moviesVu, setMoviesVu] = useState([])
  const [myFavorite, setMyFavorite] = useState([])
  const [favorite, setFavoritess] = useState('favHeader')
  const [home, setHome] = useState('iconNone')
  const [filteredInput, setFilteredInput] = useState("");
  const [filtered, setFiltered] = useState('All')


  // add to favourite
  const addFavouriteMovie = (movie) => {
    if (!myFavorite.includes(movie)) {
      const newFavouriteList = [...myFavorite, movie];
      setMyFavorite(newFavouriteList);
      saveToLocalStorage(newFavouriteList);

    }
  };


  // remove from favorite
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = myFavorite.filter(
      (favorite) => favorite.id !== movie.id
    );
    setMyFavorite(newFavouriteList)
    saveToLocalStorage(newFavouriteList);
  }


  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    if (movieFavourites) {
      setMyFavorite(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };

  const inputChangeHandler = (selectedAnime) => {
    setFilteredInput(selectedAnime);
  };

  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books?_page=4&_limit=50').then((response) => {
      setMovies(response.data)

    }).catch(err => { console.log(err) })
  }, [])



  const changeMenu = () => {
    setFavoritess('iconNone')
    setHome('favHeader')
  }
  const changeMenuTwo = () => {
    setFavoritess('favHeader')
    setHome('iconNone')
  }
  function GetR(props) {
    let corp = document.querySelector('.main')
    let bookrandom = document.querySelector('.randomBook')
    corp.classList.toggle('active')
    bookrandom.classList.toggle('active')
  }

  const [book, setBook] = useState('')
  const getBook = () => {
    fetch('https://example-data.draftbit.com/books/')
      .then((res) => res.json())
      .then((data) => {
        let randombook = Math.floor(Math.random() * data.length);
        setBook(data[randombook])
      })
  }
  useEffect(() => {
    getBook();
  }, [])


  const filter = (e) => {

    setFiltered(e)
  }


  return (
    <div className="App">
      <Header getManga={inputChangeHandler} FavClick={favorite} HomeClick={home} changeFav={changeMenu} changeHome={changeMenuTwo} />
      <Switch>
        {/* PAGE FAVORIS */}

        <Route path={"/Favoris"}>

          <div className='books-shelf' >
          </div>
          <Filter onChangeFilter={filter} />
          <div className='myFav'>My Favourites</div>

          <div className='tqtt'>

            {myFavorite.length > 0 ? <Favorite name={movies.title} filtered={filtered} input={filteredInput} getDel={removeFavouriteMovie} item={myFavorite} /> : <Empty />}
          </div >
        </Route >

        {/* PAGE PRINCPALE */}

        < Route path={"/"} >
          <Banner randomBook={GetR} />
          <div className='randomBook active'>
            <button className='btnR' onClick={getBook}><img src={refresh} alt="" /></button>
            <p className='titleR'>{book.title}</p>
            <img className='imgR' src={book.image_url} alt="" />
            <p className='textR'>{book.description}</p>
          </div>
          <div className='main'>
            {
              movies.map((item, index) => {
                if (moviesVu.length < movies.length) {
                  moviesVu[index] = item
                  moviesVu[index].vu = false
                  moviesVu[index].fav = false


                }
                return item.title.toLowerCase().includes(filteredInput.toLowerCase()) ? <Card fav={myFavorite} id={index} key={index} item={moviesVu[index]} goFav={() => addFavouriteMovie(moviesVu[index])} /> : null
              }
              )
            }

          </div >
        </Route >
      </Switch >
    </div >
  );
}

export default App;

