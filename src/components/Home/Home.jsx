import SearchFlights from "./SearchFlights/SearchFlights"

function Home() {
    return (
        <div className="h-screen bg-no-repeat" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/home/background-img.png"})`,
            backgroundSize: "100% 82%"
        }}>
            <div className="relative m-auto home-max-w h-full">
                <div className="absolute bottom-1/2
                    m-auto text-left text-7xl font-light">
                    <h1>Hello!</h1>
                    <h1>Where are</h1>
                    <h1>
                        you <span className="text-[#4D46FA] font-semibold">flying</span> to ...
                    </h1>
                </div>
                <SearchFlights />
                <div className="fixed -z-10
                    w-3/4 h-[150px] top-[86%] right-0
                    h-full bg-[#F4F2F9]" />
            </div>
        </div>
    )
}

export default Home