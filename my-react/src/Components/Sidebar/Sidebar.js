import React from 'react'
import './sidebar.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default function Sidebar(props) {
  Sidebar.propTypes = {
    modesidebar: PropTypes.bool.isRequired,
  }
  return (
    <div className='Sidebar' style={props.modesidebar ? { width: 'var( --sidebar )' } : { width: 0 }}>
      <ul className='sidebar__list'>
        <li>
          <NavLink to={"/"} className='sidebar__item'>
            <i class="fa-solid fa-house"></i><span>Trang chủ</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/account"} className='sidebar__item'>
            <i class="fa-solid fa-user"></i><span>Tài khoản</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/area"} className='sidebar__item'>
            <i class="fa-solid fa-city"></i><span>Khu vực</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/notfound"} className='sidebar__item'>
            <i class="fa-solid fa-camera"></i><span>Camera</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/Statistical"} className='sidebar__item'>
            <i class="fa-solid fa-chart-simple"></i><span>Thống kê</span>
          </NavLink>
        </li>

      </ul>


    </div>
  )
}
