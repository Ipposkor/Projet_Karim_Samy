import App from "../../App";
import './RandomBook.css'

function BookR(props){
    return(
        <div className="bookR">
            <img className="bookRimg" src={props.img} alt="" />
            <span>{props.title}</span>
        </div>
    );
}

export default BookR;