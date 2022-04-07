import FlightTypesRadioForm from "./FlightTypesRadioForm/FlightTypesRadioForm"

function SearchFlights() {
    return (
        <div className="mt-40 px-12 pt-6 pb-12 bg-white rounded-xl">
            <div className="flex items-center text-sm font-bold whitespace-pre">
                <FlightTypesRadioForm />
                <div className="mr-12 flex">
                    <span>02</span> Adult,
                    <span> 01</span> Children
                    <img className="ml-1" src={process.env.PUBLIC_URL + '/assets/home/down-arrow-svg.svg'} alt="" />
                </div>
                <div className="flex">
                    <p>Business Class</p>
                    <img className="ml-1" src={process.env.PUBLIC_URL + '/assets/home/down-arrow-svg.svg'} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchFlights