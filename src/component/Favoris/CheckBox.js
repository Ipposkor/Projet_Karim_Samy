import React, { useState, useEffect, useReducer } from 'react';
import './CheckBox.css'
import selected from '../../images/bookgreen.png'
import deselected from '../../images/book2.png'

const CheckBox = (props) => {

    const [isSeen, setIsSeen] = useState(false);

    const toggleCheckSeen = (e) => {
        console.log(e)
        setIsSeen(!isSeen)
    }

    const checkboxed = isSeen ? selected : deselected;

    return (
        <div>
            <div id={props.item} onClick={toggleCheckSeen}>
                <img className='logo-read' alt={'svtp-Checkbox'} src={checkboxed} />
            </div>
        </div>
    )
}
export default CheckBox