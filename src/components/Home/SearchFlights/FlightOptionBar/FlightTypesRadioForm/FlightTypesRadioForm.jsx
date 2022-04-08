import React, { useState } from 'react'
const BUTTONS = [
    {
        text: 'One way / Round trip',
        value: true,
    }, {
        text: 'Multi-city',
        value: false
    }
]
function FlightTypesRadioForm() {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div className="flex-center mr-6">
            {BUTTONS.map((button, index) => (
                <button key={index} className="flex-center mr-5 font-bold" onClick={() => {setActiveIndex(index)}}>
                    <div className="w-6 h-6 mr-1 bg-[#F4F2F9] rounded-full" style={
                        activeIndex === index ? { 
                            border: '6.5px solid #4D46FA',
                            background: '#fff'
                        } : {}
                    } />
                    <div>{button.text}</div>
                </button>
            ))}
        </div>
    )
}

export default FlightTypesRadioForm