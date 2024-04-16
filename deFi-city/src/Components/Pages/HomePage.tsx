import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { useFetchCoins } from '../../hooks/useFetchCoins';
import { CoinsList } from '../CryptoDetails/CoinsList';
import type { Coin } from '../../types/data-types';

type HomePageProps = {
	isDarkMode: boolean;
};

export const HomePage: FC<HomePageProps> = ({ isDarkMode }) => {
	const [inputValue, setInputValue] = useState('');

	const { coins } = useFetchCoins();
	const filteredCoins: Coin[] | undefined = coins?.filter(coin => coin.name.toLowerCase().includes(inputValue.toLowerCase()));
	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	return (
		<div className={`main h-screen overflow-auto ${isDarkMode ? 'text-white bg-dark' : 'text-dark bg-[#fff]'}`}>
			<CoinsList
				isDarkMode={isDarkMode}
				filteredCoins={filteredCoins}
				
			/>
		</div>
	);
};
