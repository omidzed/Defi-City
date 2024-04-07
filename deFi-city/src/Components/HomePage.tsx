import { SearchBox } from './SearchBox';
import type { Coin } from '../utils/data-types';
import { ChangeEvent, useState, useEffect } from 'react';
import { useFetchCoins } from '../utils/useFetchCoins';
import { CoinsList } from './CoinsList';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { IoMenu } from 'react-icons/io5';

export const HomePage = () => {
	const [inputValue, setInputValue] = useState('');
	const [isDarkMode, setDarkMode] = useState(true);

	useEffect(() => {
		document.body.classList.toggle('isDarkMode', isDarkMode);
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	//const { coins, refreshData } = useFetchCoins();
	const { coins } = useFetchCoins();

	const filteredCoins: Coin[] | undefined = coins?.filter(coin => coin.name.toLowerCase().includes(inputValue.toLowerCase()));

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	return (
		<div className={`main h-screen overflow-auto ${isDarkMode ? 'text-white bg-[#192633]' : 'text-[#192633] bg-[#fff]'}`}>
			<div className=' p-5 px-12 flex w-full justify-between items-center mb-2 overflow-x-auto'>
				<div className='flex justify-between w-1/4'>
					<div className='flex gap-4'>
						<div className='flex items-start justify-center basis-1/6  p-1'>
							<IoMenu size={25} />
						</div>
						<div className='md:basis-1/4 flex flex-col text-[clamp(0.5rem,2vw+1rem,1.2rem)] '>
							<span
								className={`${
									isDarkMode ? 'text-white' : 'text-black'
								} text-[clamp(0.5rem,2vw+1rem,1.2rem)] font-thin italic whitespace-nowrap text-right max-w-prose tracking-wide`}>
								Powered By
							</span>
							<img
								src={`${isDarkMode ? '/coingecko_logo_white.png' : '/coingecko_logo_dark.png'}`}
								alt='CoinGecko Logo'
								className='object-contain md:object-fill md:w-28 md:h-6'
							/>
						</div>
					</div>
				</div>
				<img
					className='w-24 md:w-32 mx-2'
					src={`${isDarkMode ? '/defi.png' : '/defi2.png'}`}
					alt='Logo'
				/>
				<div className='hidden md:block w-1/5 justify-center'>
					<SearchBox
						isDarkMode={isDarkMode}
						value={inputValue}
						onInputChange={handleInputChange}
					/>
				</div>
				<div className='flex justify-end basis-1/12 text-right gap-4  items-center'>
					<DarkModeSwitch
						moonColor='#192633'
						sunColor='#E5D9CC'
						checked={!isDarkMode}
						onChange={toggleDarkMode}
						size={25}
					/>
				</div>
			</div>

			{/* <div className='container flex w-11/12 justify-between items-center mb-2 overflow-x-auto'>
				<div className='w-1/5 flex flex-col md:flex-row gap-2 text-xs'>
					<span className={`${isDarkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>Powered by</span>
					<img
						src={`${isDarkMode ? '/coingecko_logo_white.png ' : '/coingecko_logo_dark.png'}`}
						alt='CoinGecko Logo'
						className='w-28 h-6'
					/>
				</div>

				<img
					className='w-16 md:w-32'
					src={`${isDarkMode ? '/defi.png' : '/defi2.png'}`}
					alt='Logo'
				/>
				<div className='hidden md:block justify-center'>
					<SearchBox
						isDarkMode={isDarkMode}
						value={inputValue}
						onInputChange={handleInputChange}
					/>
				</div>
				<div className='basis-1/3 md:basis-1/4 gap-4 md:gap-20 items-center'>
					<DarkModeSwitch
						moonColor='#192633'
						sunColor='#E5D9CC'
						checked={!isDarkMode}
						onChange={toggleDarkMode}
						size={25}
					/>
				</div>
			</div> */}
			<div className='md:hidden w-11/12 mx-auto mb-10 px-8'>
				<SearchBox
					isDarkMode={isDarkMode}
					value={inputValue}
					onInputChange={handleInputChange}
				/>
			</div>

			<CoinsList
				isDarkMode={isDarkMode}
				filteredCoins={filteredCoins}
			/>
		</div>
	);
};

// <div className='flex justify-between items-center mb-2 px-2 md:px-24'>
// 	<div className='w-1/5 flex gap-2'>
// 		//<span className={`${isDarkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>Powered by</span>
// 		<img
// 			src={`${isDarkMode ? '/coingecko_logo_white.png ' : '/coingecko_logo_dark.png'}`}
// 			alt='CoinGecko Logo'
// 			className='w-28 h-8'
// 		/>
// 	</div>
// 	{/* <div className='cursor-pointer'>
// 		<RefreshButton onClick={refreshData} />
// 	</div> */}
// 	<img
// 		className='w-32'
// 		src={`${isDarkMode ? '/defi.png' : '/defi2.png'}`}
// 		alt='Logo'
// 	/>
// 	<div className='flex justify-end basis-1/5 md:basis-1/4 gap-4 md:gap-20 items-center'>
// 		<SearchBox
// 			isDarkMode={isDarkMode}
// 			value={inputValue}
// 			onInputChange={handleInputChange}
// 		/>

// 		<DarkModeSwitch
// 			moonColor='#192633'
// 			sunColor='#E5D9CC'
// 			checked={!isDarkMode}
// 			onChange={toggleDarkMode}
// 			size={25}
// 		/>
// 	</div>
// </div>;
{
	/* <div className='cursor-pointer'>
					<RefreshButton onClick={refreshData} />
				</div> */
}
