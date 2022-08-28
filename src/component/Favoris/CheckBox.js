import React, { useState, useEffect, useReducer } from 'react';
import './CheckBox.css'
import selected from '../../images/bookgreen.png'
import deselected from '../../images/book2.png'

const CheckBox = (props) => {

    const [isSeen, setIsSeen] = useState(false);
    const [isRead, setIsRead] = useState([]);

    const toggleCheckSeen = (book) => {
        // let books = book.target.currentSrc
        // let bk = book.target.id
        setIsSeen(!isSeen)
        // const test = [...isRead, books]

        // setIsRead(checkboxed)
        // saveToLocalStorage(isRead)
    }

    const checkboxed = isSeen ? selected : deselected;


    // useEffect(() => {
    //     const movieFavourites = JSON.parse(
    //         localStorage.getItem('READ')
    //     );

    //     if (movieFavourites) {
    //         setIsRead(movieFavourites);
    //     }
    // }, []);

    // const saveToLocalStorage = (items) => {
    //     localStorage.setItem('READ', JSON.stringify(items));
    // };
    // const checkboxed = isSeen ? selected : deselected;


    return (
        <div>
            <div id={props.item} onClick={toggleCheckSeen}>
                <img className='logo-read' alt={'svtp-Checkbox'} src={checkboxed} />
            </div>
        </div>
    )
}
export default CheckBox