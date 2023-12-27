import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import './index.css'

import React from 'react'

export const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className='w-full h-full absolute left-[305px]'>
        <Outlet />
        <h1>Nothing</h1>
      </div>
    </div>
  )
}
