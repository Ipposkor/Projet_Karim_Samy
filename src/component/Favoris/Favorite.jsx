import React, { useEffect } from 'react'
import axios from 'axios'
import './Favorite.css'


const Favorite = (props) => {
    return (
        <div className='inner-movie'    >
            {/* <Search /> */}
            <div >
                <img src={props.item.image_url} alt="" />
            </div>
            <div className='infos'>
                <div className='cancel'>
                    <h1>{props.item.title} </h1>
                    <span>x</span>

                </div>
                <h4>RELEASE: {props.item.start_date.slice(0, 10)} </h4>
                <h4>SCORE: {props.item.score} </h4>
                <h4>DESCRIPTION: </h4>
                <p>{props.item.synopsis}</p>
            </div>
        </div>
    )
}

export default Favorite