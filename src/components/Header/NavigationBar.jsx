import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className="flex justify-between items-center">
        <button className="mx-4 font-semibold">Promotion</button>
        <NavLink to="/flight-schedule" className="mx-4 py-2 px-4 rounded-[100px]
          font-semibold 
          hover:bg-[#ffffff4a]">Flight Schedule</NavLink>
        <button className="mx-4 font-semibold">About us</button>
        <button className="mx-4 font-semibold">Payment Guide</button>
    </div>
  )
}

export default NavigationBar