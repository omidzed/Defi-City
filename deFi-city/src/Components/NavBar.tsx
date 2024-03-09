type NavBarProps = {
	isDarkMode: boolean;
};
export const Navbar = ({ isDarkMode }: NavBarProps) => {
	return (
		<div className={`flex justify-center ${isDarkMode ? 'bg-[#192633]' : 'bg-[#E5D9CC]'}`}>
			<img
				className='w-28'
				src={`${isDarkMode ? '/defi.png' : '/defi2.png'}`}
				alt='Logo'
			/>
		</div>
	);
};
