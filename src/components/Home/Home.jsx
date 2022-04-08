import SearchFlights from "./SearchFlights/SearchFlights"

function Home() {
    return (
        <div className="h-screen bg-no-repeat" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/home/background-img.png"})`,
            backgroundSize: "100% 82%"
        }}>
            <div className="absolute bottom-1/2 left-[10%] 
                home-max-w m-auto text-left text-7xl font-light">
                <h1 className="a">Hello!</h1>
                <h1 className="a">Where are</h1>
                <h1 className="a">
                    you <span className="text-[#4D46FA] font-semibold">flying</span> to ...
                </h1>
            </div>
            <SearchFlights />
            <div className="fixed -z-10
                h-[150px] top-[86%] right-0 left-[300px] 
                h-full bg-[#F4F2F9]" />
        </div>
    )
}

export default Home