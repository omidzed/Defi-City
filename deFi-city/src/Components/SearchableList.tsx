import { ChangeEvent, useState } from 'react';
import { CoinsList } from './CoinsList';
import { SearchBox } from './SearchBox';
import type { Coin } from '../utils/data-types';
import { useFetchCoins } from '../utils/useFetchCoins';

export const SearchableList = () => {
	const [inputValue, setInputValue] = useState('');

	const { coins } = useFetchCoins();

	console.log('coins before filtering', coins);

	const filteredCoins: Coin[] | undefined = coins?.filter(coin => coin.name.toLowerCase().includes(inputValue.toLowerCase()));

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	return (
		<div className='p-5 text-white bg-[#192633]'>
			<SearchBox
				value={inputValue}
				onInputChange={handleInputChange}
			/>
			<CoinsList filteredCoins={filteredCoins} />
		</div>
	);
};
