import React from 'react'
import './Content.css'
import CheckBox from './CheckBox';

const Content = (props) => {

    const getID = (e) => {
        console.log(e.target.id);
    }






    return (
        <div className='infos'>
            <div className='cancel'>
                <div className='title-view'>

                    <h1 id={props.item.title} onClick={getID}>{props.item.title} </h1>
                </div>
            </div>
            <span>Pages: {props.item.num_pages}</span>
            <br />
            <span>Score: {props.item.rating}</span>
            <br />

            <span>Genre: {props.item.genres}</span>
            <br />
            <span>{props.item.authors}</span>

            <p>{props.item.description}</p>
        </div>
    )
}

export default Content