import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const FlightSearch = () => {

    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');
    const [flightAdults, setFlightAdults] = useState(1);
    const [flightChildren, setFlightChildren] = useState(0);
    const [flightInfants, setFlightInfants] = useState(0);
    const [cabinClass, setCabinClass] = useState('Economy');
    const [flightAdditionalInputs, setFlightAdditionalInputs] = useState('');

    const handleFlightsFormSubmit = () => {
        console.log('Flights form submitted successfully!');
    };

    return (
        <div>
            <div className='flex mt-8 justify-between items-center'>
                <div className='w-1/2'>
                    <label className='text-gray-700'>From</label>
                    <input
                        type='text'
                        className='w-full mt-2 p-2 border rounded'
                        placeholder='Enter departure location'
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                    />
                </div>
                <button className='flex items-center justify-center mt-8 border border-black rounded-full w-6 h-6'>
                    <Icon icon="tdesign:swap" width={20} />
                </button>
                <div className='w-1/2'>
                    <label className='text-gray-700'>Going to</label>
                    <input
                        type='text'
                        className='w-full mt-2 p-2 border rounded'
                        placeholder='Enter arrival location'
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex gap-x-8 mt-6'>
                <div className='w-1/2'>
                    <label className='text-gray-700'>Departure Date</label>
                    <input
                        type='date'
                        className='w-full mt-2 p-2 border rounded'
                        min={new Date().toISOString().split('T')[0]}
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                </div>
                <div className='w-1/2'>
                    <label className='text-gray-700'>Arrival Date</label>
                    <input
                        type='date'
                        className='w-full mt-2 p-2 border rounded'
                        min={new Date().toISOString().split('T')[0]}
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex gap-x-8 mt-6'>
                <div className='flex flex-col justify-between'>
                    <label className='text-gray-700'>Travellers & Cabin Class</label>
                    <div className='flex mt-2'>
                        <select
                            className='p-2 border rounded'
                            value={flightAdults}
                            onChange={(e) => setFlightAdults(parseInt(e.target.value))}
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                    {num} Adults
                                </option>
                            ))}
                        </select>
                        <select
                            className='ml-2 p-2 border rounded'
                            value={flightChildren}
                            onChange={(e) => setFlightChildren(parseInt(e.target.value))}
                        >
                            {[0, 1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                    {num} Children
                                </option>
                            ))}
                        </select>
                        <select
                            className='ml-2 p-2 border rounded'
                            value={flightInfants}
                            onChange={(e) => setFlightInfants(parseInt(e.target.value))}
                        >
                            {[0, 1, 2].map((num) => (
                                <option key={num} value={num}>
                                    {num} Infants
                                </option>
                            ))}
                        </select>
                        <select
                            className='ml-2 p-2 border rounded'
                            value={cabinClass}
                            onChange={(e) => setCabinClass(e.target.value)}
                        >
                            {['Economy', 'Business', 'First Class'].map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <label className='text-gray-700'>Additional Inputs</label>
                <input
                    type='text'
                    className='w-full mt-2 p-2 border rounded'
                    placeholder='Any additional preferences'
                    value={flightAdditionalInputs}
                    onChange={(e) => setFlightAdditionalInputs(e.target.value)}
                />
            </div>
            <div className='mt-6'>
                <button
                    className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600'
                    onClick={handleFlightsFormSubmit}
                >
                    Get Flights
                </button>
            </div>
        </div>
    )
}

export default FlightSearch