// import { CoinsList } from './CoinsList';
// import type { Coin } from '../utils/data-types';
// import { useFetchCoins } from '../utils/useFetchCoins';

// type SearchableListProps = {
// 	isDarkMode: boolean;
// };

// export const SearchableList = ({ isDarkMode }: SearchableListProps) => {
// 	const [inputValue, setInputValue] = useState('');

// 	const { coins } = useFetchCoins();


// 	// function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
// 	// 	setInputValue(event.target.value);
// 	// }

// 	return (
// 		<div className={`p-5 ${isDarkMode ? 'text-white bg-[#192633]' : 'text-[#192633] bg-[#E5D9CC]'}`}>
// 			{/* <SearchBox
// 				isDarkMode={isDarkMode}
// 				value={inputValue}
// 				onInputChange={handleInputChange}
// 			/> */}
// 			<CoinsList
// 				isDarkMode={isDarkMode}
// 				filteredCoins={filteredCoins}
// 			/>
// 		</div>
// 	);
// };
