import './Header.css'
import fav from '../../images/favoris.png'
import { Link } from 'react-router-dom';

function Header(props){
    function getAnime(event){
        return(
            props.getManga(event.target.value)
        );
    }
    return(
        <div className='header'>
            <input className='search' type="text" placeholder='Search' onChange={getAnime}/>
            <Link to={"/Favoris"}>
                <img className='fav' src={fav} alt="" />
            </Link>
        </div>
        );
}

export default Header;