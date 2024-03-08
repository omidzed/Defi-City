import { ChangeEvent, useState } from 'react';

type SearchBoxProps = {
	value: string;
	onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
	isDarkMode: boolean;
};
export const SearchBox = ({ value, onInputChange, isDarkMode }: SearchBoxProps) => {
	const [placeholder, setPlaceholder] = useState('Search by name ...');

	const handleClick = () => {
		setPlaceholder('');
	};

	const handleBlur = () => {
		setPlaceholder('Search...');
	};

	return (
		<div className={'flex justify-center mb-6 '}>
			<input
				className={`flex justify-center ${isDarkMode ? 'bg-[#192633]' : 'bg-[#E5D9CC]'}`}
				id='search-box'
				placeholder={placeholder}
				onClick={handleClick}
				onBlur={handleBlur}
				value={value}
				onChange={onInputChange}></input>
		</div>
	);
};
