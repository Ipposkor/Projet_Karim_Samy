import { Link } from 'react-router-dom';
import './Card.css'

function Card(props) {
    function getID(e) {
        console.log(e.target.id);
    }
    return (
        <div>
            <img className='img' src={props.item.image_url} alt="" />
            <h3 className='title'>{props.item.title}</h3>
            <div className='overview'>{props.item.overview}</div>
            <span className='date'>{props.item.release_date}</span>
            <button id={props.item.title} onClick={getID}></button>
        </div>
    );
}

export default Card;