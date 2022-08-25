import React, { useEffect } from 'react'
import book from '../../images/open-book.png'
import axios from 'axios'
import './Favorite.css'
import bookread from '../../images/read.png'

import { Link } from 'react-router-dom'


const Favorite = (props) => {
    const getID = (e) => {
        console.log(e.target.id);
    }

    const getDel = (e) => {

        let delfav = props.stock.indexOf(props.item.title)
        props.stock.splice(delfav, 1)
        console.log(delfav)
    }

    const reading = (event) => {
        // props.doneReading(event.target.id)
    }

    return (
        <div className={props.stock.includes(props.item.title) ? props.read + ' inner-movie' : 'dnone'}   >
            {/* <Search /> */}
            <div className='inner-book'  >
                <img className='img-img' src={props.item.image_url} alt="" />
            </div>
            <div className='infos'>
                <div className='cancel'>
                    <div className='title-view'>

                        <h1 id={props.item.title} onClick={getID}>{props.item.title} </h1>
                        <img key={props.item.id} id={props.item.title} onClick={reading} className='book' src={props.bkrd.includes(props.item.title) ? bookread : book} alt="" />
                    </div>
                    <span id={props.item.title} onClick={getDel}>x</span>
                </div>
                <span>Pages: {props.item.num_pages}</span>
                <br />
                <span>Score: {props.item.rating}</span>
                <br />

                <span>Genre: {props.item.genres}</span>

                <p>{props.item.description}</p>
            </div>
        </div>)
}

export default Favorite