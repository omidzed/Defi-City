import { useState, useEffect } from 'react';

export const SevenDayGraph = () => {
	const [chartData, setchartData] = useState();
	const [loading, setLoading] = useState<boolean>();
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const cachedData = localStorage.getItem('coinsData');
				if (cachedData) {
					setchartData(JSON.parse(cachedData));
					setLoading(false);
					return; // Return early if cached data was found
				}
				const targetUrl = encodeURIComponent(`https://api.coingecko.com/api/v3/coins/{id}/market_chart`);
				const response = await fetch('https://lfz-cors.herokuapp.com/?url=' + targetUrl, {
					headers: {
						'x-cg-demo-api-key': 'CG-c3zpRsbsY8nVsrk7RdPpWE72',
					},
				});
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const chartData = await response.json();
				console.log('Data fetched successfully:', chartData);
				setchartData(chartData);
				console.log('chartData', chartData);
				localStorage.setItem('coinsData', JSON.stringify(chartData));
			} catch (err) {
				setError(err instanceof Error ? err : new Error('Failed to fetch data'));
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return { chartData, loading, error };
};
