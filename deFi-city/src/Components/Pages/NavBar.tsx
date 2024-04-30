import { SearchBox } from '../SearchBox';
import { ChangeEvent, useEffect } from 'react';
import { useFetchCoins } from '../../hooks/useFetchCoins';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

type NavBarProps = {
	isDark: boolean; // Make sure to use 'isDark' or 'isDarkMode' consistently
	setIsDark: () => void;
	inputValue: string;
	setInputValue: (value: string) => void;
	toggleDarkMode: () => void;
};

export const Navbar = ({ isDark, inputValue, setInputValue, toggleDarkMode }: NavBarProps) => {
	useEffect(() => {
		document.body.classList.toggle('dark-mode', isDark);
	}, [isDark]);

	const { refreshData } = useFetchCoins();

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<div className={`${isDark ? 'text-white bg-dark' : 'text-dark bg-[#7BAFD4]'} flex justify-between w-full px-2 md:px-20`}>
			<div
				className='flex flex-col justify-center items-center w-20 md:w-28 cursor-pointer '
				onClick={refreshData}>
				<span className={`${isDark ? 'text-white' : 'text-gray-700'} text-xs md:text-gecko font-semibold whitespace-nowrap text-right max-w-prose tracking-wide`}>Powered By</span>
				<img
					src={`${isDark ? 'src/assets/coingecko_logo_white.png' : 'src/assets/coingecko_logo_dark.png'}`}
					alt='CoinGecko Logo'
					className='object-contain md:object-fill md:w-28 md:h-7 '
				/>
			</div>

			<img
				className='self-auto md:self-auto w-24 md:w-32 mx-2'
				src={`${isDark ? 'src/assets/defi.png' : 'src/assets/defi6.png'}`}
				alt='Logo'
			/>
			<div className='flex justify-between items-center basis-1/4'>
				<div className='w-full mr-4 md:mr-16'>
					<SearchBox
						isDark={isDark}
						value={inputValue}
						onInputChange={handleInputChange}
					/>
				</div>
				<DarkModeSwitch
					className='mr-4'
					checked={!isDark}
					onChange={toggleDarkMode}
					size={30}
					moonColor='yellow'
					sunColor='yellow'
				/>
			</div>
		</div>
	);
};

{
	/* <div className='md:hidden w-11/12 mx-auto mb-10 px-8'>
				<SearchBox
					isDark={isDark}
					value={inputValue}
					onInputChange={handleInputChange}
				/>
			</div> */
}
