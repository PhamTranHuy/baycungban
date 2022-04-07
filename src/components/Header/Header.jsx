import NavigationBar from './NavigationBar'

function Header() {
    return (
        <div className="fixed flex justify-evenly w-full py-10">
            <div className="flex text-2xl leading-10 font-bold">
                <h3>Baycungban</h3>
                <div className="flex justify-center items-center">
                <img src={process.env.PUBLIC_URL + '/assets/header/vietnam.png'} 
                    alt="" 
                    className="w-5 h-5 mx-3" />
                <img src={process.env.PUBLIC_URL + '/assets/header/united-states.png'} 
                    alt="" 
                    className="w-5 h-5" />
            </div>
            </div>
            <NavigationBar />
            <button className="py-2.5 px-4 rounded-xl bg-[#4D46FA] text-white font-semibold">Booking now</button>
        </div>
    )
}

export default Header