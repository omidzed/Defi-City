import { useState } from 'react';
import type { Coin } from '../utils/data-types';
import { StarComponent } from './StarComponent';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';
import { timeFormat } from 'd3-time-format';

const formatDate = timeFormat('%b %d'); // for month and day

type CoinsListProps = {
	filteredCoins: Coin[] | undefined;
	isDarkMode: boolean;
};

const formatPrice = (price: number | bigint) => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	}).format(price);
};

const style = {
	tableBody: 'w-full dark:divide-moon-700',
	tableRow: 'flex border border-top border-bottom py-2 justify-start items-end w-full hover:bg-gray-100 bg-white dark:bg-black-900 hover:dark:bg-black-800 text-md',
	tableData: 'mr-4 text-xl text-gray-900 dark:text-moon-50 bg-inherit whitespace-nowrap',
	symbol: 'text-xs flex items-end justify-end',
	image: 'w-[8%] ml-1 py-1 object-contain',
	positiveChange: 'text-green-500',
	negativeChange: 'text-red-500',
};

export const CoinsList = ({ filteredCoins, isDarkMode }: CoinsListProps) => {
	const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

	const showModal = (coin: Coin) => {
		setSelectedCoin(coin);
	};

	const closeModal = () => {
		setSelectedCoin(null);
	};
	if (!filteredCoins) {
		return <p>Loading...</p>;
	} else if (filteredCoins.length === 0) {
		return <p>No coins match your search criteria!</p>;
	} else
		return (
			<div className={`relative flex flex-col items-center border-0 whitespace-nowrap ${isDarkMode ? 'text-white bg-[#192633]' : 'text-[#192633] bg-[#fff]'}`}>
				<div className='flex text-thead items-center justify-start w-[90%] px-2 py-3 border border-l-0 border-r-0 border-b-0'>
					<span className='ml-12 w-[5%]'>#</span>
					<span className='ml-16 mr-44 w-[11%]'>Coin</span>
					<span className='mx-4 w-[7%]'>Price</span>
					<span className='mx-6 w-[10%]'>24h</span>
					<span className='mx-9 w-[10%]'>Volume</span>
					<span className='mr-5 w-[12%]'>Market Cap</span>
					<span className='mr-10 w-[10%]'>Last 7 Days</span>
				</div>
				{filteredCoins.map(coin => (
					<div
						className={`flex py-2 justify-start items-center w-[90%] border ${
							isDarkMode ? 'dark:border-gray-50 hover:bg-gray-700' : 'border-gray-400 hover:bg-blue-100'
						} border-l-0 border-r-0 border-b-0`}
						key={uuid()}>
						<div className='flex gap-4 items-center ml-4 mr-20 w-[5%]'>
							<StarComponent isDarkMode={isDarkMode} />

							<div className='ml-3'>{coin.market_cap_rank}</div>
						</div>
						<span className='flex items-center w-[20%]'>
							<img
								src={coin.image}
								alt={`Image of ${coin.id}`}
								className={style.image}
							/>
							<div className='text-thead items-baseline mr-2 ml-4 tracking-tight'>{coin.name}</div>
							<div className='text-smallest mt-1 tracking-wide'>{coin.symbol.toUpperCase()}</div>
						</span>
						<div className='ml-5 text-right tracking-wide w-[7%] mr-4'>{formatPrice(coin.current_price)}</div>
						<div className={`flex ml-10 tracking-wide w-[10%] ${coin.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-600'}`}>
							<span className='pt-1.5 mx-4'>{coin.price_change_percentage_24h < 0 ? <FaCaretDown /> : <FaCaretUp />}</span>
							{Math.abs(coin.price_change_percentage_24h).toFixed(1)}%
						</div>
						<div className='ml-5 text-right w-[10%] mr-5'>{formatPrice(coin.total_volume)}</div>
						<div className='ml-10 text-right w-[10%]'>{formatPrice(coin.market_cap)}</div>
						<div
							className='ml-16 w-[10%] h-14 mt-2 cursor-pointer'
							onClick={() => showModal(coin)}>
							<VictoryChart>
								<VictoryLine
									data={coin.sparkline_in_7d.price.map((price, i) => ({
										x: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000 + (i * (24 * 60 * 60 * 1000)) / coin.sparkline_in_7d.price.length),
										y: price,
									}))}
									style={{
										data: { stroke: isDarkMode ? '#ffffff' : '#c43a31' },
									}}
								/>
							</VictoryChart>
						</div>
					</div>
				))}
				{selectedCoin && (
					<div
						className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center cursor-pointer'
						onClick={closeModal}>
						<div
							className='bg-white absolute top-40 m-4 p-20 dark:bg-[#333] rounded-lg cursor-auto'
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
