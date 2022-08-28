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
import Content from './component/Favoris/Content';
import { commentSmile, folderTimes } from 'fontawesome';




function App() {

  const [movies, setMovies] = useState([])
  const [myFavorite, setMyFavorite] = useState([])
  const [favorite, setFavoritess] = useState('favHeader')
  const [home, setHome] = useState('iconNone')
  const [filteredInput, setFilteredInput] = useState("");


  console.log(filteredInput)

  // add to favourite
  const addFavouriteMovie = (movie) => {
    if (!myFavorite.includes(movie)) {
      const newFavouriteList = [...myFavorite, movie];
      setMyFavorite(newFavouriteList);
    }
    // saveToLocalStorage(newFavouriteList);
  };

  // remove from favorite
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = myFavorite.filter(
      (favorite) => favorite.id !== movie.id

    );
    setMyFavorite(newFavouriteList)
  }

  //   setMyFavorite(newFavouriteList);
  //   // saveToLocalStorage(newFavouriteList);
  // };


  // const saveToLocalStorage = (item) => {
  //   localStorage.setItem('react-books-app', JSON.stringify(item))
  // }
  // const animeFav = (book) => {
  //   // saveToLocalStorage(book)
  //   setAnime((prevBook) => {
  //     const onRead = [book, ...prevBook]
  //     saveToLocalStorage(onRead)
  //     return (onRead);
  //   })
  // }

  // useEffect(() => {
  //   const bookFavorite = JSON.parse(localStorage.getItem('react-books-app'))
  //   if (bookFavorite !== null) setAnime(bookFavorite)
  // }, [])


  const inputChangeHandler = (selectedAnime) => {
    setFilteredInput(selectedAnime);
  };

  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books?_page=4&_limit=20').then((response) => {
      setMovies(response.data)
      // const ele = response
      // console.log(response)
    }).catch(err => { console.log(err) })
  }, [])
  console.log(movies);


  const changeMenu = () => {
    setFavoritess('iconNone')
    setHome('favHeader')
  }
  const changeMenuTwo = () => {
    setFavoritess('favHeader')
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
          <div className='books-shelf' >
          </div>
          <div className='tqtt'>
            {myFavorite.length > 0 ? <Favorite name={movies.title} input={filteredInput} getDel={removeFavouriteMovie} item={myFavorite} /> : <Empty />}
          </div>
        </Route>

        {/* PAGE PRINCPALE */}

        <Route path={"/"}>
          <Banner randomBook={GetR} />
          <div className='randomBook active'>
            {GetR}
          </div>
          <div className='main'>
            {movies.filter((val) => {

              if (filteredInput == "") {
                return (val)

              } else if (val.title.toLowerCase().includes(filteredInput.toLowerCase()) && val) {
                return val
              }
            }).map((item, index) => {
              return <Card id={index} key={index} item={item} goFav={() => addFavouriteMovie(item)} />
            }
            )}
          </div>
        </Route>
      </Switch>
    </div >
  );
}

export default App;

