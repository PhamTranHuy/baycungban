import FlightOptionBar from "./FlightOptionBar/FlightOptionBar"
import FlightTimeAndPlace from "./FlightTimeAndPlace/FlightTimeAndPlace"

function SearchFlights() {
    return (
        <div className="mt-40 px-8 pt-8 pb-12 bg-white rounded-xl">
            <FlightOptionBar />
            <FlightTimeAndPlace />
        </div>
    )
}

export default SearchFlights