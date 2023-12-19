import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div
			className='w-full h-full bg-app-black overflow-auto'>
			<div className='flex p-8 justify-between font-semibold'>
				<div className='ml-10'>
					<Link to='/home'>
						{/* <img
							src={logo}
							alt='logo'
							style={{ width: '209px', height: '51px' }}
						/> */}
					</Link>
				</div>
			</div>
			<div className='content-between flex flex-col items-center justify-center mt-14'>
				<div className='text-center text-black text-5xl mt-10'>
					<div className=''>Welcome to</div>
					<div className='mt-2 text-transparent text-6xl font-semibold bg-clip-text text-black'>
						Search Clan
					</div>
				</div>
				<div className='text-black mt-7'>Your Journey Your Story</div>
				<div className='h-2/3 flex items-center justify-center rounded-full font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 py-3 px-4 mt-6 '>
					<Link to='/medical'>Start Planning</Link>
				</div>
				{/* Note: Removed the mountains image rendering */}
			</div>
		</div>
	);
};

export default Home;
