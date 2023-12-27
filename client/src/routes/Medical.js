import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import tbo from '../assets/tbo.svg';
import SearchForm from '../components/SearchForm';
import medimg from '../assets/med-form-bg.png';

const Medical = () => {
	return (
		<div className='h-full w-full overflow-auto medical-bg'>
			<div className='h-1/10 m-2 flex justify-between'>
				<img
					src={logo}
					alt='LOGO'
					className='w-32 mx-12'
				/>
				<div className='w-1/3 h-12 mt-8 bg-white rounded-3xl shadow-lg'>
					<div className='px-12 py-3 uppercase'>
						Searchclan is a one-stop solution for all travel woes
					</div>
				</div>
				<img
					src={tbo}
					alt='TBO'
					className='w-40 mx-12'
				/>
			</div>
			<div className='my-40'>
				<SearchForm sector='medical' />
			</div>
		</div>
	);
};

export default Medical;
