import { createContext, useState, ReactNode } from 'react';

export type ThemeContextType = {
	theme: string;
	setTheme: (theme: 'light' | 'dark') => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

// type DarkModeProviderProps = {
// 	children: React.ReactNode;
// };

// export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
// 	const [theme, setTheme] = useState<'light' | 'dark' | undefined>(undefined);

// 	useEffect(() => {
// 		(theme === 'dark' ? ) {
// 			document.documentElement.classList.add('dark');
// 		} else {
// 			document.documentElement.classList.add('light');
// 		}
// 	}, [theme]);

// 	const toggleDark = () => {
// 		setTheme(theme === 'dark' ? 'light' : 'dark');
// 	};

// 	return <DarkModeContext.Provider value={{ theme, toggleDark }}>{children}</DarkModeContext.Provider>;
// };
