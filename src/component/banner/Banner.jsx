import './Banner.css'
import bannerSide from '../../images/banner.png'
import bannerBook from '../../images/book-random_2.png'

function Banner(props){
    return(
        <div className='banner'>
            {/* <img className='bannerImg1' src={bannerSide} alt="" /> */}
            <img className='bannerBook' src={bannerBook} alt="" onClick={props.randomBook}/>
            {/* <img className='bannerImg' src={bannerSide} alt="" /> */}
        </div>
    );
}
export default Banner;