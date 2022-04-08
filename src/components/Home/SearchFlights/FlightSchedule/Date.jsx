import React from 'react'

function Date() {
    return (
        <div className="flex-center grow ml-5 border-[rgba(0, 0, 0, 0.1)] border-2 rounded-2xl">
            <div className="grow py-4 px-5 rounded-2xl
                font-bold text-left
                transition duration-300 ease-linear
                hover:border-[#4D46FA]">
                <div className="text-xs text-[#040404b3]">DEPARTURE</div>
                <div className="flex my-1 text-2xl text-[#4D46FA]">
                    <p>Fri, 22 Mar, 2022</p>
                    <img className="ml-2" src={process.env.PUBLIC_URL + '/assets/home/calendar.svg'} alt="" />
                </div>
                <div className="text-sm text-[#000]">Quang Nam, Viet Nam</div>
            </div>
            <div className="grow py-4 px-5 rounded-2xl 
                font-bold text-left
                transition duration-300 ease-linear
                hover:border-[#4D46FA]">
                <div className="text-xs text-[#040404b3]">RETURN</div>
                <div className="flex my-1 text-2xl text-[#4D46FA]">
                    Fri, 22 Mar, 2022
                    <img className="ml-2" src={process.env.PUBLIC_URL + '/assets/home/calendar.svg'} alt="" />
                </div>
                <div className="text-sm text-[#000]">Viet Nam</div>
            </div>
        </div>
    )
}

export default Date