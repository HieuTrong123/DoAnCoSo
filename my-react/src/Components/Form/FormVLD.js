import React, { useState } from 'react'
import './Form.css'
export default function FormVLD(props) {
    const [focusInput, setfocusInput] = useState(false)
    const [modePassword, setmodePassword] = useState(false)
    function HandleFocus() {
        setfocusInput(true)
    }
    function HandleBlur(e) {
        if (e.target.value === '') {
            setfocusInput(false)
        }
    }
    function HandleClick() {
        setmodePassword(!modePassword);
    }
    return (
        <div className='Form'>
            <p className={focusInput ? 'Form__Name Form__Name-Active' : 'Form__Name'}>{props.name}</p>
            <div className={focusInput ? 'Form__input-Active Form__input' : 'Form__input'}>
                <input onFocus={HandleFocus} onBlur={HandleBlur} type={(props.type === 'password' && modePassword) ? 'text' : props.type}></input>
                <i onClick={HandleClick} className={(props.type === 'password' && modePassword) ? 'fa-sharp fa-solid fa-eye-slash' : props.icon} style={props.icon ? { display: 'block' } : { display: 'none' }}></i>
            </div>
        </div>
    )
}
