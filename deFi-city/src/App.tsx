import { CoinProvider } from './Components/AppContext';
import { Navbar } from "./Components/NavBar";
import { SearchableList } from './Components/SearchableList';
import { useFetchCoins } from './utils/useFetchCoins';

function App() {
	const { coins, loading, error } = useFetchCoins();

	const contextValue = { coins, loading, error };

	return (
		<CoinProvider value={contextValue}>
			<Navbar/>
			<SearchableList coins={coins} />
		</CoinProvider>
	);
}

export default App;
