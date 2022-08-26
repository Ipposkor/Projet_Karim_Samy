import React, { useState } from 'react';
import './CheckBox.css'
import selected from '../../images/bookgreen.png'
import deselected from '../../images/book2.png'

const CheckBox = () => {

    const [isSeen, setIsSeen] = useState(false);

    const toggleCheckSeen = () => {
        setIsSeen(!isSeen);

    }

    const checkboxed = isSeen ? selected : deselected;

    return (
        <div>
            <div onClick={toggleCheckSeen}>
                <img className='logo-read' alt={'svtp-Checkbox'} src={checkboxed} />
            </div>
        </div>
    )
}
export default CheckBox