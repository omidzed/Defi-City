export function formatPrice(price: number | bigint): string {
	if (typeof price === 'bigint') {
		// Handle BigInt values
		const priceNumber = Number(price); // Convert to number for comparison
		if (priceNumber >= 1) {
			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 0,
				maximumFractionDigits: 2,
			});
			return formatter.format(priceNumber);
		} else {
			return `${priceNumber.toFixed(10)}`; // Show as float with 10 decimal places
		}
	} else {
		// Handle regular numbers
		if (price >= 1) {
			const formatter = new Intl.NumberFormat('en-US', {
				style: 'currency',
				currency: 'USD',
				minimumFractionDigits: 0,
				maximumFractionDigits: 2,
			});
			return formatter.format(price);
		} else {
			return `${price.toFixed(5)}`; // Show as float with 10 decimal places
		}
	}
}

export const formatDate = (date: Date): string => {
	return `${date.getMonth() + 1}/${date.getDate()}`;
};

export const formatPriceWithDollar = (price: any) => {
	if (price >= 1000) {
		return `$${(price / 1000).toFixed(0)}k`;
	}
	return `$${price}`;
};
