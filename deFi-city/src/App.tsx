import { CoinsList } from './Components/CoinsList';
import { CoinProvider } from './Components/AppContext';
import { useState } from 'react';
import type { Coin } from './utils/data-types';

function App() {
	const [coins, setCoins] = useState<Coin[]>();
	const [loading, setLoading] = useState<Coin[]>();
	const [error, setError] = useState<Coin[]>();

	const contextValue = { coins, loading, error };

	return (
		<>
			<CoinProvider value={contextValue}>
				<CoinsList coins={coins} />
			</CoinProvider>
		</>
	);
}

export default App;
