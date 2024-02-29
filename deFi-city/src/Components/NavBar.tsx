import React from 'react';
import { useTheme } from '../utils/useTheme';
import { IoMoon } from 'react-icons/io5';
import { LuSunMedium } from 'react-icons/lu';

export const Navbar: React.FC = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className={`flex justify-center ${theme === 'dark' ? 'bg-[#192633]' : 'bg-secondary-light'}`}>
			<img
				className={`${theme === 'light' ? 'invert' : ''} w-28`}
				src='/src/assets/defi.png'
				alt='Logo'
			/>
			<div className={`bg-[#192633] dark:bg-white ${theme}`}>
				<button
					className='bg-white dark:bg-[#192633] dark:text-white text-3xl absolute right-20 top-8'
					onClick={toggleTheme}>
					{theme === 'dark' ? <LuSunMedium /> : <IoMoon />}
				</button>
			</div>
		</div>
	);
};
