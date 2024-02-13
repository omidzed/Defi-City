import { useState, useEffect } from 'react';

export const useFetchCoins = () => {
	const [coins, setCoins] = useState<[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				setLoading(true);
				const response = await fetch(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`,
					{
						headers: {
							'x-cg-pro-api-key': 'CG-c3zpRsbsY8nVsrk7RdPpWE72',
						},
					},
				);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await response.json();
				console.log('data', data);
				setCoins(data);
				setLoading(false);
			} catch (error) {
				setError('An error occurred while fetching data: ' + error);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	return { coins, loading, error };
};
