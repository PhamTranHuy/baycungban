import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

function Footer() {
    const location = useLocation();
    return (
        <div className={clsx("w-full", 
            location.pathname === '/home' ? "fixed bottom-0" : "absolute bottom-0" 
        )}>
            <div className="flex justify-between 
                home-max-w m-auto py-10 
                text-black whitespace-pre tracking-widest text-sm">
                <div className="flex">
                    <div className="flex">
                        <img src={process.env.PUBLIC_URL + "/assets/footer/phone.svg"} alt="" />
                        <p> Call us: +84 908 02 02 58</p>
                    </div>
                    <div className="flex ml-7">
                        <img src={process.env.PUBLIC_URL + "/assets/footer/mail.svg"} alt="" />
                        <p> Email: chucinog@gmail.com</p>
                    </div>
                </div>
                <div className="flex-center">
                    <div className="">Follow us</div>
                    <div className="w-[40px] h-[1px] ml-[10px] bg-black" />
                    <img className="ml-[10px]" src={process.env.PUBLIC_URL + "/assets/footer/facebook.svg"} alt="" />
                    <img className="ml-[10px]" src={process.env.PUBLIC_URL + "/assets/footer/instagram.svg"} alt="" />
                </div>
            </div>
        </div>
    )
    }

export default Footer