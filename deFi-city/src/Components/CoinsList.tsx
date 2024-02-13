import type { Coin } from '../utils/data-types';

// Define the props expected by AssetsList
interface CoinsListProps {
	coins: Coin[] | undefined;
}

export const CoinsList = ({ coins }: CoinsListProps) => {
	return (
		<ul>
			{coins?.map(coin => (
				<li key={coin.id}>
					{coin.name}
					{coin.symbol}
					{coin.logoUrl}
					{coin.price}
					{coin.marketCap}
					{coin.marketCapRank}
					{coin.totalVolume}
					{coin.priceChangePercentage24h}
				</li>
			))}
		</ul>
	);
};
