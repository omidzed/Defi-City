import { createContext, ReactNode } from 'react';
import type { Coin } from '../types/data-types';
import { useFetchCoins } from '../hooks/useFetchCoins';

export type AppContextValues = {
	coins: Coin[] | undefined;
	loading: boolean | undefined;
	error: Error | null;
};

export const AppContext = createContext<AppContextValues>({
	coins: undefined,
	loading: false,
	error: null,
});

type CoinProviderProps = {
	children: ReactNode;
};

export const CoinProvider: React.FC<CoinProviderProps> = ({ children }) => {
	const { coins, loading, error } = useFetchCoins();

	return <AppContext.Provider value={{ coins, loading, error }}> {children}</AppContext.Provider>;
};
