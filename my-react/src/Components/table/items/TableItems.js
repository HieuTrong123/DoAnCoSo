import React from 'react'
import './tableitems.css'
export default function TableItems(props) {
  var idit = 1, id = 1;

  return (
    <div>
      <ul>
        {props.list.map(e => (
          <li className='items' key={id++}>
            <ul className='items__list'>
              {e.map(item => (
                <li className='items__item' key={idit++}>
                  {item}
                </li>))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
