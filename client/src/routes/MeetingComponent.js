import React, { useState } from 'react';
import CategoriesBar from '../components/CategoriesBar';
import Select from 'react-select';

const MeetingsComponent = () => {
	const [destination, setDestination] = useState(null);
	const [checkInDate, setCheckInDate] = useState('');
	const [checkOutDate, setCheckOutDate] = useState('');
	const [numOfPeople, setNumOfPeople] = useState(1);
	const [additionalDetails, setAdditionalDetails] = useState('');

	const destinations = [
		{ value: 'destination1', label: 'Destination 1' },
		{ value: 'destination2', label: 'Destination 2' },
		{ value: 'destination3', label: 'Destination 3' },
	];

	const handleSearchFlights = () => {
		console.log('Flight Search:', {
			destination: destination?.value,
			checkInDate,
			checkOutDate,
			numOfPeople,
			additionalDetails,
		});
	};

	const handleSearchPlaces = () => {
		console.log('Places Search:', {
			destination: destination?.value,
			checkInDate,
			checkOutDate,
			numOfPeople,
			additionalDetails,
		});
	};

	return (
		<>
			<CategoriesBar />
			<div className='p-4'>
				<form className='max-w-lg mx-auto bg-white p-6 rounded-md shadow-md'>
					<h2 className='text-2xl font-semibold mb-4'>Search Meetings</h2>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-700'>
							Destination
						</label>
						<Select
							value={destination}
							onChange={(selectedOption) => setDestination(selectedOption)}
							options={destinations}
							placeholder='Select Destination'
						/>
					</div>
					<div className='grid grid-cols-2 gap-4 mb-4'>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Check In Date
							</label>
							<input
								type='date'
								value={checkInDate}
								onChange={(e) => setCheckInDate(e.target.value)}
								className='mt-1 p-2 w-full border rounded-md'
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Check Out Date
							</label>
							<input
								type='date'
								value={checkOutDate}
								onChange={(e) => setCheckOutDate(e.target.value)}
								className='mt-1 p-2 w-full border rounded-md'
							/>
						</div>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-700'>
							Number of People
						</label>
						<input
							type='number'
							value={numOfPeople}
							onChange={(e) => setNumOfPeople(e.target.value)}
							className='mt-1 p-2 w-full border rounded-md'
						/>
					</div>
					<div className='mb-4'>
						<label className='block text-sm font-medium text-gray-700'>
							Additional Details
						</label>
						<textarea
							value={additionalDetails}
							onChange={(e) => setAdditionalDetails(e.target.value)}
							className='mt-1 p-2 w-full border rounded-md'
						/>
					</div>
					<div className='flex justify-between'>
						<button
							type='button'
							onClick={handleSearchFlights}
							className='bg-blue-600 text-white px-4 py-2 rounded'>
							Search Flights
						</button>
						<button
							type='button'
							onClick={handleSearchPlaces}
							className='bg-green-500 text-white px-4 py-2 rounded'>
							Search Places
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default MeetingsComponent;
