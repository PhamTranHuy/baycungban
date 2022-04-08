import FlightOptionBar from "./FlightOptionBar/FlightOptionBar"
import FlightSchedule from "./FlightSchedule/FlightSchedule"

function SearchFlights() {
    return (
        <div className="absolute bottom-[12%] left-[10%] right-[10%] 
            home-max-w px-8 pt-8 pb-12 m-auto
            bg-white rounded-xl"
            style={{boxShadow: '0px 4px 30px rgba(77, 70, 250, 0.1)'}}>
            <FlightOptionBar />
            <FlightSchedule />
            <button className="absolute bottom-[-30px] right-[30px]
                flex justify-between items-center
                w-[245px] h-[60px] px-5 rounded-xl
                bg-[#4D46FA] text-lg text-white font-bold">
                Search Flights
                <img src={process.env.PUBLIC_URL + '/assets/home/search-button-arrow.svg'} alt="" />
            </button>
        </div>
    )
}

export default SearchFlights