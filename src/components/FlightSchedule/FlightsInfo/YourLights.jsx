import { useLayoutEffect, useState } from "react"
import { formatPrice } from "./Flight";
const LOCATION_CODE = {
    'SGN': 'Ho Chi Minh',
    'HPH': 'Hai Phong'
}
function YourLights({ choseLights }) {
    const [subtotal, setSubtotal] = useState(0);
    
    useLayoutEffect(() => {
        const subtotal = choseLights.reduce((a, b) => {
            const total = a + b.TotalPrice;
            console.log(total);
            return total;
        }, 0);
        setSubtotal(subtotal);
    }, [choseLights])
    const formatDate = (startTime) => {
        const date = new Date(startTime)
        return date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"}) 
    }
    return (
        <div className="ml-2 pt-4 bg-white rounded-xl text-sm overflow-hidden">
            <div className="text-left border-b">
                <h3 className="font-semibold px-4 pb-4">YOUR LIGHTS</h3>
            </div>
            <div className="px-4">
                {choseLights && choseLights.map((item, i) => (
                    <div key={i} className="group py-4 border-t first-of-type:border-none">
                        <div className="flex items-center font-semibold">
                            <div className="w-[30px] h-[30px] p-1 rounded-full 
                                bg-grey text-white
                                group-hover:bg-purple">
                                <p>{++i}</p>
                            </div>
                            <div className="text-left ml-2">
                                <div className="font-normal">{formatDate(item.StartDate)}</div>
                                <div>{`${LOCATION_CODE[item.StartPoint]} - ${LOCATION_CODE[item.EndPoint]}`}</div>
                            </div>
                        </div>
                        <div className="hidden">detail</div>
                    </div>
                ))}
            </div>
            <div className="bg-[#f8f8f8] text-left p-4">
                <p>Subtotal</p>
                <p className="font-semibold text-[#F06336]">{formatPrice(subtotal)} vnd</p>
            </div>
        </div>
    )
}

export default YourLights