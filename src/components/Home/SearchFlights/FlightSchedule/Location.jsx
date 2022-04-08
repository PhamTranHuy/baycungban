function Location() {
    return (
        <div className="flex-center grow basis-1/2 h-[100px] mr-3">
            <div className="grow basis-2/5 py-4 px-5 rounded-2xl
                border-[rgba(0, 0, 0, 0.1)] border
                font-bold text-left
                transition duration-300 ease-linear
                hover:border-[#4D46FA] hover:border-2">
                <div className="text-xs text-[#040404b3]">FROM</div>
                <div className="my-1 text-2xl text-[#4D46FA]">Da Nang</div>
                <div className="text-sm text-[#000]">Quang Nam, Viet Nam</div>
            </div>
            {/* <div className="flex-center w-[60px] h-[60px] rounded-full"> */}
            <div className="mx-2">
                <img className="mr-[5px] mb-[-1px]" src={process.env.PUBLIC_URL + '/assets/home/left-arrow.svg'} alt="" />
                <img className="ml-[5px] mt-[-1px]" src={process.env.PUBLIC_URL + '/assets/home/right-arrow.svg'} alt="" />
            </div>
            {/* </div> */}
            <div className="grow basis-2/5 py-4 px-5 rounded-2xl 
                border-[rgba(0, 0, 0, 0.1)] border
                font-bold text-left
                transition duration-300 ease-linear
                hover:border-[#4D46FA] hover:border-2">
                <div className="text-xs text-[#040404b3]">TO</div>
                <div className="my-1 text-2xl text-[#4D46FA]">Ho Chi Minh</div>
                <div className="text-sm text-[#000]">Viet Nam</div>
            </div>
        </div>
    )
}

export default Location