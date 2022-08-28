import './Header.css'
import fav from '../../images/favoris-dark.png'
import home from '../../images/accueil.png'
import logo from '../../images/logo_1.jpg'
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
            <div className='whiteSpace'></div>
            <Link to={"/Favoris"}>

                    <img className= {props.FavClick} src={fav} alt="" onClick={FavClick}/>

            </Link>
            <Link to={"/"}>

                    <img className= {props.HomeClick} src={home} alt="" onClick={HomeClick} />

            </Link>
            <div className='whiteSpace2'><img className='logo' src={logo} alt="" /></div>

            <input className='search' type="text" placeholder='What are you Reading for ?' onChange={getAnime} />

        </div>
    );
}

export default Header;