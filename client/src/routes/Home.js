import logo from '../assets/logo.svg';
import tbo from '../assets/tbo.svg';
import tour_set from '../assets/tour_set.svg';

const Home = () => {
	return (
		<div className='w-full h-full bg-light-yellow overflow-auto'>
			<div className='h-1/10 m-8 flex justify-between'>
				<img src={logo} alt='LOGO' className='w-32' />
				<div className='w-1/3 h-12 flex mt-8 bg-white rounded-3xl shadow-lg overflow-hidden'>
					<div className='px-12 py-3 uppercase  animate-marquee whitespace-nowrap overflow-hidden'>
						Searchclan is one-stop solution for all your travel voes!
					</div>
					<div className='absolute px-12 py-3 text-sky-400 uppercase animate-marquee2 whitespace-nowrap overflow-hidden'>
						Searchclan is one-stop solution for all your travel voes!
					</div>
				</div>
				<img src={tbo} alt='TBO' className='w-40' />
			</div>
			<div className=''>
				<div className='flex  justify-center'>
					<p className='text-bold text-xl text-faded-black'>
						LET'S MAKE THE BEST TRIP EVER!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
