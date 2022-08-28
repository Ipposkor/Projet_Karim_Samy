import './RandomBook.css'

function BookR(props){
    return(
        <div className="bookR">
            <img className="bookRimg" src={props.item.image_url} alt="" />
            <span className='RandomTxt'>{props.item.title}</span>
        </div>
    );
}

export default BookR;