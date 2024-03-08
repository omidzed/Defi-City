import { Navbar } from './NavBar';
import { DataGraphs } from './DataGraphs';
import { SearchableList } from './SearchableList';

type HomePageProps = {
	isDarkMode: boolean;
};

export const HomePage = ({ isDarkMode }: HomePageProps) => {
	return (
		<div>
			<Navbar isDarkMode={isDarkMode} />
			<DataGraphs />
			<SearchableList isDarkMode={isDarkMode} />
		</div>
	);
};
