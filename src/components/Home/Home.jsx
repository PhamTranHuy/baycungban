
function Home() {
    return (
        <div className="h-screen px-48 bg-no-repeat" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/home/background-img.png"})`,
            backgroundSize: "100% 85%"
        }}>
            <div className="pt-[17%] text-left text-7xl font-light">
                <h1 className="a">Hello!</h1>
                <h1 className="a">Where are</h1>
                <h1 className="a">
                    you <span className="text-[#4D46FA]">flying</span> to ...
                </h1>
            </div>
        </div>
    )
}

export default Home