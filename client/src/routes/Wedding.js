import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import tbo from '../assets/tbo.svg';
import SearchForm from '../components/SearchForm';
import wedimg from '../assets/wedding-form-bg.png';

const Wedding = () => {
	return (
		<div className='h-full w-full overflow-auto wedding-bg'>
			<div className='h-1/10 m-2 flex justify-between'>
				<img
					src={logo}
					alt='LOGO'
					className='w-32'
				/>
				<div className='w-1/3 h-12 mt-8 bg-white rounded-3xl shadow-lg'>
					<div className='px-12 py-3 uppercase'>
						Searchclan is a one-stop solution for all travel woes
					</div>
				</div>
				<img
					src={tbo}
					alt='TBO'
					className='w-40'
				/>
			</div>

			<SearchForm chooseBgImage={wedimg} />
		</div>
	);
};

export default Wedding;
