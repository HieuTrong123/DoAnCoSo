import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'
export default function NotFound() {
    return (
        <div className='notfound'>
            <h3>404</h3>
            <p>Trang không tồn tại</p>
            <Link to={"/"}>
                <button onClick={() => { document.title = "Trang chủ" }}>Trang chủ</button>
            </Link>

        </div>
    )
}
