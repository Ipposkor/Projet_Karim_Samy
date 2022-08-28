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
const Favorite = (props) => {



    // useEffect(() => {
    //     axios.get('https://example-data.draftbit.com/books/').then((response) => {
    //         setBooks(response.data)
    //         // const ele = response
    //         // console.log(response)
    //     }).catch(err => { console.log(err) })
    // }, [])



    const [isChecked, setIsChecked] = useState(true);
    const [isContent, setIsContent] = useState(true);
    const [isSeen, setIsSeen] = useState(false);

    const [books, setBooks] = useState([]);

    const toggleCheck = (e) => {
        setIsChecked(!isChecked);
        setBooks(e.target.id)

        // if (books === )
        // console.log(e.target.id)
    }

    console.log(books);



    // const toggleCheckSeen = (book) => {
    //     // let books = book.target.currentSrc
    //     // let bk = book.target.id
    //     setIsSeen(!isSeen)
    //     // const test = [...isRead, books]

    //     // setIsRead(checkboxed)
    //     // saveToLocalStorage(isRead)
    // }

    return (

        <div className='tqtfav'>
            {props.item.map((item, index) => {



                if (item.title.toLowerCase().includes(props.input.toLowerCase())) {

                    return (
                        <div key={index} className='inner-movie'   >
                            {/* <Search /> */}
                            <div className='inner-book'  >
                                <div className='greenBook'>
                                    <div>
                                        <CheckBox />

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
                }





            })}

        </div>
    )
}

export default Favorite