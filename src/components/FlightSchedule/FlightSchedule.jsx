import axios from 'axios'
import React, { useEffect } from 'react'
import ChangeFlightsBar from './ChangeFlightsBar/ChangeFlightsBar';

const FLIGHTS_API = "https://mocki.io/v1/ff3207e0-f250-4a1d-9240-b3dbffa8386a";
function FlightSchedule() {
    useEffect(() => {
        const getFlights = async () => {
            try {
                const response = await axios.get(FLIGHTS_API);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getFlights();
    }, [])
    return (
        <div className="bg-[#f4f2f9]">
            <ChangeFlightsBar />
        </div>
    )
}

export default FlightSchedule