import { Link } from 'react-router-dom';
import './Card.css'
import fav from '../../images/fav-pink.png'




function Card(props) {
    function getID(e) {
        props.goFav(e.target.id);
    }
    return (
        <div className='card'>

            <div className='faceCover'>
                <img className='img' src={props.item.image_url} alt="" />
            </div>
            <div className='faceSynopsis'>
                <span className='synopsis'>{props.item.description}</span>
            </div>
                <div className='cardBottom'>
                    <h3 className='title'>{props.item.title}</h3>
                    <div className='details'>
                        <span className='score'>{props.item.rating}</span>
                        <div>
                            <img className='fav' src={fav} alt="" id={props.item.title} onClick={getID}/>
                        </div>
                    </div>
                </div>
            
        </div>


    )
};

export default Card
