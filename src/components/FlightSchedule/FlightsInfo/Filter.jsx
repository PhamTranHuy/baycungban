
const FILTERS = ['Transit', 'Time', 'Airline', 'Low Price'];
function Filter() {
    return (
        <div className="flex justify-between items-center 
            ml-auto mb-1 
            max-w-[552px] w-full text-xs"
        >
            <h3 className="mr-3 font-bold opacity-50">FILTER</h3>
            {FILTERS.map((filter, i) => (
                <div key={i} className="flex justify-between items-center grow 
                    ml-1 px-4 py-2 rounded-xl
                    bg-white"
                >
                    <p>{filter}</p>
                    <img src={process.env.PUBLIC_URL + '/assets/home/down-arrow-svg.svg'} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Filter