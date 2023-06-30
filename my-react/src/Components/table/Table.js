import React from 'react'
import './table.css'
import TableTitle from './title/TableTitle'
import TableItems from './items/TableItems'


export default function Table(props) {
    return (
        <div className='table'>
            <h3>{props.title}</h3>
            <div className='table__box'>
                <TableTitle list={props.header} />
                <TableItems list={props.items} click={props.click} />
            </div>
            <div className='table__numble'>
                <div className='numble__unactive'><i className="fa-solid fa-angle-left"></i></div>
                <div className='numble__active'>1</div>
                <div><i className="fa-solid fa-angle-right"></i></div>

            </div>

        </div>
    )
}
