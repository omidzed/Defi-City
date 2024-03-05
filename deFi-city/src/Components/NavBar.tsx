import { IoMoon } from 'react-icons/io5';
import { LuSunMedium } from 'react-icons/lu';

type NavBarProps = {
	toggleDarkMode: () => void;
	isDarkMode: boolean;
};
export const Navbar = ({ toggleDarkMode, isDarkMode }: NavBarProps) => {
	return (
		<div className={`flex justify-center ${isDarkMode ? 'bg-[#192633]' : 'bg-[#E5D9CC]'}`}>
			<img
				className={`${isDarkMode ? 'invert' : ''} w-28`}
				src='/src/assets/defi2.png'
				alt='Logo'
			/>

			<div className={`${isDarkMode ? 'bg-[#192633]' : 'bg-[#E5D9CC]'}`}>
				<button
					className=' dark:bg-[#192633] bg-[#192633] text-[#E5D9CC] dark:text-4xl absolute right-20 top-10 border-3 p-3 border-[#192633] rounded-full'
					onClick={toggleDarkMode}>
					{isDarkMode ? (
						<span className='text-[#E5D9CC]'>
							<LuSunMedium size={30} />
						</span>
					) : (
						<span className=' bg-[#192633] '>
							<LuSunMedium
								color='#E5D9CC'
								size={30}
							/>
						</span>
					)}
				</button>
				<button
					className='bg-[#E5D9CC] mr-2 dark:bg-[#E5D9CC] dark:text-[#192633] dark:text-4xl absolute right-32 top-10 border-3 p-3 dark:border-white border-[#192633] rounded-full'
					onClick={toggleDarkMode}>
					{isDarkMode ? (
						<span className='text-[#192633]'>
							<IoMoon size={30} />
						</span>
					) : (
						<span className='border-white'>
							<IoMoon size={30} />
						</span>
					)}
				</button>
			</div>
		</div>
	);
};
