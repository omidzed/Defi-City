import type { Coin } from '../utils/data-types';

// Define the props expected by AssetsList
interface AssetsListProps {
	coins: Coin[];
}

export const AssetsList: React.FC<AssetsListProps> = ({ coins }) => {
	return (
		<div>
			{coins.map(coin => (
				<div key={coin.id}>
					{coin.name}
					{coin.symbol}
					{coin.logoUrl}
					{coin.price}
					{coin.marketCap}
					{coin.marketCapRank}
					{coin.totalVolume}
					{coin.priceChangePercentage24h}
				</div>
			))}
		</div>
	);
};
