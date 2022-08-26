import './Banner.css'
import bannerSide from '../../images/banner.png'
import bannerBook from '../../images/banner_book.png'

function Banner(props){
    return(
        <div className='banner'>
            <img className='bannerImg1' src={bannerSide} alt="" />
            <img className='bannerBook' src={bannerBook} alt="" onClick={props.randomBook}/>
            <img className='bannerImg' src={bannerSide} alt="" />
        </div>
    );
}
export default Banner;