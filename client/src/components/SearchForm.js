import React, { useState } from 'react';
import FlightSearch from './FlightSearch';
import StaySearch from './StaySearch';

import wedimg from '../assets/wedding-form-bg.png';
import weddingDecor1 from '../assets/wedding-decor1.svg';
import weddingDecor2 from '../assets/wedding-decor2.svg';
import weddingDecor3 from '../assets/wedding-decor3.svg';

import vacimg from '../assets/vacation-form-bg.png';
import vacationDecor1 from '../assets/vacation-decor1.svg';
import vacationDecor2 from '../assets/vacation-decor2.svg';
import vacationDecor3 from '../assets/vacation-decor3.svg';

import medimg from '../assets/med-form-bg.png';
import medicalDecor1 from '../assets/medical-decor1.svg';
import medicalDecor2 from '../assets/medical-decor2.svg';
import medicalDecor3 from '../assets/medical-decor3.svg';

import meetimg from '../assets/meeting-form-bg.png';
import meetingDecor1 from '../assets/meeting-decor1.svg';
import meetingDecor2 from '../assets/meeting-decor2.svg';
import meetingDecor3 from '../assets/meeting-decor3.svg';

const SearchForm = ({ sector }) => {
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

	let decoration1, decoration2, decoration3, chooseBgImage;
	if (sector === 'medical') {
		decoration1 = medicalDecor1;
		decoration2 = medicalDecor2;
		decoration3 = medicalDecor3;
		chooseBgImage = medimg;
	} else if (sector === 'vacation') {
		decoration1 = vacationDecor1;
		decoration2 = vacationDecor2;
		decoration3 = vacationDecor3;
		chooseBgImage = vacimg;
	} else if (sector === 'wedding') {
		decoration1 = weddingDecor1;
		decoration2 = weddingDecor2;
		decoration3 = weddingDecor3;
		chooseBgImage = wedimg;
	} else if (sector === 'meeting') {
		decoration1 = meetingDecor1;
		decoration2 = meetingDecor2;
		decoration3 = meetingDecor3;
		chooseBgImage = meetimg;
	}

	return (
		<div className='flex justify-center'>
			<div className='relative bg-white bg-opacity-50 w-1/2 rounded-3xl p-10 my-20'>
				{decoration1 && (
					<img
						src={decoration1}
						alt='Decoration 1'
						className='absolute top-0 left-0 transform -translate-x-2/4 -translate-y-2/4 '
					/>
				)}
				{decoration2 && (
					<img
						src={decoration2}
						alt='Decoration 2'
						className='absolute bottom-0 left-0 transform -translate-x-2/4 translate-y-2/4 z-20'
					/>
				)}
				{decoration3 && (
					<img
						src={decoration3}
						alt='Decoration 3'
						className='absolute bottom-0 right-0 transform translate-x-2/4 translate-y-1/4 z-20'
					/>
				)}
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
