import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Rightbar from './Rightbar'
import { useSelector } from 'react-redux'


const Body = () => {
  const {openSidebar}=useSelector(store=>store.appSlice)
  return (
    
    
    <div className='flex '>
       <Sidebar className={`${openSidebar? 'w-3/12':'w-1/12'}`}/>
      <Outlet className={`${openSidebar? 'w-9/12':'w-11/12'}`}/>
      <Rightbar />
    </div>
  
    
  )
}

export default Body