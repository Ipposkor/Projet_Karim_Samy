import { Link } from 'react-router-dom';
import './Card.css'
import fav from '../../images/fav.png'
import fav_Like from '../../images/fav-pink-like.png'
import { useState } from 'react';




function Card(props) {
    function getID(e) {
        props.goFav(e.target.id);
        setIsSeen(!isSeen);
        if (props.stock.includes(props.item.title)){
            let delfav = props.stock.indexOf(props.item.title)
            props.stock.splice(delfav, 1)
            }
    }
    const [isSeen, setIsSeen] = useState(false);

    const toggleCheckSeen = () => {

    }

    const checkboxed = isSeen ? fav_Like : fav;
    return (
        <div className='cardBox'>
            <div className='card'>
                <div className='faceCover'>
                    <img className='img' src={props.item.image_url} alt="" />
                    <img className='fav' src={checkboxed} alt="" id={props.item.title} onClick={getID}/>
                </div>
                <div className='cardSide'>
                    <span className='title'>{props.item.title}</span>
                    <span className='author'>{props.item.authors}</span>
                    <span className='score'><span className='rating'>Rating: </span>{props.item.rating}</span>
                </div>
            </div>
        </div>


    )
};

export default Card

