import type { Coin } from '../utils/data-types';

type CoinsListProps = {
	filteredCoins: Coin[] | undefined;
};

const style = {
	listItem: 'mb-2',
};
export const CoinsList = ({ filteredCoins }: CoinsListProps) => {
	if (filteredCoins === undefined) {
		return <p>Loading...</p>;
	}

	if (filteredCoins.length === 0) {
		return <p>No coins match your search criteria!</p>;
	}
	return (
		<ul>
			{filteredCoins?.map(coin => (
				<li
					key={coin.id}
					className={style.listItem}>
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
