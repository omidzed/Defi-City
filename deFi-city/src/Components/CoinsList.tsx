import type { Coin } from '../utils/data-types';

type CoinsListProps = {
	filteredCoins: Coin[] | undefined;
};

const style = {
	tableBody: 'w-full divide-y divide-gray-200 min-w-full dark:divide-moon-700',
	tableRow: 'flex justify-between items-center w-full hover:bg-gray-100 bg-white dark:bg-black-900 hover:dark:bg-black-800 text-md',
	tableData: 'mr-4 ml-4 text-gray-900 dark:text-moon-50 px-1 py-2.5 bg-inherit',
	logo: 'flex items-center w-full',
	symbol:'text-xs',
	image: 'mr-4 w-10 object-contain',
	positiveChange: 'text-green-500',
	negativeChange: 'text-red-500',
};

export const CoinsList = ({ filteredCoins }: CoinsListProps) => {
	if (!filteredCoins) {
		return <p>Loading...</p>;
	}

	if (filteredCoins.length === 0) {
		console.log('filtered coins', filteredCoins);
		return <p>No coins match your search criteria!</p>;
	}
	return (
		<div className='flex justify-center'>
			<table>
				<tbody className={style.tableBody}>
					<tr className={style.tableRow}></tr>
					{filteredCoins?.map(coin => (
						<tr
							key={coin.id}
							className={style.tableRow}>
							<td className={`${style.tableData}`}>{coin.name}</td>

							<td className={style.symbol}>{coin.symbol.toUpperCase()}</td>
							<td className={`${style.tableData} ${style.logo}`}></td>
							<img
								src={coin.image}
								alt={coin.symbol.toUpperCase()}
								className={style.image}
							/>
							<td className={style.tableData}>${coin.current_price}</td>
							<td className='px-1 py-2.5 p-2.5 text-end'>{coin.market_cap}</td>
							<td>{coin.market_cap_rank}</td>
							<td>{coin.total_volume}</td>
							<td
								className={`${style.tableData} ${
									coin.price_change_percentage_24h > 0 ? style.positiveChange : style.negativeChange
								}`}>
								{coin.price_change_percentage_24h.toFixed(2)}%
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

// 				<tbody >
// 					{filteredCoins.map(coin => (
// 						<tr
// 							key={coin.id}
// 							className={style.}>
// 							<td >
// 								<i
// 									className='far fa-star cursor-pointer py-2'
// 									data-coin-id={coin.id}></i>
// 							</td>
// 							<td className={style.tableData}>{coin.marketCapRank}</td>

// 								<div>
// 									{coin.name}{' '}
// 									<span className='text-xs text-gray-500 dark:text-moon-200'>
// 										{coin.symbol.toUpperCase()}
// 									</span>
// 								</div>
// 							</td>
// 							<td className={style.tableData}>{coin.price}</td>
// 							<td className={style.tableData}>{coin.marketCap}</td>
// 							<td className={style.tableData}>{coin.totalVolume}</td>
// 							<td className={style.tableData}>{`${coin.priceChangePercentage24h.toFixed(2)}%`}</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };
