// import { createContext, useState, ReactNode, useEffect } from 'react';

// export type ThemeContextType = {
// 	theme: 'light' | 'dark';
// 	toggleTheme: () => void;
// };
// export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: ReactNode }) => {
// 	const [theme, setTheme] = useState<'light' | 'dark'>('light');

// 	useEffect(() => {
// 		document.body.classList.toggle('dark', theme === 'dark');
// 	}, [theme]);

// 	const toggleTheme = () => {
// 		const newTheme = theme === 'light' ? 'dark' : 'light';
// 		setTheme(newTheme);
// 	};

// 	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
// };
