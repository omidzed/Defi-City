import { FaSyncAlt } from 'react-icons/fa'; // Assuming you're using react-icons library

type RefreshButtonProps = { onClick: () => void };

export const RefreshButton = ({ onClick }: RefreshButtonProps) => {
	return (
		<button
			onClick={onClick}
			className='bg-gradient-to-r border from-gray-900 to-green-700 border-green-700 text-white flex font-light items-center px-4 py-2 rounded-md'>
			<FaSyncAlt className='mr-2 text-green-400' />
			Update
		</button>
	);
};
