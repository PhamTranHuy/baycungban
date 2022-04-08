
function MiniSchedule({ startTime, endTime, startPoint, endPoint, duration }) {
    const format24HourTime = (time) => {
        const date = new Date(time)
        return date.toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false})
    }
    const toHoursAndMinutes = (totalMinutes) => {
        const padTo2Digits = (num) => {
            return num.toString().padStart(2, '0');
        }
        const minutes = totalMinutes % 60;
        const hours = Math.floor(totalMinutes / 60);
        return `${hours}h ${padTo2Digits(minutes)}m`;
    }
    return (
        <div className="flex items-center">
            <div className="font-semibold">
                <div className="mb-1">{format24HourTime(startTime)}</div>
                <div className="text-[10px] bg-[#eeedff] rounded-[100px]">{startPoint}</div>
            </div>
            <div className="mx-4">
                <div>{toHoursAndMinutes(duration)}</div>
                <div className="flex">
                    <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/start-icon.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/line.svg'} alt="" />
                    <img src={process.env.PUBLIC_URL + '/assets/flight-schedule/mini-schedule/end-icon.svg'} alt="" />
                </div>
                <div className="text-xs">Direct</div>
            </div>
            <div className="font-semibold">
                <div className="mb-1">{format24HourTime(endTime)}</div>
                <div className="text-[10px] bg-[#eeedff] rounded-[100px]">{endPoint}</div>
            </div>
        </div>
    )
}

export default MiniSchedule