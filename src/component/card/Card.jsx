import { Link } from 'react-router-dom';
import './Card.css'
import fav from '../../images/fav-pink.png'


function Card(props) {
    function getID(e) {
        console.log(e.target.id);
    }
    return (
        <div className='card'>
            <img className='img' src={props.item.image_url} alt="" />
            <div className='cardBottom'>
                <h3 className='title'>{props.item.title}</h3>
                <div className='details'>
                    <span className='score'>{props.item.score}</span>
                    <button className='btnFav' id={props.item.title} onClick={getID}><img className='fav' src={fav} alt="" /></button>
                </div>
            </div>

        </div>


    )
};

export default Card
