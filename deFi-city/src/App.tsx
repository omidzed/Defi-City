import { CoinProvider } from './Components/AppContext';
import { HomePage } from './Components/HomePage';

const App = () => {
	return (
		<CoinProvider>
			<HomePage />
		</CoinProvider>
	);
};

export default App;
