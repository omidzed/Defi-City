import { ChangeEvent, useState } from 'react';

type SearchBoxProps = {
	value: string;
	onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBox = ({ value, onInputChange }: SearchBoxProps) => {
	const [placeholder, setPlaceholder] = useState('Search by name ...');

	const handleClick = () => {
		setPlaceholder('');
	};

	const handleBlur = () => {
		setPlaceholder('Search...');
	};

	return (
		<div className='flex justify-center mb-6'>
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
