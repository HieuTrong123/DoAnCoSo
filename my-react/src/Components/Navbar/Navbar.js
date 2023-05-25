import React, { useState } from 'react'
import './nav.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Model from '../Model/Model'
export default function Navbar(props) {
    const [modesettings, setmodesettings] = useState(false)
    function handleSettings() {
        setmodesettings(!modesettings)
    }
    Navbar.propTypes = {
        HandleSidebar: PropTypes.func.isRequired,
    }
    return (
        <div className='navbar' style={props.modesidebar ? { left: 'var(--sidebar)' } : { left: 0 }}>
            <i className="fa-solid fa-bars" onClick={props.HandleSidebar}></i>
            <Model mode={modesettings} handleSettings={handleSettings} />
            <div className='navbar__item__avt'>
                <p className='navbar__item__notify'>Xin chào, Admin</p>
                <div onClick={handleSettings}>

                    <div className='navbar__item__img'></div>
                    <ul className='settings__list' style={modesettings ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}>

                        <Link to={'/info'}>
                            <li className='settings__item'>
                                <i className='fa-solid fa-user-large'></i>
                                <span className='settings__text'>Thông tin tài khoản</span>
                            </li>
                        </Link>

                        <Link to={'/ChangePassword'}>
                            <li className='settings__item'>
                                <i class="fa-solid fa-key"></i>
                                <span className='settings__text'>Đổi mật khẩu</span>
                            </li>
                        </Link>

                        <Link to={'/login'}>
                            <li className='settings__item'>
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span className='settings__text'>Đăng xuất</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>


        </div>
    )
}
