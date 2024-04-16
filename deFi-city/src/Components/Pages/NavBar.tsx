import { SearchBox } from '../SearchBox';
import { ChangeEvent, useState, useEffect } from 'react';
//import { useFetchCoins } from '../../hooks/useFetchCoins';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
//import { IoMenu } from 'react-icons/io5';
//import { RefreshButton } from '../CryptoDetails/RefreshButton';

type NavBarProps = {
	isDarkMode: boolean;
	toggleDarkMode: (checked: boolean) => {};
};

export const Navbar = ({ isDarkMode, toggleDarkMode }: NavBarProps) => {
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		document.body.classList.toggle('isDarkMode', isDarkMode);
	}, [isDarkMode]);

	//const { refreshData } = useFetchCoins();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<div className='flex justify-between w-5/6 px-20'>
			<div className='flex flex-col justify-center items-center w-28'>
				<span className={`${isDarkMode ? 'text-white' : 'text-gray-700'}  text-gecko whitespace-nowrap text-right max-w-prose tracking-wide`}>Powered By</span>
				<img
					src={`${isDarkMode ? 'src/assets/coingecko_logo_white.png' : 'src/assets/coingecko_logo_dark.png'}`}
					alt='CoinGecko Logo'
					className='object-contain md:object-fill md:w-28 md:h-7'
				/>
			</div>

			<img
				className='self-auto md:self-auto w-24 md:w-32 mx-2'
				src={`${isDarkMode ? 'src/assets/defi.png' : 'src/assets/defi2.png'}`}
				alt='Logo'
			/>
			<div className='flex justify-between items-center basis-1/4'>
				<div className='hidden md:block w-full mr-16'>
					<SearchBox
						isDarkMode={isDarkMode}
						value={inputValue}
						onInputChange={handleInputChange}
					/>
				</div>
				<DarkModeSwitch
					className='mr-4'
					checked={!isDarkMode}
					onChange={toggleDarkMode}
					size={30}
					moonColor='dark'
					sunColor='yellow'
				/>
			</div>

			<div className='md:hidden w-11/12 mx-auto mb-10 px-8'>
				<SearchBox
					isDarkMode={isDarkMode}
					value={inputValue}
					onInputChange={handleInputChange}
				/>
			</div>
		</div>
	);
};



// <div className='w-11/12 mx-auto flex  items-center mb-2 '>
// 				{/* <IoMenu
// 					size={25}
// 					className='cursor-pointer mr-2'
// 				/> */}
{
	/* <div className='fixed left-1/4 cursor-pointer'>
				<RefreshButton onClick={refreshData} />
			</div> */
}
