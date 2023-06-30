import React from 'react'
import './tableitems.css'
export default function TableItems(props) {
  return (
    <div>
      <ul>
        {props.list.map((e, id) => (
          <li onClick={props.click} className='items' key={id}>
            <ul className='items__list'>
              {e.map((item, idit) => (
                <li className='items__item' key={idit}>
                  {item}
                </li>))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
