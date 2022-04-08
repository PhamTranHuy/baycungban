import clsx from 'clsx';
import { NavLink, useLocation } from 'react-router-dom'
import NavigationBar from './NavigationBar'

function Header() {
    const location = useLocation();
    return (
        <div className={clsx("absolute w-full", 
            location.pathname !== '/home' ? "py-6 bg-[#4D46FA] text-white" : "py-10 bg-transparent text-black")}>
            <div className="home-max-w m-auto flex justify-between w-full">
                <div className="flex text-2xl leading-10 font-bold">
                    <NavLink to="/home"><h3>Baycungban</h3></NavLink>
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
                <button className={clsx(
                    "py-2.5 px-4 rounded-xl bg-[#4D46FA] text-white font-semibold",
                    location.pathname !== '/home' ? "bg-white text-[#4D46FA]" : "bg-[#4D46FA] text-white"
                )}>Booking now</button>
            </div>
        </div>
    )
}

export default Header