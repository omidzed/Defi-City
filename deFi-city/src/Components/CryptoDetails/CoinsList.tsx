import { useState } from 'react';
import type { Coin } from '../../types/data-types';
import { StarComponent } from './StarComponent';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import { formatPrice, formatDate } from '../../utils/formatters';
import { sevenDayTrend } from '../../types/data-types';

type CoinsListProps = {
	filteredCoins: Coin[] | undefined;
	isDarkMode: boolean;
};

export const CoinsList = ({ filteredCoins, isDarkMode }: CoinsListProps) => {
	const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

	const showModal = (coin: Coin) => setSelectedCoin(coin);

	const closeModal = () => setSelectedCoin(null);

	const commonStyles = 'py-3 px-1 2lg:pl-2.5 md:pl-4.5 whitespace-nowrap';

	if (!filteredCoins) {
		return <p>Loading...</p>;
	}

	if (filteredCoins.length === 0) {
		return <p className='text-[clamp(1rem,2vw+1rem,2rem)] text-center my-40'>No coins match your search criteria!</p>;
	}

	return (
		<div className={`${isDarkMode ? 'text-white bg-dark' : 'text-dark bg-white'} w-full sm:w-11/12 mx-auto`}>
			<table className='w-full sortable'>
				<thead className={`overflow-y-hidden overflow-x-hidden sticky top-0 z-30 ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
					<tr className='p-0 h-px bg-gray-200 no-sort double-border'>
						<th colSpan={14}></th>
					</tr>
					<tr>
						<th className={`${commonStyles} text-center sticky left-[10px] min-w-[24px] md:min-w-10 pl-2 md:pl-8 cursor-pointer`}>#</th>
						<th className={`${commonStyles} text-left sticky left-[60px] md:left-[24px] md:min-w-10 indicator-left cursor-pointer`}>Coin</th>
						<th className={`${commonStyles} text-right  md:left-[12px] md:min-w-[48px] indicator-left cursor-pointer`}>Price</th>
						<th className={`${commonStyles} text-right  left-[51px] md:left-[52px] min-w-[100px] 2lg:min-w-[150px] md:table-cell`}>24h</th>
						<th className={`${commonStyles} text-right indicator-left min-w-[100px] 2lg:min-w-[150px] md:table-cell`}>7d</th>
						<th className={`${commonStyles} text-right min-w-[150px] indicator-left cursor-pointer md:table-cell`}>24h Volume</th>
						<th className={`${commonStyles} text-right min-w-[150px] indicator-left cursor-pointer md:table-cell`}>Market Cap</th>
						<th className={`${commonStyles} text-end min-w-[160px] pr-2 md:pr-8 no-sort md:table-cell`}>Last 7 Days</th>
					</tr>
					<tr className='p-0 h-px bg-gray-200 no-sort double-border'>
						<th colSpan={14}></th>
					</tr>
				</thead>
				<tbody className='divide-y min-w-full overflow-x-hidden'>
					{filteredCoins.map(coin => (
						<tr key={uuid()}>
							<td>
								<div className={`${commonStyles} z-10 left-[10px] min-w-[24px] md:min-w-10 flex items-center gap-2 text-center sticky pl-2 md:pl-8 no-sort cursor-pointer`}>
									<StarComponent isDarkMode={isDarkMode} />
									{coin.market_cap_rank}
								</div>
							</td>
							<td>
								<div className={`${commonStyles} flex text-left sticky left-[10px] items-center flex-nowrap`}>
									<div className='z-50 object-contain w-8 mr-2'>
										<img
											src={coin.image}
											alt={`Image of ${coin.id}`}
										/>
									</div>
									<div className='flex flex-col md:gap-1 md:flex-row xl:justify-start xl:items-center md:items-baseline'>
										{/* was removed from line below: md:left-[52px] min-w-[122px] 2lg:min-w-[150px] */}
										<span className='z-10 left-[10px] min-w-[24px] md:min-w-10 text-name sticky whitespace-nowrap '>{coin.name}</span>
										<span className='z-10 left-[60px] min-w-[24px] md:min-w-10 font-thin text-symbol align-baseline md:justify-end'>{`${coin.symbol.toUpperCase()}`}</span>
									</div>
								</div>
							</td>
							<td className={`${commonStyles} md:text-right md:left-[12px] md:min-w-[48px]`}>{formatPrice(coin.current_price)}</td>
							<td className={`${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-600'}`}>
								<div className={`${commonStyles} flex justify-end items-center `}>
									{coin.price_change_percentage_24h < 0 ? <FaCaretDown /> : <FaCaretUp />}
									{Math.abs(coin.price_change_percentage_24h).toFixed(1)}%
								</div>
							</td>
							<td className={`${sevenDayTrend(coin) < 0 ? 'text-red-500' : 'text-green-600'}`}>
								<div className={`${commonStyles} hidden md:flex md:justify-end md:items-center `}>
									{sevenDayTrend(coin) < 0 ? <FaCaretDown /> : <FaCaretUp />}
									{Math.abs(sevenDayTrend(coin)).toFixed(1)}%
								</div>
							</td>
							<td className={`${commonStyles} text-right`}>{formatPrice(coin.total_volume)}</td>
							<td className={`${commonStyles} text-right`}>{formatPrice(coin.market_cap)}</td>
							<td>
								<div
									className='hidden md:block md:ml-16 md:min-w-[80px] md:h-14 md:mt-2 md:cursor-pointer'
									onClick={() => showModal(coin)}>
									<VictoryChart>
										<VictoryLine
											data={coin.sparkline_in_7d.price.map((price, i) => ({
												x: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + (i * (24 * 60 * 60 * 1000)) / coin.sparkline_in_7d.price.length),
												y: price,
											}))}
											style={{
												data: { stroke: sevenDayTrend(coin) >= 0 ? 'green' : 'red' },
											}}
										/>
									</VictoryChart>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{selectedCoin && (
				<div
					className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center cursor-pointer'
					onClick={closeModal}>
					<div
						className='bg-white absolute z-50 top-15 m-4 p-20 dark:bg-[#333] rounded-lg cursor-auto'
						onClick={e => e.stopPropagation()}>
						<VictoryChart padding={{ top: 20, bottom: 50, left: 50, right: 20 }}>
							<VictoryAxis
								dependentAxis
								style={{
									axis: { stroke: isDarkMode ? 'black' : 'white' }, // Adjust axis color based on theme
									tickLabels: { fill: isDarkMode ? 'black' : 'white' }, // Adjust tick label color based on theme
								}}
							/>
							<VictoryAxis
								tickFormat={x => {
									const date = new Date(x);
									return `${formatDate(date)}`;
								}}
								style={{
									axis: { stroke: isDarkMode ? 'black' : 'white' },
									tickLabels: {
										fill: isDarkMode ? 'black' : 'white',
										fontSize: 10, // Adjust the font size as necessary
										angle: 45, // You can angle your labels for better fit and visibility
										verticalAnchor: 'middle',
										textAnchor: 'start',
									},
								}}
							/>

							<VictoryLine
								data={selectedCoin.sparkline_in_7d.price.map((price, i) => ({
									x: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + (i * (24 * 60 * 60 * 1000)) / selectedCoin.sparkline_in_7d.price.length),
									y: price,
								}))}
								style={{
									data: { stroke: 'black' },
								}}
							/>
						</VictoryChart>
					</div>
				</div>
			)}
		</div>
	);
};
