import Filter from "./Filter"

function FlightsInfo() {
    return (
        <div className="flex flight-schedule-max-w m-auto">
            <div className="grow">
                <Filter />
            </div>
            <div className="basis-[28%]"></div>
        </div>
    )
}

export default FlightsInfo