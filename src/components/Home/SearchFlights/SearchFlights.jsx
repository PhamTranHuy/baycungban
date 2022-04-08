import FlightOptionBar from "./FlightOptionBar/FlightOptionBar"
import FlightSchedule from "./FlightSchedule/FlightSchedule"

function SearchFlights() {
    return (
        <div className="mt-40 px-8 pt-8 pb-12 bg-white rounded-xl">
            <FlightOptionBar />
            <FlightSchedule />
        </div>
    )
}

export default SearchFlights