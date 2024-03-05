import { ChangeEvent, useState } from 'react';
import { CoinsList } from './CoinsList';
import { SearchBox } from './SearchBox';
import type { Coin } from '../utils/data-types';
import { useFetchCoins } from '../utils/useFetchCoins';

type SearchableListProps = {
	toggleDarkMode: () => void;
	isDarkMode: boolean;
};

export const SearchableList = ({ isDarkMode }: SearchableListProps) => {
	const [inputValue, setInputValue] = useState('');

	const { coins } = useFetchCoins();

	console.log('coins before filtering', coins);

	const filteredCoins: Coin[] | undefined = coins?.filter(coin => coin.name.toLowerCase().includes(inputValue.toLowerCase()));

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	return (
		<div className={`p-5 ${isDarkMode ? 'text-white bg-[#192633]' : 'text-[#192633] bg-[#E5D9CC]'}`}>
			<SearchBox
				value={inputValue}
				onInputChange={handleInputChange}
			/>
			<CoinsList
				isDarkMode={isDarkMode}
				filteredCoins={filteredCoins}
			/>
		</div>
	);
};
