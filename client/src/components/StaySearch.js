import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const StaySearch = ({ fontColor, buttonColor }) => {
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
		<div className={`${fontColor}`}>
			<div className='mt-6'>
				<label className=''>Destination</label>
				<span className='flex flex-col items-end mt-2'>
					<input
						type='text'
						className='w-full h-14 p-2 border rounded'
						placeholder='Enter your destination'
						value={destination}
						onChange={(e) => setDestination(e.target.value)}
					/>
					<Icon
						icon='mdi:location'
						height={26}
						color='#1345AA'
						className='relative -top-10 -left-2 z-10'
						tabIndex={-1}
					/>
				</span>
			</div>
			<div className='flex gap-x-8'>
				<div className='w-1/2'>
					<label className=''>Check In</label>
					<input
						type='date'
						className='w-full h-14 mt-2 p-2 border rounded'
						min={new Date().toISOString().split('T')[0]}
						value={checkInDate}
						onChange={(e) => setCheckInDate(e.target.value)}
					/>
				</div>
				<div className='w-1/2'>
					<label className=''>Check Out</label>
					<input
						type='date'
						className='w-full h-14 mt-2 p-2 border rounded'
						min={new Date().toISOString().split('T')[0]}
						value={checkOutDate}
						onChange={(e) => setCheckOutDate(e.target.value)}
					/>
				</div>
			</div>
			<div className='mt-6'>
				<div>
					<label className=''>Rooms & Guests</label>
				</div>
				<div className='flex mt-2 gap-x-2 h-14'>
					<select
						className='w-1/3 p-2 border rounded'
						value={rooms}
						onChange={(e) => setRooms(parseInt(e.target.value))}>
						{[1, 2, 3, 4, 5].map((num) => (
							<option
								key={num}
								value={num}>
								{num} Rooms
							</option>
						))}
					</select>
					<select
						className='w-1/3 p-2 border rounded'
						value={adults}
						onChange={(e) => setAdults(parseInt(e.target.value))}>
						{[1, 2, 3, 4, 5].map((num) => (
							<option
								key={num}
								value={num}>
								{num} Adults
							</option>
						))}
					</select>
					<select
						className='w-1/3 p-2 border rounded'
						value={children}
						onChange={(e) => setChildren(parseInt(e.target.value))}>
						{[0, 1, 2, 3, 4, 5].map((num) => (
							<option
								key={num}
								value={num}>
								{num} Children
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='mt-6'>
				<label className=''>Additional Inputs</label>
				<input
					type='text'
					className='w-full mt-2 p-2 border rounded h-14'
					placeholder='Any additional preferences'
					value={additionalInputs}
					onChange={(e) => setAdditionalInputs(e.target.value)}
				/>
			</div>
			<div className='mt-6 flex justify-end'>
				<button
					className={`bg-${buttonColor} text-white px-6 py-2 rounded-full hover:bg-blue-600 hover:shadow-lg`}
					onClick={handleStayFormSubmit}>
					Take me there!
				</button>
			</div>
		</div>
	);
};

export default StaySearch;
