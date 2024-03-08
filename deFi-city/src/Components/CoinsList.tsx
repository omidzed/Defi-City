import type { Coin } from '../utils/data-types';
import { FaRegStar } from 'react-icons/fa';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6';
//import { VictoryChart, VictoryLine, VictoryAxis } from 'victory';

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
	if (!filteredCoins) {
		return <p>Loading...</p>;
	} else if (filteredCoins.length === 0) {
		return <p>No coins match your search criteria!</p>;
	} else
		return (
			<div className='flex flex-col items-center border-0 whitespace-nowrap'>
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
					<>
						<div
							className='flex px-2 py-2 justify-start items-center w-[90%] border dark:border-gray-50 border-gray-400 border-l-0 border-r-0 border-b-0 hover:bg-gray-800'
							key={coin.id}>
							<div className='flex gap-4 items-center ml-4 mr-20 w-[5%]'>
								<div>
									<FaRegStar color={isDarkMode ? 'white' : '#0F172A'} />
								</div>
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
						</div>
						<div className='w-full mt-2'>
							{/* {coin.historicalData && (
								<VictoryChart
									width={400}
									height={200}
									scale={{ x: 'time' }}>
									<VictoryLine
										data={coin.historicalData}
										style={{ data: { stroke: '#c43a31' } }}
									/>
									<VictoryAxis tickFormat={x => new Date(x).toLocaleDateString()} />
									<VictoryAxis dependentAxis />
								</VictoryChart>
							)} */}
						</div>
					</>
				))}
			</div>
		);
};
