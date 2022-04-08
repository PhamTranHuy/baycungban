
function YourLights({ choseLights }) {
    return (
        <div className="ml-2 pt-4 bg-white rounded-xl text-sm overflow-hidden">
            <div className="text-left border-b">
                <h3 className="font-semibold px-4 pb-4">YOUR LIGHTS</h3>
            </div>
            <div className="px-4">
                {choseLights && choseLights.map((item, i) => (
                    <div key={i} className="py-4 border-t first-of-type:border-none">
                        <div className="flex items-center font-semibold">
                            <div className="w-[30px] h-[30px] p-1 rounded-full bg-grey text-white"><p>{++i}</p></div>
                            <div className="text-left ml-2">
                                <div className="font-normal">Fri, 11 Feb, 2022</div>
                                <div>Da Nang - Ho Chi Minh</div>
                            </div>
                        </div>
                        <div className="hidden">detail</div>
                    </div>
                ))}
            </div>
            <div className="bg-[#f8f8f8] text-left p-4">
                <p>Subtotal</p>
                <p className="font-semibold">1,322,000 vnd</p>
            </div>
        </div>
    )
}

export default YourLights