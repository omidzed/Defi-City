import { DarkModeSwitch } from 'react-toggle-dark-mode';

type NavBarProps = {
	toggleDarkMode: () => void;
	isDarkMode: boolean;
};
export const Navbar = ({ toggleDarkMode, isDarkMode }: NavBarProps) => {
	return (
		<div className={`flex justify-center ${isDarkMode ? 'bg-[#192633]' : 'bg-[#E5D9CC]'}`}>
			<img
				className= 'w-28'
				src={`${isDarkMode ? '/src/assets/defi.png' : '/src/assets/defi2.png'}`}
				alt='Logo'
			/>
			<DarkModeSwitch
				className='absolute right-20 top-10'
				moonColor='#192633'
				sunColor='#E5D9CC'
				checked={!isDarkMode}
				onChange={toggleDarkMode}
				size={30}
			/>
		</div>
	);
};
