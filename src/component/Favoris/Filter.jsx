import React, { useState } from 'react'
import './Filter.css'

const Filter = (props) => {

    const [filter, setFilter] = useState('')

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        setFilter(event.target.value)
        console.log(filter)
    };



    return (
        <div className='filter-select'>
            <select className='inner-filter' value={filter} onChange={dropdownChangeHandler} name="" id={props.item}>
                <option value="All">All</option>
                <option value="Read">Read</option>
                <option value="Not read">Not read</option>
            </select>
        </div>
    )
}

export default Filter