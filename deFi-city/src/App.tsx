import { CoinProvider } from './Components/AppContext';
import { useState } from 'react';
import type { Coin } from './utils/data-types';
import { SearchableList } from './Components/SearchableList';

function App() {
	const [coins, setCoins] = useState<Coin[]>([]); // Initialized as an empty array
	const [loading, setLoading] = useState<boolean>(false); // Correct type and initialization
	const [error, setError] = useState<string | null>(null); // Correct type and initialization

	const contextValue = { coins, loading, error, setCoins, setLoading, setError };

	return (
		<CoinProvider value={contextValue}>
			<SearchableList coins={coins} />
		</CoinProvider>
	);
}

export default App;
