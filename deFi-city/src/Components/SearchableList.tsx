import { ChangeEvent, useState } from 'react';
import { CoinsList } from './CoinsList';
import { SearchBox } from './SearchBox';
import type { Coin } from '../utils/data-types';

type SearchableListProps = {
	coins: Coin[]|undefined;
};

export const SearchableList = ({ coins }: SearchableListProps) => {
	const [inputValue, setInputValue] = useState('');
	console.log('coins before filtering', coins);

	const filteredCoins: Coin[]|undefined = coins?.filter(coin =>
		coin.name.toLowerCase().includes(inputValue.toLowerCase()),
	);

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	return (
		<div className='p-5'>
			<SearchBox
				value={inputValue}
				onInputChange={handleInputChange}
			/>
			<CoinsList filteredCoins={filteredCoins} />
		</div>
	);
};
