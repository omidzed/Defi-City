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

