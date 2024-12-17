import { useState, useEffect } from 'react';
import type { Coin } from '../types/data-types';

const CACHE_TIMEOUT = 1000 * 60 * 5; // 5 minutes

export const useFetchCoins = () => {
	const [coins, setCoins] = useState<Coin[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error | null>(null);

	const fetchData = async () => {
		try {
			setLoading(true);
			const targetUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`;
			const response = await fetch(targetUrl);

			if (!response.ok) {
				throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
			}

			const data: Coin[] = await response.json();
			setCoins(data);

			// Cache data with timestamp
			localStorage.setItem('coinsData', JSON.stringify({ data, timestamp: Date.now() }));
		} catch (err) {
			setError(err instanceof Error ? err : new Error('Failed to fetch data'));
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const cachedData = localStorage.getItem('coinsData');
		if (cachedData) {
			const { data, timestamp } = JSON.parse(cachedData);
			if (Date.now() - timestamp < CACHE_TIMEOUT) {
				setCoins(data);
				setLoading(false);
				return;
			}
		}
		fetchData();
	}, []);

	const refreshData = () => {
		fetchData();
		console.log('Data refreshed');
	};

	return { coins, loading, error, prices: coins.map(coin => coin.sparkline_in_7d.price), refreshData };
};
