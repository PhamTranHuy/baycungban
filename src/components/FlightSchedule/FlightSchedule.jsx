import axios from 'axios'
import { useEffect, useState } from 'react'
import ChangeFlightsBar from './ChangeFlightsBar/ChangeFlightsBar';
import FlightsInfo from './FlightsInfo/FlightsInfo';

const FLIGHTS_API = "https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a";
function FlightSchedule() {
    const [data, setData] = useState(null);
    useEffect(() => {
        console.log('useEffect')
        const getFlights = async () => {
            try {
                const response = await axios.get(FLIGHTS_API);
                console.log(response.data.Flights);
                setData(response.data.Flights);
            } catch (error) {
                console.log(error);
            }
        }
        getFlights();
    }, [])
    return (
        <div className="bg-[#f4f2f9] pb-[110px]">
            <ChangeFlightsBar />
            <FlightsInfo flights={data} />
        </div>
    )
}

export default FlightSchedule