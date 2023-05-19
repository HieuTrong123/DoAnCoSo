import React, { useState } from 'react'
import './AvtImg.css'
import Model from '../Model/Model'
export default function AvtImg() {
    const [view, setview] = useState(false);
    function HandleClick() {
        setview(!view);
    }
    const element = (<>
        <img onClick={e => { e.stopPropagation() }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIj019M0W5cXnC6dcM4SefMwCEhfCBmwvug&usqp=CAU' />
    </>)
    return (
        <div>
            <Model color='#00000099' mode={view} children={element} handleSettings={HandleClick} />
            <div onClick={HandleClick} className='avtbox__img'>
                <div className='contain'>
                    <i class="fa-solid fa-eye"></i>
                    <span>Xem ảnh</span>
                </div>
            </div>
        </div>
    )
}
