import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import MainApp from './Main App/MainApp'
import Sidebar from './Sidebar/Sidebar'

const BigDeviceApp = () => {
  return (
    <div className="BigDeviceApp">
        {/* App Left */}
        <Sidebar />

        {/* App Right */}
        <MainApp />
    </div>
  )
}

export default BigDeviceApp