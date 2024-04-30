import { useState } from 'react';
import { CoinProvider } from './Components/AppContext';
import { HomePage } from './Components/Pages/HomePage';
import { Navbar } from './Components/Pages/NavBar';

type Props = {
	onChange: (checked: boolean) => void;
	checked: boolean;
};

const App = ({ checked }: Props) => {
	const [isDark, setIsDark] = useState(!checked);
	const [inputValue, setInputValue] = useState('');

	const toggleDarkMode = () => setIsDark(!isDark);

	return (
		<CoinProvider>
			<Navbar
				inputValue={inputValue}
				setInputValue={setInputValue}
				isDark={isDark}
				setIsDark={() => setIsDark(!isDark)}
				toggleDarkMode={toggleDarkMode}
			/>
			<HomePage
				isDark={isDark}
				inputValue={inputValue}
			/>
		</CoinProvider>
	);
};

export default App;
