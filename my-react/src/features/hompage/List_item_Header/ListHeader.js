import React from 'react'
import './listheader.css'
export default function ListHeader(props) {
    var id = 1;
    return (
        <div>
            <ul className='Header__list'>
                {props.item_Headers.map(e => (<li key={id++} className='Container__box'>
                    <h3>{e.title}</h3>
                    <div>
                        <i className={e.icon}></i>
                        <span>{e.numble}</span>
                    </div>
                    <p><span>chi tiết</span></p>
                </li>))}

            </ul>
        </div>
    )
}
