import { Link } from 'react-router-dom';
import './Card.css'
import fav from '../../images/fav.png'




function Card(props) {
    function getID(e) {
        props.goFav(e.target.id);
    }
    return (
        <div className='cardBox'>
            <div className='card'>
                <div className='faceCover'>
                    <img className='img' src={props.item.image_url} alt="" />
                    <img className='fav' src={fav} alt="" id={props.item.title} onClick={getID}/>
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
