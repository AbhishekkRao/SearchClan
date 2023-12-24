import React, { useState } from 'react';
import FlightSearch from './FlightSearch';
import StaySearch from './StaySearch';

const SearchForm = ({ chooseBgImage }) => {
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
			<div className='relative bg-white bg-opacity-50 w-1/2 rounded-3xl p-10 my-20'>
				<div
					className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cover bg-center opacity-50'
					style={{ backgroundImage: `url(${chooseBgImage})` }}></div>
				<div className='relative z-10'>
					<div className='gap-x-10 flex'>
						<span
							className={`text-blue-900 cursor-pointer ${
								stayFormVisible ? 'border-b-2 border-blue-900' : ''
							}`}
							onClick={handleStayClick}>
							Stay
						</span>
						<span
							className={`text-blue-900 cursor-pointer ${
								flightsFormVisible ? 'border-b-2 border-blue-900' : ''
							}`}
							onClick={handleFlightsClick}>
							Flights
						</span>
					</div>

					{stayFormVisible && <StaySearch />}

					{flightsFormVisible && <FlightSearch />}
				</div>
			</div>
		</div>
	);
};

export default SearchForm;
