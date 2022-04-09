import { useState } from 'react'
import Filter from "./Filter"
import Flight from "./Flight"
import YourLights from "./YourLights"

function FlightsInfo({ flights }) {
    const [choseLights, setChoseLights] = useState([]);
    const handleChoose = (flight) => {
        console.log(flight);
        setChoseLights(state => state.concat(flight));
    }
    return (
        <div className="flex flight-schedule-max-w m-auto pt-4">
            <div className="grow">
                <Filter />
                {flights && flights.map((item, i) => (
                    <Flight key={i} flight={item} onChoose={handleChoose} />
                ))}
            </div>
            <div className="basis-[24%]">
                <YourLights choseLights={choseLights} />
            </div>
        </div>
    )
}

export default FlightsInfo