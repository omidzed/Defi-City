// import { useEffect, useState } from 'react';
// import { FaCircleChevronUp } from 'react-icons/fa6';

// const ScrollToTop = () => {
// 	const [isVisible, setIsVisible] = useState(false);

// 	// Function to scroll to the top of the page
// 	const scrollToTop = () => {
// 		window.scrollTo({
// 			top: 0,
// 			behavior: 'smooth',
// 		});
// 	};

// 	// Effect to add the window scroll event listener
// 	useEffect(() => {
// 		const toggleVisibility = () => {
// 			if (window.scrollY > 400) {
// 				setIsVisible(true);
// 			} else {
// 				setIsVisible(false);
// 			}
// 		};

// 		window.addEventListener('scroll', toggleVisibility);

// 		return () => window.removeEventListener('scroll', toggleVisibility);
// 	}, []);

// 	return (
// 		<>
// 			{isVisible && (
// 				<div
// 					className='fixed z-50 right-20 top-20 md:right-20 md:bottom-20 cursor-pointer hover:scale-125 transition-transform opacity-50 md:opacity-100'
// 					onClick={scrollToTop}>
// 					<FaCircleChevronUp style={{ fontSize: '2.5rem' }} />
// 				</div>
// 			)}
// 		</>
// 	);
// };

// export default ScrollToTop;
