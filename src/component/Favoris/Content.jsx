import React from 'react'
import './Content.css'
import CheckBox from './CheckBox';

const Content = (props) => {

    const getID = (e) => {
        console.log(e.target.id);
        // props.changeId(e.target.id)
    }
    return (
        <div className={'infos'}>


            <div>
                <div className='cancel'>
                    <div className='title-view'>

                        <h1 id={props.item.title} onClick={getID}>{props.item.title} </h1>
                    </div>
                </div>
                <span><span className="bold">Pages:</span>  {props.item.num_pages}</span>
                <br />
                <span><span className="bold">Score: </span> {props.item.rating}</span>
                <br />
                <span><span className="bold">Genre:</span>  {props.item.genres}</span>
                <br />
                <span><span className="bold">Authors: </span> {props.item.authors}</span>

                <p>{props.item.description}</p>
            </div>





        </div>
    )
}

export default Content