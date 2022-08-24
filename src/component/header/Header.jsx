import './Header.css'
import fav from '../../images/favoris.png'
import { Link } from 'react-router-dom';

function Header(props) {
    function getAnime(event) {
        return (
            props.getManga(event.target.value)
        );
    }
    return (
        <div className='header'>
            <Link to={"/Favoris"}>
                <img className='fav ' src={fav} alt="" />
            </Link>
            <Link to={"/"}>
                <button>test</button>
            </Link>

            <input className='search' type="text" placeholder='Search' onChange={getAnime} />
        </div>
    );
}

export default Header;