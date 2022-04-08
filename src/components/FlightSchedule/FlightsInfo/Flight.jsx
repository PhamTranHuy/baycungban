import React from 'react'
import MiniSchedule from './Flight/MiniSchedule'

const FLIGHT = {
    AirlineCode: "VJ",
}
function Flight() {
    return (
        <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between text-sm">
                <div className="flex-center">
                    <div className="w-[30px] h-[30px] flex-center border rounded-md">
                        <img className="w-5 h-auto" src={process.env.PUBLIC_URL + '/assets/flight-schedule/VJ.png'} alt="" />
                    </div>
                    <div className="ml-3 font-bold tracking-widest">VIETNAM AIRLINES</div>
                </div>
                <MiniSchedule />
                <div>
                    <div className="flex-center mb-2">
                        <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/bag.svg'} alt="" />
                        <div>Baggage <span className="text-purple font-bold">20kg</span></div>
                    </div>
                    <div className="flex-center">
                        <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/meal.svg'} alt="" />
                        <div>In-flight <span className="text-purple font-bold">Meal</span></div>
                    </div>
                </div>
                <div>
                    <div>gia truoc sale</div>
                    <div>gia sau sale</div>
                </div>
                <button>Choose</button>
            </div>
            <div>
                <div>FLIGHT DETAIL</div>
                <div>FARE INFO</div>
            </div>
        </div>
    )
}

export default Flight