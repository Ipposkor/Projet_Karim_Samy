import React from 'react'

const Search = (props) => {

    const inputHandler = (event) => {
        // props.onChangeFilter(event.target.value);
        console.log(event.target.value)
        props.onchangeInput(event.target.value)
    };
    return (
        <div>
            <input type="text" onChange={inputHandler} />


        </div>
    )
}

export default Search