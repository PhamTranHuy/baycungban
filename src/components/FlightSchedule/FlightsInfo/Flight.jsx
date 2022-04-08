import React from 'react'
import MiniSchedule from './Flight/MiniSchedule'

const FLIGHT = {
    AirlineCode: "VJ",
}
function Flight() {
    return (
        <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center text-sm">
                <div className="flex-center">
                    <div className="w-[30px] h-[30px] flex-center border rounded-md">
                        <img className="w-5 h-auto" src={process.env.PUBLIC_URL + '/assets/flight-schedule/VJ.png'} alt="" />
                    </div>
                    <div className="ml-3 font-semibold tracking-widest">VIETNAM AIRLINES</div>
                </div>
                <MiniSchedule />
                <div>
                    <div className="flex-center mb-2">
                        <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/bag.svg'} alt="" />
                        <div className="ml-2">Baggage <span className="text-purple font-semibold">20kg</span></div>
                    </div>
                    <div className="flex-center">
                        <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/meal.svg'} alt="" />
                        <div className="ml-2">In-flight <span className="text-purple font-semibold">Meal</span></div>
                    </div>
                </div>
                <div>
                    <div className="mb-2 text-grey line-through">1,322,000 vnd</div>
                    <div className="text-[#F06336] font-semibold">1,322,000 vnd</div>
                </div>
                <button className="h-fit px-4 py-1 rounded-xl font-semibold text-[#F06336] bg-[#fef0eb]">Choose</button>
            </div>
            <div>
                <div>FLIGHT DETAIL</div>
                <div>FARE INFO</div>
            </div>
        </div>
    )
}

export default Flight