import React, { useState, useEffect, useReducer } from 'react';
import './CheckBox.css'
import selected from '../../images/bookgreen.png'
import deselected from '../../images/book2.png'

const CheckBox = (props) => {

    const [isSeen, setIsSeen] = useState(props.data.vu);
    const [isRead, setIsRead] = useState([]);



    const toggleCheckSeen = (book) => {
        setIsSeen(!isSeen)
        props.data.vu = !props.data.vu
    }


    const checkboxed = isSeen ? selected : deselected;

    return (
        <div>
            <div id={props.id} onClick={toggleCheckSeen}>
                <img className='logo-read' alt={'svtp-Checkbox'} src={checkboxed} />
            </div>
        </div>
    )
}
export default CheckBox