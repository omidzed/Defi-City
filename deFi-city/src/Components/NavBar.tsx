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
		<div className={`flex justify-center ${theme === 'dark' ? 'bg-[#192633]' : 'bg-[#E5D9CC]'}`}>
			<img
				className={`${theme === 'light' ? 'invert' : ''} w-28`}
				src='/src/assets/defi.png'
				alt='Logo'
			/>
			<div className={`bg-[#192633] dark:bg-[#E5D9CC] ${theme}`}>
				<button
					className='bg-[#E5D9CC] dark:bg-[#192633] dark:text-[#E5D9CC] dark:text-4xl absolute right-32 top-16 border-2 p-1 dark:border-white border-[#192633] rounded-full'
					onClick={toggleTheme}>
					{theme === 'dark' ? (
						<span className='text-[#E5D9CC]'>
							<LuSunMedium />
						</span>
					) : (
						<span className='text-[#192633]'>
							<IoMoon />
						</span>
					)}
				</button>
			</div>
		</div>
	);
};
