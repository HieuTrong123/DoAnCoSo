import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import './Container.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
export default function Page_Container() {
  const [modesidebar, setmodesidebar] = useState(true)
  function HandleSidebar() {
    setmodesidebar(!modesidebar);
  }

  return (
    <div id='Container__page' style={modesidebar ? { margin: ' 0 0 0 var( --sidebar )' } : { margin: 0 }}>
      <Sidebar modesidebar={modesidebar} />
      <Navbar HandleSidebar={HandleSidebar} modesidebar={modesidebar} />
      <div className='Container__page-Content'>
        <div className='Container'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}
