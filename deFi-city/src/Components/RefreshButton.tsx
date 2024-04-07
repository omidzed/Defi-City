import { FaSyncAlt } from 'react-icons/fa'; // Assuming you're using react-icons library

type RefreshButtonProps = { onClick: () => void };

export const RefreshButton = ({ onClick }: RefreshButtonProps) => {
	return (
		<button
			onClick={onClick}
			className='bg-blue-500 text-white px-4 py-2 rounded-md'>
			<FaSyncAlt className='mr-2' />
			Refresh Data
		</button>
	);
};

export default RefreshButton;
