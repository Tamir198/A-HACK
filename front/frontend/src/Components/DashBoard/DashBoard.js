import React from 'react'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card' 
const DashBoard = () => {
  return (
    <div>
      <NavBar/>
      <div className='card-section'>
        <Card title="Graph 1"/>
        <Card  title="Graph 2"/>
        <Card  title="Graph 3"/>
      </div>
    </div>
  )
}

export default DashBoard