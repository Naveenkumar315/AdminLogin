import React from 'react'
import './Topbar.css'
import { useNavigate } from "react-router-dom";

const TopBar = () =>{
  const navigate: any = useNavigate();

  const handleLogout = () =>{
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userName')
    navigate('/')
  }
  return (
    <>
        <div className='container_Top'>
          <p className='userName'>Hello {sessionStorage.getItem('userName')}</p><button onClick={()=>handleLogout()}>logout</button>
        </div>
    </>
  )
}

export default TopBar
