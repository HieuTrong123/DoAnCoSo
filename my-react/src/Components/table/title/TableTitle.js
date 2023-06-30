import React from 'react'
import './tabletitle.css'
export default function TableTitle(props) {
    return (
        <div>
            <ul className='title__list'>
                {props.list.map((e, id) => (
                    <li key={id} className='title__item'>
                        {e}
                    </li>
                ))}
            </ul>
        </div>
    )
}
