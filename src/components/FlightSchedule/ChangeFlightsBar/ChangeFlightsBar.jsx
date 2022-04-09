import React from 'react'

function ChangeFlightsBar() {
    return (
        <div className="w-full py-5 bg-white">
            <div className="flex justify-between flight-schedule-max-w m-auto">
                <div className="flex items-center">
                    <div>
                        <h4 className="text-base font-bold text-[#4D46FA]">Da Nang (DAD)</h4>
                        <p className="text-xs">Fri, 22 Mar, 2022</p>
                    </div>
                    <div className="mx-16">
                        <img className="mr-[5px] mb-[-1px] opacity-30" src={process.env.PUBLIC_URL + '/assets/home/left-arrow.svg'} alt="" />
                        <img className="ml-[5px] mt-[-1px] opacity-30" src={process.env.PUBLIC_URL + '/assets/home/right-arrow.svg'} alt="" />
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#4D46FA]">Ho Chi Minh (SGN)</h4>
                        <p className="text-xs">Fri, 22 Mar, 2022</p>
                    </div>
                </div>
                <div className="flex items-center text-sm font-bold whitespace-pre">
                    <div className="px-4">Round-trip</div>
                    <div className="px-4 border-x border-[#dcdae1]">
                        <div className="flex">
                            <span className="text-[#4D46FA]">02</span> Adult,
                            <span className="text-[#4D46FA]"> 01</span> Children
                        </div>
                    </div>
                    <div className="px-4">Business Class</div>
                </div>
            <button className="flex-center px-4 py-3 rounded-xl font-bold bg-[#F06336] text-white text-sm">
                Change Flights
                <img className="ml-3" src={process.env.PUBLIC_URL + '/assets/flight-schedule/search.svg'} alt="" />
            </button>
            </div>
        </div>
    )
}

export default ChangeFlightsBar