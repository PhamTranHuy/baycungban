import React from 'react'

function Header() {
    return (
        <div className="fixed flex justify-evenly w-full py-10">
            <div className="text-2xl font-bold">Baycungban</div>
            <div className="flex justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/assets/header/vietnam.png'} 
                    alt="" 
                    className="w-5 h-5" />
                <img src={process.env.PUBLIC_URL + '/assets/header/united-states.png'} 
                    alt="" 
                    className="w-5 h-5" />
            </div>
            <div>navigation-bar</div>
            <button className="py-2.5 px-4 rounded-xl bg-[#4D46FA] text-white font-semibold">Booking now</button>
        </div>
    )
}

export default Header