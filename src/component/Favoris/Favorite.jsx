import React, { useEffect } from 'react'
import axios from 'axios'
import './Favorite.css'
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

    return (
        <div className={props.stock.includes(props.item.title) ? props.display : 'dnone'}   >
            {/* <Search /> */}
            <div >
                <img src={props.item.image_url} alt="" />
            </div>
            <div className='infos'>
                <div className='cancel'>
                    <h1 id={props.item.title} onClick={getID}>{props.item.title} </h1>
                    <span id={props.item.title} onClick={getDel}>x</span>
                </div>
                <h4> </h4>
                <h4>SCORE: {props.item.score} </h4>
                <h4>DESCRIPTION: </h4>
                <p>{props.item.synopsis}</p>
            </div>
        </div>
    )
}

export default Favorite