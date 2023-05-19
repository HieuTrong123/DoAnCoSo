import React from 'react'
import './Model.css'
export default function Model(props) {

    return (
        <div className='model' onClick={props.handleSettings} style={props.mode ? { display: 'flex', backgroundColor: props.color } : { display: 'none' }}>
            {props.children}
        </div>
    )
}
