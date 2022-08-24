import React, { useEffect } from 'react'
import axios from 'axios'
import './Favorite.css'


const Favorite = (props) => {
    const getID = (e) => {
        console.log(e.target.id);
    }
    const getDel = (e) => {
        if (props.stock.includes(props.item.title)) {
            // props.stock.indexOf(props.item.title).remove()
        }
    }

    return (

        <div className={props.stock.includes(props.item.title) ? props.fav : 'dnone'}   >
            {/* <Search /> */}
            <div >
                <img src={props.item.image_url} alt="" />
            </div>
            <div className='infos'>
                <div className='cancel'>
                    <h1 id={props.item.title} onClick={getID}>{props.item.title} </h1>
                    <span id={props.item.title} onClick={getDel}>x</span>

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