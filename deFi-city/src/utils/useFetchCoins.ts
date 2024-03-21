import { useState, useEffect } from 'react';
import type { Coin } from './data-types';

export const useFetchCoins = () => {
	const [coins, setCoins] = useState<Coin[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);
	const [prices, setPrices] = useState<number[][]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const cachedData = localStorage.getItem('coinsData');
				if (cachedData) {
					const cachedCoins = JSON.parse(cachedData) as Coin[];
					setCoins(cachedCoins);
					// Extract sparkline data from cached data
					setPrices(cachedCoins.map(coin => coin.sparkline_in_7d.price));
					setLoading(false);
					return; // Return early if cached data was found
				}
				const targetUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`;
				const response = await fetch('https://lfz-cors.herokuapp.com/?url=' + encodeURIComponent(targetUrl), {
					headers: {
						'x-cg-demo-api-key': 'CG-c3zpRsbsY8nVsrk7RdPpWE72',
					},
				});
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data: Coin[] = await response.json();
				setCoins(data);

				const sevenDayPrices = data.map(coin => coin.sparkline_in_7d.price);
				setPrices(sevenDayPrices); // Update the prices state with sparkline data

				localStorage.setItem('coinsData', JSON.stringify(data));
			} catch (err) {
				setError(err instanceof Error ? err : new Error('Failed to fetch data'));
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { coins, loading, error, prices };
};
