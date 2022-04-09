import { format24HourTime, toHoursAndMinutes } from './MiniSchedule'

const LOCATION_CODE = {
    'SGN': {
        City: 'Ho Chi Minh',
        Airport: 'Tansonnhat Intl'
    }, 
    'HPH': {
        City:'Hai Phong',
        Airport: 'Hai Phong Airport'
    }
}
function FlightDetail({ flight }) {
    const formatDate = (date) => {
        const decodeDate = new Date(date);
        const day = decodeDate.toLocaleString('en-us', { day:"numeric" });
        const month = decodeDate.toLocaleString('en-us', { month: 'short' });
        return `${day} ${month}`;
    }
    return (
        <div className="py-3">
            <div>
                <div className="flex text-sm">
                    <div className="flex justify-between flex-col h-[176px] font-semibold">
                        <div>
                            {format24HourTime(flight.StartDate)}
                            <p className="font-normal text-xs">{formatDate(flight.StartDate)}</p>
                        </div>
                        <div className="font-normal">{toHoursAndMinutes(flight.Duration)}</div>
                        <div>
                            {format24HourTime(flight.EndDate)}
                            <p className="font-normal text-xs">{formatDate(flight.EndDate)}</p>
                        </div>
                    </div>
                    <div className="mx-4 pt-1">
                        <div className="flex-center flex-col">
                            <img className="w-[7px]" src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/start-icon.svg'} alt="" />
                            <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/vertical-line.svg'} alt="" />
                            <img className="w-[7px]" src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/end-icon.svg'} alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between flex-col font-semibold">
                        <div className="">
                            {`${LOCATION_CODE[flight.StartPoint].City} (${flight.StartPoint})`}
                            <p className="text-xs font-normal">{LOCATION_CODE[flight.StartPoint].Airport}</p>
                        </div>
                        <div className="">
                            {`${LOCATION_CODE[flight.EndPoint].City} (${flight.EndPoint})`}
                            <p className="text-xs font-normal">{LOCATION_CODE[flight.EndPoint].Airport}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default FlightDetail