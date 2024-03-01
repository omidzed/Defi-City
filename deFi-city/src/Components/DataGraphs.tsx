import { VictoryChart, VictoryLine } from 'victory';
import { prices } from '../utils/data-types';

export const DataGraphs: React.FC = () => {
	const data = prices.map(([x, y]) => ({ x: new Date(x), y }));

	return (
		<div className='bg-[#192633] w-[6%] absolute right-48 top-80'>
			<VictoryChart scale={{ x: 'time' }}>
				<VictoryLine
					data={data}
					style={{ data: { stroke: '#94F905' } }}
				/>
			</VictoryChart>
		</div>
	);
};
