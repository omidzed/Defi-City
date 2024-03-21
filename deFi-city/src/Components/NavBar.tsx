// import { SearchBox } from './SearchBox';

// type NavBarProps = {
// 	isDarkMode: boolean;
// };

// export const Navbar = ({ isDarkMode }: NavBarProps) => {
// 	const [inputValue, setInputValue] = useState('');


// 	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
// 		setInputValue(event.target.value);
// 	}
// 	return (
// 		<div className={`p-5 ${isDarkMode ? 'text-white bg-[#192633]' : 'text-[#192633] bg-[#E5D9CC]'}`}>
// 			<div className='absolute top-10 left-14  w-28 flex gap-2'>
// 				<span className={`${isDarkMode ? 'text-white' : 'text-black'} whitespace-nowrap`}>Powered by</span>
// 				<img
// 					src={`${isDarkMode ? '/coingecko_logo_white.png ' : '/coingecko_logo_dark.png'}`}
// 					alt='CoinGecko Logo'
// 					style={{ width: '120px' }}
// 				/>
// 			</div>

// 			<img
// 				className='w-28'
// 				src={`${isDarkMode ? '/defi.png' : '/defi2.png'}`}
// 				alt='Logo'
// 			/>

// 			<SearchBox
// 				isDarkMode={isDarkMode}
// 				value={inputValue}
// 				onInputChange={handleInputChange}
// 			/>
// 		</div>
// 	);
// };
