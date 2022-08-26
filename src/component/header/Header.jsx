import './Header.css'
import fav from '../../images/book.png'
import home from '../../images/home-dark.png'
import { Link } from 'react-router-dom';

function Header(props) {
    function getAnime(event) {
        return (
            props.getManga(event.target.value)
        );
    }

    function FavClick(){
        props.changeFav()
    }
    function HomeClick(){
        props.changeHome()
        }
    return (
        <div className='header'>
            <Link to={"/Favoris"}>
                <img className= {props.FavClick} src={fav} alt="" onClick={FavClick}/>
            </Link>
            <Link to={"/"}>
                <img className= {props.HomeClick} src={home} alt="" onClick={HomeClick} />
            </Link>

            <input className='search' type="text" placeholder='What are you reading for ?' onChange={getAnime} />
        </div>
    );
}

export default Header;