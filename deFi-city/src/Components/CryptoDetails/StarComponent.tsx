import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

type StarComponentProps = {
	isDarkMode: boolean;
};

export const StarComponent = ({ isDarkMode }: StarComponentProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className='cursor-pointer'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<span className={isHovered ? 'text-yellow-400' : `${isDarkMode ? 'text-white' : 'text-[#0F172A]'}`}>
				{isHovered ? <FaStar /> : <FaRegStar />} {/* Conditional rendering based on hover */}
			</span>
		</div>
	);
};
