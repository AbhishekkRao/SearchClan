import React, { useState } from 'react';
import FlightSearch from './FlightSearch';
import StaySearch from './StaySearch';

const SearchForm = () => {
    const [stayFormVisible, setStayFormVisible] = useState(true);
    const [flightsFormVisible, setFlightsFormVisible] = useState(false);

    const handleStayClick = () => {
        setStayFormVisible(true);
        setFlightsFormVisible(false);
    };

    const handleFlightsClick = () => {
        setFlightsFormVisible(true);
        setStayFormVisible(false);
    };

    return (
        <div className='flex justify-center'>
            <div className='bg-white bg-opacity-50 w-1/2 rounded-3xl p-10 my-5'>
                <div className='gap-x-5 flex'>
                    <span
                        className={`text-blue-900 cursor-pointer ${stayFormVisible ? 'border-b-2 border-blue-900' : ''
                            }`}
                        onClick={handleStayClick}
                    >
                        Stay
                    </span>
                    <span
                        className={`text-blue-900 cursor-pointer ${flightsFormVisible ? 'border-b-2 border-blue-900' : ''
                            }`}
                        onClick={handleFlightsClick}
                    >
                        Flights
                    </span>
                </div>

                {stayFormVisible && (
                    <StaySearch />
                )}

                {flightsFormVisible && (
                    <FlightSearch />
                )}
            </div>
        </div>
    );
};

export default SearchForm;