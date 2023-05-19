import React, { useState } from 'react'
import './sidebar.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  Sidebar.propTypes = {
    modesidebar: PropTypes.bool.isRequired,
  }
  const [ActiveHomepage, setActiveHomepage] = useState(true);
  const [ActiveAccount, setActiveAccount] = useState(false);
  const [ActiveArea, setActiveArea] = useState(false);
  const [ActiveStatistical, setActiveStatistical] = useState(false);
  function HandleActiveHomepage() {
    setActiveHomepage(true)
    setActiveAccount(false)
    setActiveArea(false)
    setActiveStatistical(false)
    document.title = "Trang chủ"
  }
  function HandleActiveAccount() {
    setActiveHomepage(false)
    setActiveAccount(true)
    setActiveArea(false)
    setActiveStatistical(false)
    document.title = "Tài khoản"
  }
  function HandleActiveArea() {
    setActiveHomepage(false)
    setActiveAccount(false)
    setActiveArea(true)
    setActiveStatistical(false)
    document.title = "Khu vực"
  }
  function HandleActiveStatistical() {
    setActiveHomepage(false)
    setActiveAccount(false)
    setActiveArea(false)
    setActiveStatistical(true)
    document.title = "Thống kê"
  }
  return (
    <div className='Sidebar' style={props.modesidebar ? { width: 'var( --sidebar )' } : { width: 0 }}>
      <ul className='sidebar__list'>
        <Link to={"/"}>
          <li onClick={HandleActiveHomepage} className={ActiveHomepage ? 'sidebar__item Active' : 'sidebar__item'}><i class="fa-solid fa-house"></i><span>Trang chủ</span></li>
        </Link>
        <Link to={"/account"}>
          <li onClick={HandleActiveAccount} className={ActiveAccount ? 'sidebar__item Active' : 'sidebar__item'}><i class="fa-solid fa-user"></i><span>Tài khoản</span></li>
        </Link>
        <Link to={"/area"}>
          <li onClick={HandleActiveArea} className={ActiveArea ? 'sidebar__item Active' : 'sidebar__item'}><i class="fa-solid fa-city"></i><span>Khu vực</span></li>
        </Link>
        <Link to={"/notfound"}>
          <li onClick={() => { document.title = "Camera" }} className='sidebar__item'><i class="fa-solid fa-camera"></i><span>Camera</span></li>
        </Link>
        <Link to={"/Statistical"}>
          <li onClick={HandleActiveStatistical} className={ActiveStatistical ? 'sidebar__item Active' : 'sidebar__item'}><i class="fa-solid fa-chart-simple"></i><span>Thống kê</span></li>
        </Link>
      </ul>
    </div>
  )
}
