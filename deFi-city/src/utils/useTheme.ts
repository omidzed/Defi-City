// import { useContext } from 'react';
// import { DarkModeContext } from '../Components/DarkModeContext';

// export const useDarkMode = () => useContext(DarkModeContext);

import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeContext';
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
