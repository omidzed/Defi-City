import { CoinProvider } from './Components/AppContext';
import { Navbar } from './Components/NavBar';
import { SearchableList } from './Components/SearchableList';
import { ThemeProvider } from './Components/ThemeContext';

const App = () => {
	return (
		<ThemeProvider>
			<CoinProvider>
				<Navbar />
				<SearchableList />
			</CoinProvider>
		</ThemeProvider>
	);
};

export default App;
