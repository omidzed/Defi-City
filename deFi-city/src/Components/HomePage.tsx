import { SearchBox } from './SearchBox';
import type { Coin } from '../utils/data-types';
import { ChangeEvent, useState, useEffect } from 'react';
import { useFetchCoins } from '../utils/useFetchCoins';
import { CoinsList } from './CoinsList';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const HomePage = () => {
	const [inputValue, setInputValue] = useState('');
	const [isDarkMode, setDarkMode] = useState(true);

	useEffect(() => {
		document.body.classList.toggle('isDarkMode', isDarkMode);
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	const { coins } = useFetchCoins();

	const filteredCoins: Coin[] | undefined = coins?.filter(coin => coin.name.toLowerCase().includes(inputValue.toLowerCase()));

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	return (
		<div className={`p-5 ${isDarkMode ? 'text-white bg-[#192633]' : 'text-[#192633] bg-[#fff]'}`}>
			<div className='flex justify-between items-center mb-2 px-24'>
				<div className='w-1/5 flex gap-2'>
					<span className={`${isDarkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>Powered by</span>
					<img
						src={`${isDarkMode ? '/coingecko_logo_white.png ' : '/coingecko_logo_dark.png'}`}
						alt='CoinGecko Logo'
						className='w-28 h-8'
					/>
				</div>

				<img
					className='w-32'
					src={`${isDarkMode ? '/defi.png' : '/defi2.png'}`}
					alt='Logo'
				/>
				<div className='flex justify-end basis-1/4 gap-20 items-center'>
					<SearchBox
						isDarkMode={isDarkMode}
						value={inputValue}
						onInputChange={handleInputChange}
					/>

					<DarkModeSwitch
						moonColor='#192633'
						sunColor='#E5D9CC'
						checked={!isDarkMode}
						onChange={toggleDarkMode}
						size={25}
					/>
				</div>
			</div>

			<CoinsList
				isDarkMode={isDarkMode}
				filteredCoins={filteredCoins}
			/>
		</div>
	);
};
