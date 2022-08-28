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
import BookR from './component/randomBook/RandomBook';
import refresh from './images/refresh.png'




function App() {

  const [movies, setMovies] = useState([])
  const [anime, setAnime] = useState([])
  const [favorite, setFavorite] = useState('favHeader')
  const [home, setHome] = useState('iconNone')
  const [filteredInput, setFilteredInput] = useState('');

  const animeFav = (book) => {
    setAnime((prevBook) => {
      return ([book, ...prevBook]);
    })
  }

  const inputChangeHandler = (selectedAnime) => {
    setFilteredInput(selectedAnime);
  };

  useEffect(() => {
    axios.get('https://example-data.draftbit.com/books?_page=4&_limit=20').then((response) => {
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
  function GetR(props) {
    let corp = document.querySelector('.main')
    let bookrandom = document.querySelector('.randomBook')
    corp.classList.toggle('active')
    bookrandom.classList.toggle('active')
  }
  // const randombook = movies[Math.floor(Math.random() * movies.length)]
  const [book,setBook] = useState('')
  const getBook = () => {
    fetch('https://example-data.draftbit.com/books/')
      .then((res) => res.json())
      .then((data) => {
        let randombook = Math.floor(Math.random() * data.length);
        setBook(data[randombook])
      })
  }
  useEffect(() =>{
    getBook();
  },[])



  return (
    <div className="App">
      <Header getManga={inputChangeHandler} FavClick={favorite} HomeClick={home} changeFav={changeMenu} changeHome={changeMenuTwo} />
      <Switch>
        {/* PAGE FAVORIS */}

        <Route path={"/Favoris"}>
          <div className='books-shelf' >


          </div>
          <div className='tqtt'>


            {movies.map((item, index) => {
              // if (item.title.toLowerCase().includes(filteredInput.toLowerCase())) {
                return <Favorite stock={anime} id={index} item={item} />


              // }
              // return item.title.toLowerCase().includes(filteredInput.toLowerCase()) ? <Favorite stock={anime} id={index} item={item} /> : null
            })}
          </div>
        </Route>

        {/* PAGE PRINCPALE */}

        <Route path={"/"}>
          <Banner randomBook={GetR}  />
          <div className='randomBook active'>
            <button className='btnR' onClick={getBook}><img src={refresh} alt="" /></button>
            <p className='titleR'>{book.title}</p>
            <img className='imgR' src={book.image_url} alt="" />
            <p className='textR'>{book.description}</p>
          </div>
          <div className='main'>
            {movies.map((item, index) => {
              // if (item.title.toLowerCase().includes(filteredInput.toLowerCase())) {
                return (
                  <Card id={index} key={index} item={item} stock={anime} goFav={() => { animeFav(item.title) }} />
                );
              // }
            })}
          </div>
        </Route>
      </Switch>
    </div >
  );
}

export default App;

