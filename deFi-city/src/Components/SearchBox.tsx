import { ChangeEvent, useState } from 'react';
import { IoSearch } from 'react-icons/io5';

type SearchBoxProps = {
	value: string;
	onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
	isDarkMode: boolean;
};
export const SearchBox = ({ value, onInputChange, isDarkMode }: SearchBoxProps) => {
	const [placeholder, setPlaceholder] = useState('Search');

	const handleBlur = () => {
		if (!value) {
			setPlaceholder('Search');
		}
	};

	return (
		<div
			className={`relative flex items-center
		${isDarkMode ? 'bg-dark' : 'bg-white border-dark border-2'} border border-green-400 rounded-lg overflow-hidden`}>
			<div className='absolute ml-5'>
				<IoSearch
					className={`${isDarkMode ? 'text-green-400' : 'text-black'}`}
					size={20}
				/>
			</div>
			<input
				id='search-box'
				className={`pl-12 pr-3 py-2.5 w-48 text-lg focus:border-none
				${isDarkMode ? 'bg-dark text-white' : 'bg-white text-black'}
				rounded-lg placeholder:${isDarkMode ? 'placeholder-gray-500' : 'placeholder-gray-700'}`}
				placeholder={placeholder}
				value={value}
				onChange={onInputChange}
				onBlur={handleBlur}
			/>
		</div>
	);
};
