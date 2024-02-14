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
					`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`,
				);
				const response = await fetch('https://lfz-cors.herokuapp.com/?url=' + targetUrl, {
					headers: {
						'X-CMC_PRO_API_KEY': '44f133d8-a055-48f2-a1c2-2cdfa46723f7',
					},
				});
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data: Coin[] = await response.json();
				console.log('data', data);
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
