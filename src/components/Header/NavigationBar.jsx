import clsx from 'clsx'
import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
    return (
        <div className="flex justify-between items-center text-sm">
            <button className="mx-4 font-semibold">Promotion</button>
            <NavLink to="/flight-schedule" className={({ isActive }) => (clsx(`mx-4 py-2 px-4 rounded-[100px]
                font-semibold 
                hover:bg-[#ffffff21]`,
                isActive && 'bg-[#ffffff21]'
                ))
            }>Flight Schedule</NavLink>
            <button className="mx-4 font-semibold">About us</button>
            <button className="mx-4 font-semibold">Payment Guide</button>
        </div>
    )
}

export default NavigationBar