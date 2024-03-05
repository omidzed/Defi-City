import { useState } from 'react';
export const useDarkMode = () => {
	const [isDarkMode, setDarkMode] = useState<boolean>(false);

	const toggleDarkMode = () => {
		setDarkMode(!isDarkMode);
	};

	return {
		isDarkMode,
		toggleDarkMode,
	};
};
