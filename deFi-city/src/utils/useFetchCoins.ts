import { useState, useEffect } from 'react';
import type { Coin } from './data-types';

export const useFetchCoins = () => {
	const [coins, setCoins] = useState<Coin[] | undefined>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		console.log('fetching data from the API...');
		const fetchData = async () => {
			try {
        setLoading(true);
        console.log('getting data from localStorage');
				const cachedData = localStorage.getItem('coinsData');
				if (cachedData) {
					console.log('cached data', cachedData);
					setCoins(JSON.parse(cachedData));
					return; // Return early if cached data was found
				}
				const targetUrl = encodeURIComponent(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`,
				);
				const response = await fetch('https://lfz-cors.herokuapp.com/?url=' + targetUrl, {
					headers: {
						'x-cg-demo-api-key': 'CG-c3zpRsbsY8nVsrk7RdPpWE72',
					},
				});
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data: Coin[] = await response.json();
				console.log('Data fetched successfully:', data);
				setCoins(data);
				setLoading(false);
			} catch (error) {
				setError(
					'An error occurred while fetching data: ' +
						(error instanceof Error ? error.message : String(error)),
				);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { coins, loading, error };
};
