import React from 'react'
import axios from 'axios'

const Favorite = (props) => {
    return (
        <div>
            <div className='img'>
                <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face/ ${props.item.poster_path}`} alt="" />

            </div>
            <div className='infos'>

                <h1>TITLE: {props.item.title} </h1>
                <h4>RELEASE: {props.item.release_date} </h4>
                <h4>SCORE: {props.item.vote_average} </h4>
                <h4>DESCRIPTION: </h4>
                <p>{props.item.overview}</p>
            </div>
        </div>
    )
}

export default Favorite