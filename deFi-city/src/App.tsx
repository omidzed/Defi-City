import { CoinProvider } from './Components/AppContext';
import { HomePage } from './Components/Pages/HomePage';
import { Navbar } from './Components/Pages/NavBar';
import { useState, useEffect } from 'react';
import { useFetchCoins } from './hooks/useFetchCoins';

const App = () => {
	const [isDarkMode, setDarkMode] = useState(true);

	useEffect(() => {
		document.body.classList.toggle('isDarkMode', isDarkMode);
	}, [isDarkMode]);

	const toggleDarkMode = (checked: boolean) => {
		setDarkMode(checked);
	};

	const { coins, loading, error } = useFetchCoins();

	const contextValue = { coins, loading, error };

	return (
		<div className={`${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
			<CoinProvider value={contextValue}>
				<Navbar
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
				<HomePage
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
			</CoinProvider>
		</div>
	);
};

export default App;
