import React from 'react'
import Header from './Header'
import Left_Part from './Left_Part'
import Right_Part from './Right_Part'

const MainApp = () => {
  return (
    <div className="AppRight">
      <Header />
      <div className="app">
        <Left_Part />
        <Right_Part />
      </div>
    </div>
  )
}

export default MainApp