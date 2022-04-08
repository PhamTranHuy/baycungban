import React from 'react'
const DATE_ELEM = ['DEPARTURE', 'RETURN'];
function Date() {
    return (
        <div className="flex-center grow basis-1/2 ml-3
            border-[rgba(0, 0, 0, 0.1)] border
            rounded-2xl text-[#000000]">
            {DATE_ELEM.map((elem, i) => (
                <div key={i} className="grow py-4 px-5 rounded-2xl 
                    font-bold text-left
                    transition duration-300 ease-linear
                    hover:border-[#4D46FA]">
                    <div className="text-xs opacity-50">{elem}</div>
                    <div className="flex my-1 text-2xl text-[#4D46FA]">
                        Fri, 22 Mar, 2022
                        <img className="ml-2" src={process.env.PUBLIC_URL + '/assets/home/calendar.svg'} alt="" />
                    </div>
                    <div className="text-sm">
                        <button className="group font-bold opacity-50 hover:opacity-100">
                            <p className="group-hover:translate-y-[-4px]">Prev</p>
                            <div className="hidden h-[1px] w-full bg-black mt-[-3px] group-hover:block"></div>
                        </button>
                        <button className="group ml-4 font-bold opacity-50 hover:opacity-100">
                            <p className="group-hover:translate-y-[-4px]">Next</p>
                            <div className="hidden h-[1px] w-full bg-black mt-[-3px] group-hover:block"></div>
                        </button>
                    </div>
                </div>
            ))}
            {/* <div className="grow py-4 px-5 rounded-2xl
                font-bold text-left
                transition duration-300 ease-linear
                hover:border-[#4D46FA]">
                <div className="text-xs opacity-50">DEPARTURE</div>
                <div className="flex my-1 text-2xl text-[#4D46FA]">
                    <p>Fri, 22 Mar, 2022</p>
                    <img className="ml-2" src={process.env.PUBLIC_URL + '/assets/home/calendar.svg'} alt="" />
                </div>
                <div className="text-sm">
                    <button className="font-bold opacity-50 hover:opacity-100">Prev</button>
                    <button className="ml-4 font-bold opacity-50 hover:opacity-100">Next</button>
                </div>
            </div> */}
          
        </div>
    )
}

export default Date