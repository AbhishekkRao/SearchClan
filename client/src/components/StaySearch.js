import React, { useState } from 'react';

const StaySearch = () => {

    const [destination, setDestination] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [additionalInputs, setAdditionalInputs] = useState('');

    const handleStayFormSubmit = () => {
        console.log('Stay form submitted successfully!');
    };

    return (
        <div>
            <div className='mt-8'>
                <label className='text-gray-700'>Destination</label>
                <input
                    type='text'
                    className='w-full mt-2 p-2 border rounded'
                    placeholder='Enter your destination'
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
            </div>
            <div className='flex gap-x-8 mt-6'>
                <div className='w-1/2'>
                    <label className='text-gray-700'>Check In</label>
                    <input
                        type='date'
                        className='w-full mt-2 p-2 border rounded'
                        min={new Date().toISOString().split('T')[0]}
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                    />
                </div>
                <div className='w-1/2'>
                    <label className='text-gray-700'>Check Out</label>
                    <input
                        type='date'
                        className='w-full mt-2 p-2 border rounded'
                        min={new Date().toISOString().split('T')[0]}
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex gap-x-8 mt-6'>
                <div className=''>
                    <label className='text-gray-700'>Rooms & Guests</label>
                    <div className='flex mt-2'>
                        <select
                            className='p-2 border rounded'
                            value={rooms}
                            onChange={(e) => setRooms(parseInt(e.target.value))}
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                    {num} Rooms
                                </option>
                            ))}
                        </select>
                        <select
                            className='ml-2 p-2 border rounded'
                            value={adults}
                            onChange={(e) => setAdults(parseInt(e.target.value))}
                        >
                            {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                    {num} Adults
                                </option>
                            ))}
                        </select>
                        <select
                            className='ml-2 p-2 border rounded'
                            value={children}
                            onChange={(e) => setChildren(parseInt(e.target.value))}
                        >
                            {[0, 1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                    {num} Children
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
                    value={additionalInputs}
                    onChange={(e) => setAdditionalInputs(e.target.value)}
                />
            </div>
            <div className='mt-6'>
                <button
                    className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600'
                    onClick={handleStayFormSubmit}
                >
                    Take me there!
                </button>
            </div>
        </div>
    )
}

export default StaySearch