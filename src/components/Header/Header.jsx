import { NavLink } from 'react-router-dom'
import NavigationBar from './NavigationBar'

function Header() {
    return (
        <div className="absolute py-10 w-full">
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
                <button className="py-2.5 px-4 rounded-xl bg-[#4D46FA] text-white font-semibold">Booking now</button>
            </div>
        </div>
    )
}

export default Header