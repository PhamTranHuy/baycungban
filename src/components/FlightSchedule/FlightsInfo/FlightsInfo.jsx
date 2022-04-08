import Filter from "./Filter"
import Flight from "./Flight"

function FlightsInfo() {
    return (
        <div className="flex flight-schedule-max-w m-auto">
            <div className="grow">
                <Filter />
                <Flight />
            </div>
            <div className="basis-1/5"></div>
        </div>
    )
}

export default FlightsInfo