import Date from "./Date"
import Location from "./Location"

function FlightSchedule() {
    return (
        <div className="flex-center py-5">
            <Location />
            <Date />
        </div>
    )
}

export default FlightSchedule