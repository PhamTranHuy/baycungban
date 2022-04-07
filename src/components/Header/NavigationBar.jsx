import React from 'react'

function NavigationBar() {
  return (
    <div className="flex justify-between items-center font-semibold">
        <div className="mx-4">Promotion</div>
        <div className="mx-4">Flight Schedule</div>
        <div className="mx-4">About us</div>
        <div className="mx-4">Payment Guide</div>
    </div>
  )
}

export default NavigationBar