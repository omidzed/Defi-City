import { useFetchCoins } from '../../hooks/useFetchCoins';
import { CoinsList } from '../CryptoDetails/CoinsList';
import type { Coin } from '../../types/data-types';

type HomePageProps = {
	isDark: boolean;
	inputValue: string;
};

export const HomePage = ({ isDark, inputValue }: HomePageProps) => {
	const { coins } = useFetchCoins();

	const filteredCoins: Coin[] | undefined = coins?.filter(coin => coin.name.toLowerCase().includes(inputValue.toLowerCase()));

	return (
		<div className={`main h-screen overflow-auto ${isDark ? 'text-white bg-dark' : 'text-dark bg-[#7BAFD4]'}`}>
			<CoinsList
				isDark={isDark}
				filteredCoins={filteredCoins}
			/>
		</div>
	);
};
