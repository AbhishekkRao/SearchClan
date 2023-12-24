import logo from '../assets/logo.svg';
import tbo from '../assets/tbo.svg';
import line1 from '../assets/line1.svg';
import line2 from '../assets/line2.svg';
import line3 from '../assets/line3.svg';
import main from '../assets/main.png';
import plane from '../assets/plane.svg';
import ham from '../assets/ham.svg';
import map from '../assets/map.png';
import pointer from '../assets/pointer.svg';
import medical from '../assets/medical.svg';
import meeting from '../assets/meeting.svg';
import wedding from '../assets/wedding.svg';
import vacation from '../assets/vacation.svg';
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
					{/* <div className='absolute px-12 py-3 text-sky-400 uppercase animate-marquee2 whitespace-nowrap overflow-hidden'>
						Searchclan is one-stop solution for all your travel voes!
					</div> */}
				</div>
				<img src={tbo} alt='TBO' className='w-40' />
			</div>
			<div className='mt-20'>
				<div className='flex flex-row justify-left'>
					<div className='flex-col'>
					<img src={line1} alt='' className='' />
					</div>
					<div className='flex-col'>
						<p className='mx-16 text-bold text-xl text-faded-black'>
							LET'S MAKE THE BEST TRIP EVER!
						</p>
						<p className=' mt-4 font-semibold text-faded-black text-7xl leading-snug'>
							<span className='mx-16'>Your new</span> 
							<div className='flex flex-row mx-6'>
							<img src={plane} alt='' className='w-12 h-full' />
							<span className='bg-gradient-to-l from-high-green'>travel</span> 
							</div>
							<span className='mx-16'>partner</span>
						</p>
						<p className='mx-16 w-full mt-8 text-bold text-xl text-light-gray'>
							Explore beautiful destinations at your price
						</p>
					</div>
					<img src={line2} alt='' className='w-2/12' />
					<img src={main} alt='' className='w-2/5' />
					<img src={line3} alt='' className='w-1/12' />
				</div>
			</div>
			<div className='w-full flex justify-center'>
				<div className='w-3/4 h-64 flex flex-row justify-center items-end mt-20'>
					<div className='w-64 h-64 bg-light-orange rounded-3xl rounded-br-none shadow-xl z-10 flex flex-col justify-center'>
						<div className='mt-4 text-voilet-text text-xl font-semibold flex justify-center'>
							Online Booking
						</div>
						<div className='w-60 h-28 mt-8 bg-map flex justify-center self-center p-4'>
							<div className='flex flex-col justify-center items-center'>
								<img src={pointer} alt='' className='w-8'/>
								<span className='text-voilet-text text-2xl font-semibold mt-3'>Choose</span>
								<p className='text-voilet-text text-base font-normal'>your companion</p>
							</div>
						</div>
					</div>
					<div className='h-48  bg-white rounded-r-3xl flex flex-row shadow-xl'>
						<div className='flex items-center justify-between gap-x-5 mx-5'>
							<div className='h-40 w-40 bg-pastel-blue rounded-2xl'>
								<div className='w-10 h-10 bg-white rounded-md flex flex-col justify-center m-9'>
									<img src={medical} alt='' className='w-7 p-0.5'/>
									<span className='w-28 text-voilet-text text-lg font-semibold mt-3'>Choose</span>
									<p className='w-20 text-voilet-text text-sm font-normal'>your companion</p>
								</div>
							</div>
							<div className='h-40 w-40 bg-pastel-purple rounded-2xl'>
							</div>
							<div className='h-40 w-40 bg-pastel-red rounded-2xl'>
							</div>
							<div className='h-40 w-40 bg-pastel-green rounded-2xl'>
							</div>
							<div className=''>
							<img src={ham} alt='' className='' />
						    </div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
