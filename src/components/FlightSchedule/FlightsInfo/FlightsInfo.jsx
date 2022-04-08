import Filter from "./Filter"
import Flight from "./Flight"

function FlightsInfo({ flights }) {
    console.log(flights);
    return (
        <div className="flex flight-schedule-max-w m-auto">
            <div className="grow">
                <Filter />
                {flights && flights.map((item, i) => (
                    <Flight key={i} flight={item} />
                ))}
            </div>
            <div className="basis-1/5"></div>
        </div>
    )
}

export default FlightsInfo