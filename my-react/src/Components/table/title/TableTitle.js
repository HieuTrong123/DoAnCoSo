import React from 'react'
import './tabletitle.css'
export default function TableTitle(props) {
    var id = 1;
    return (
        <div>
            <ul className='title__list'>
                {props.list.map(e => (
                    <li key={id++} className='title__item'>
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    )
}
