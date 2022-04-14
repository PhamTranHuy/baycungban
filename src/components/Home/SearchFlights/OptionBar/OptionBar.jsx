import FlightTypesRadioForm from "./FlightTypesRadioForm/FlightTypesRadioForm"

function OptionBar() {
    return (
        <div className="flex items-center text-sm font-bold whitespace-pre">
        <FlightTypesRadioForm />
        <div className="mr-12 flex">
            <span className="text-[#4D46FA]">02</span> Adult,
            <span className="text-[#4D46FA]"> 01</span> Children
            <img className="ml-1" src={process.env.PUBLIC_URL + '/assets/home/down-arrow-svg.svg'} alt="" />
        </div>
        <div className="flex">
            <p>Business Class</p>
            <img className="ml-1" src={process.env.PUBLIC_URL + '/assets/home/down-arrow-svg.svg'} alt="" />
        </div>
    </div>
    )
}

export default OptionBar