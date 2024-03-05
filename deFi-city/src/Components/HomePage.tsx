import { Navbar } from './NavBar';
import { DataGraphs } from './DataGraphs';
import { SearchableList } from './SearchableList';

type HomePageProps = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};

export const HomePage = ({ isDarkMode, toggleDarkMode }: HomePageProps) => {
	return (
		<div>
			<Navbar
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
			/>
			<DataGraphs />
			<SearchableList
				isDarkMode={isDarkMode}
				toggleDarkMode={toggleDarkMode}
			/>
		</div>
	);
};
