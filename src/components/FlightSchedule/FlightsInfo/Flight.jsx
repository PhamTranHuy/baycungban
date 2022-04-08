import React from 'react'

const FLIGHT = {
    AirlineCode: "VJ",
}
function Flight() {
    return (
        <div className="bg-white rounded-xl p-4">
            <div className="flex text-sm">
                <div className="flex-center">
                    <div className="w-[30px] h-[30px] flex-center border rounded-md">
                        <img className="w-5 h-auto" src={process.env.PUBLIC_URL + '/assets/flight-schedule/VJ.png'} alt="" />
                    </div>
                    <div className="ml-3 font-bold tracking-widest">VIETNAM AIRLINES</div>
                </div>
                <div>
                    <div>
                        <div>21:40</div>
                        <div>DAD</div>
                    </div>
                    <div>
                        <div>1h 30m</div>
                        <div>horizontal line</div>
                        <div>Direct</div>
                    </div>
                    <div>
                        <div>23:10</div>
                        <div>DAD</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>icon</div>
                        <div>Baggage 20kg</div>
                    </div>
                    <div>
                        <div>icon</div>
                        <div>In-flight Meal </div>
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