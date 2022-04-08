
function MiniSchedule() {
    return (
        <div className="flex items-center">
            <div className="font-bold">
                <div className="mb-1">21:40</div>
                <div className="text-[10px] bg-[#eeedff] rounded-[100px]">DAD</div>
            </div>
            <div className="mx-4">
                <div>1h 30m</div>
                <div className="flex">
                    <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/start-icon.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/line.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/end-icon.svg'} alt="" />
                </div>
                <div className="text-xs">Direct</div>
            </div>
            <div className="font-bold">
                <div className="mb-1">23:10</div>
                <div className="text-[10px] bg-[#eeedff] rounded-[100px]">DAD</div>
            </div>
        </div>
    )
}

export default MiniSchedule