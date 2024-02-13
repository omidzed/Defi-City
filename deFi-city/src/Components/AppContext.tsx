import { createContext } from 'react';
import { Coin } from '../utils/data-types';

export type AppContextValues = {
	coins: Coin[] | undefined;
};

export const AppContext = createContext<AppContextValues>({
	coins: undefined,
});

export const CoinProvider = AppContext.Provider;
