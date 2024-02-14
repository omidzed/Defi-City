import { ChangeEvent, useState } from 'react';

type SearchBoxProps = {
	value: string;
	onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBox = ({ value, onInputChange }: SearchBoxProps) => {
	const [placeholder, setPlaceholder] = useState('Search...');

	const handleClick = () => {
		setPlaceholder('');
	};

	const handleBlur = () => {
		setPlaceholder('Search...');
	};

	return (
		<div>
			<input
				id='search-box'
				placeholder={placeholder}
				onClick={handleClick}
				onBlur={handleBlur}
				value={value}
				onChange={onInputChange}></input>
		</div>
	);
};
