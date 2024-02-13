import { AppContextValues, AppContext } from '../Components/AppContext';
import { useContext } from 'react';

export function useCoins(): AppContextValues {
	const userContext = useContext(AppContext);
	return userContext;
}
