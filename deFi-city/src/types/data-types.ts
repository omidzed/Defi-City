export type Coin = {
	id: string;
	name: string;
	symbol: string;
	image: string;
	current_price: number;
	market_cap: number;
	market_cap_rank: number;
	total_volume: number;
	price_change_percentage_24h: number;
	circulating_supply: number;
	total_supply: number;
	historicalData: number[];
	sparkline_in_7d: Sparkline;
};

export type Sparkline = {
	price: number[];
};

export type ChartData = Array<[number]>;

interface CoinData {
	sparkline_in_7d: {
		price: number[];
	};
}

// Function to calculate 7-day percent change
export const sevenDayTrend = (data: CoinData): number => {
	const { sparkline_in_7d } = data;
	const prices = sparkline_in_7d?.price;

	if (!prices || prices.length < 2) {
		return 0;
	}

	const firstPrice = prices[0];
	const lastPrice = prices[prices.length - 1];
	const percentChange = ((lastPrice - firstPrice) / firstPrice) * 100;
	return percentChange;
};
