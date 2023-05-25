import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'
export default function NotFound() {
    document.title = "Camera"
    return (
        <div className='notfound'>
            <h3>404</h3>
            <p>Trang không tồn tại</p>
            <Link to={"/"}>
                <button>Trang chủ</button>
            </Link>

        </div>
    )
}
