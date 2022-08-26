import React from 'react'
import CheckBox from './CheckBox';

const Content = (props) => {

    const getID = (e) => {
        console.log(e.target.id);
    }



    const getDel = (e) => {

        let delfav = props.stock.indexOf(props.item.title)
        props.stock.splice(delfav, 1)
        console.log(delfav)
    }




    return (
        <div className='infos'>
            <div className='cancel'>
                <div className='title-view'>

                    <h1 id={props.item.title} onClick={getID}>{props.item.title} </h1>
                    <CheckBox />
                </div>
                <span id={props.item.title} onClick={getDel}>x</span>
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