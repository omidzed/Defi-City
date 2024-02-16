import { CoinProvider } from './Components/AppContext';
import { Navbar } from './Components/NavBar';
import { SearchableList } from './Components/SearchableList';

function App() {
	return (
		<CoinProvider>
			<Navbar />
			<SearchableList />
		</CoinProvider>
	);
}

export default App;
