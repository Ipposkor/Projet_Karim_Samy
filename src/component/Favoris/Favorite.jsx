import React, { useEffect, useState } from 'react'
import booknot from '../../images/open-book.png'
import './Favorite.css'
import Content from './Content'
import CheckBox from './CheckBox'
import close from '../../images/close.png'
import cancel from '../../images/clear.png'
import Empty from './Empty'
const Favorite = (props) => {


    const [isChecked, setIsChecked] = useState(true);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
        // handleClick()
    }

    const getDel = (e) => {


        let delfav = props.stock.indexOf(props.item.title)
        props.stock.splice(delfav, 1)
        console.log(delfav)
    }

    const checkbox = isChecked ? '' : <Content stock={props.stock} item={props.item} />;

    return (

        <div>
            <div className={props.stock.includes(props.item.title) ? ' inner-movie' : 'dnone'}   >
                {/* <Search /> */}
                <div className='inner-book'  >
                    <div className='greenBook'>
                        <CheckBox />
                        <span className='close' id={props.item.title}>
                            <img onClick={getDel} src={cancel} alt="" />
                        </span>
                    </div>
                    <img className='img-img' onClick={toggleCheck} src={props.item.image_url} alt="" />
                </div>
                <div className='inner-content'>
                    {checkbox}
                </div>
            </div>
        </div>
    )
}

export default Favorite