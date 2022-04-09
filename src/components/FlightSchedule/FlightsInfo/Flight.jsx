import clsx from 'clsx';
import { useState } from 'react'
import FlightDetail from './Flight/FlightDetail';
import MiniSchedule from './Flight/MiniSchedule'

export const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const AIRLINES_NAME = {
    'VJ': 'VIETJET AIR',
    'VN': 'VIETNAM AIRLINE',
    'QH': 'BAMBOO AIRWAYS'
}
function Flight({ flight, onChoose }) {
    const [flightDetail, setFlightDetail] = useState(false);
    const toggleFlightDetail = () => {
        setFlightDetail((state) => !state);
    }
    const getPrice = () => {
        const price = flight.ChargeAdult + flight.ChargeChild + flight.ChargeInfant +
            flight.FeeAdult + flight.FeeChild + flight.FeeInfant +
            flight.PriceAdult + flight.PriceChild + flight.PriceInfant +
            flight.TaxAdult + flight.TaxChild + flight.TaxInfant;
        const roundPrice = Math.round(price/1000)*1000;
        //add total price to convenient to show another component
        flight.TotalPrice = roundPrice;

        return `${formatPrice(roundPrice)} vnd`;
    }

    return (
        <div className="bg-white rounded-xl p-4 mb-[10px]">
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center min-w-[185px]">
                    <div className="w-[30px] h-[30px] flex-center border rounded-md">
                        <img className="w-5 h-auto" src={process.env.PUBLIC_URL + `/assets/flight-schedule/${flight.AirlineCode}.png`} alt="" />
                    </div>
                    <div className="ml-3 font-semibold tracking-widest">{AIRLINES_NAME[flight.AirlineCode]}</div>
                </div>
                <MiniSchedule startTime={flight.StartDate} endTime={flight.EndDate} 
                    startPoint={flight.StartPoint} endPoint={flight.EndPoint}
                    duration={flight.Duration} />
                <div>
                    {flight.Carryon !== '' && 
                    <div className="flex-center mb-2">
                        <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/bag.svg'} alt="" />
                        <div className="ml-2">Baggage <span className="text-purple font-semibold">{flight.Carryon}</span></div>
                    </div>}
                    {flight.GroupClass === "Business Flex" && 
                    <div className="flex-center">
                        <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/meal.svg'} alt="" />
                        <div className="ml-2">In-flight <span className="text-purple font-semibold">Meal</span></div>
                    </div>}
                </div>
                <div>
                    {flight.Promo && <div className="mb-2 text-grey line-through">{getPrice()}</div>}
                    <div className="text-[#F06336] font-semibold">{getPrice()}</div>
                </div>
                <button className="h-fit px-4 py-[6px] rounded-xl 
                font-semibold text-[#F06336] bg-[#fef0eb]
                hover:text-white hover:bg-[#F06336]" onClick={() => {onChoose(flight)}}>Choose</button>
            </div>
            <div className="flex mt-7 text-xs font-semibold text-grey">
                <div className={clsx("hover:text-purple hover:underline underline-offset-4",
                    flightDetail && "text-purple underline underline-offset-4"
                    )} onClick={toggleFlightDetail}>FLIGHT DETAIL</div>
                <div className="ml-7 hover:text-purple hover:underline underline-offset-4">FARE INFO</div>
            </div>
            <div className={clsx(!flightDetail && "hidden")}>
                <FlightDetail flight={flight} />
            </div>
        </div>
    )
}

export default Flight