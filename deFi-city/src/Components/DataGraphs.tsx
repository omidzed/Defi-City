// import { VictoryChart, VictoryLine } from 'victory';
// import { useFetchCoins } from '../utils/useFetchCoins';

// // Function to generate timestamps for the last 7 days at hourly intervals
// function generateTimestamps(prices: number[]): { x: Date; y: number }[] {
// 	const result: { x: Date; y: number }[] = [];
// 	const now = Date.now();
// 	const oneHour = 3600 * 1000; // milliseconds in one hour
// 	const sevenDays = 7 * 24 * oneHour;

// 	// Start timestamp is current time minus 7 days
// 	let timestamp = now - sevenDays;

// 	for (const price of prices) {
// 		result.push({ x: new Date(timestamp), y: price });
// 		timestamp += oneHour;
// 	}

// 	return result;
// }

// export const DataGraphs: React.FC = () => {
// 	//const { coins } = useFetchCoins();

// 	return (<></>
// 		// <div className='bg-[#192633]'>
// 		// 	{coins.map((coin, index) => {
// 		// 		const chartData = generateTimestamps(coin.sparkline_in_7d.price);
// 		// 		return (
// 		// 			<div
// 		// 				key={index}
// 		// 				className='w-10 my-4'>
// 		// 				<VictoryChart scale={{ x: 'time' }}>
// 		// 					<VictoryLine
// 		// 						data={chartData}
// 		// 						style={{ data: { stroke: '#94F905' } }}
// 		// 					/>
// 		// 				</VictoryChart>
// 		// 			</div>
// 		// 		);
// 		// 	})}
// 		// </div>
// 	);
// };
