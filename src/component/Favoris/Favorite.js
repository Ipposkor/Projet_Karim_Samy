import React, { useEffect, useState } from 'react'
// import booknot from '../../images/open-book.png'
import './Favorite.css'
import Content from './Content'
import CheckBox from './CheckBox'
import close from '../../images/close.png'
import axios from 'axios';
import cancel from '../../images/clear.png'
import Empty from './Empty'
import { book } from 'fontawesome'
import Filter from './Filter'
const Favorite = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [books, setBooks] = useState([]);
    const [filtered, setFiltered] = useState('All')

    const toggleCheck = (e) => {
        setIsChecked(!isChecked);
        setBooks(e.target.id)
    }

    const filter = (e) => {
        console.log(e)
        setFiltered(e)
    }

    const favfav = () => {



    }

    // const onFilteredItem = () => {
    //     if (filtered == "All") {
    //         return 'tqtfav'
    //     } else if 
    // }

    return (
        <div>
            <div className='filter-filter'>

                {/* <Filter onChangeFilter={filter} /> */}
            </div>

            <div className='tqtfav'>
                {props.item.map((item, index) => {
                    if (item.title.toLowerCase().includes(props.input.toLowerCase())) {
                        if (props.filtered == 'Read' && item.vu == true) {
                            return (
                                <div key={index} className='inner-movie'   >
                                    {/* <Search /> */}
                                    <div className='inner-book'  >
                                        <div className='greenBook'>
                                            <div>
                                                <CheckBox data={item} id={item.id} />

                                            </div>
                                            <span className='close' id={item.title}>
                                                <img onClick={() => props.getDel(item)} src={cancel} alt="" />
                                            </span>
                                        </div>
                                        <img id={item.title} className='img-img' onClick={toggleCheck} src={item.image_url} alt="" />
                                    </div>
                                    <div className='inner-content'>
                                        {books == item.title && isChecked == true ? <Content item={item} /> : null}
                                    </div>
                                </div>)
                        } else if (props.filtered == 'Not read' && item.vu == false) {
                            return (<div key={index} className='inner-movie'   >
                                <div className='inner-book'  >
                                    <div className='greenBook'>
                                        <div>
                                            <CheckBox data={item} id={item.id} />

                                        </div>
                                        <span className='close' id={item.title}>
                                            <img onClick={() => props.getDel(item)} src={cancel} alt="" />
                                        </span>
                                    </div>
                                    <img id={item.title} className='img-img' onClick={toggleCheck} src={item.image_url} alt="" />
                                </div>
                                <div className='inner-content'>
                                    {books == item.title && isChecked == true ? <Content item={item} /> : null}
                                </div>
                            </div>)
                        } else if (props.filtered == 'All') {
                            return (
                                <div key={index} className='inner-movie'   >
                                    <div className='inner-book'  >
                                        <div className='greenBook'>
                                            <div>
                                                <CheckBox data={item} id={item.id} />

                                            </div>
                                            <span className='close' id={item.title}>
                                                <img onClick={() => props.getDel(item)} src={cancel} alt="" />
                                            </span>
                                        </div>
                                        <img id={item.title} className='img-img' onClick={toggleCheck} src={item.image_url} alt="" />
                                    </div>
                                    <div className='inner-content'>
                                        {books == item.title && isChecked == true ? <Content item={item} /> : null}
                                    </div>
                                </div>

                            )
                        }

                    }
                })}
            </div>
        </div>

    )
}

export default Favorite