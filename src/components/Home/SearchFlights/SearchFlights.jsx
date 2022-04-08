import FlightOptionBar from "./FlightOptionBar/FlightOptionBar"
import FlightSchedule from "./FlightSchedule/FlightSchedule"

function SearchFlights() {
    return (
        <div className="absolute bottom-[12%] left-[12rem] right-[12rem] px-8 pt-8 pb-12 bg-white rounded-xl"
            style={{boxShadow: '0px 4px 30px rgba(77, 70, 250, 0.1)'}}>
            <FlightOptionBar />
            <FlightSchedule />
        </div>
    )
}

export default SearchFlights