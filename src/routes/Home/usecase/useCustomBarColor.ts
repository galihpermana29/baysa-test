const UseCustomBarColor = () => {
	const generateBackgroundColor = (type: string) => {
		switch (type) {
			case 'smartphones':
				return 'rgba(255, 99, 132, 1)';
			case 'laptops':
				return 'rgba(54, 162, 235, 1)';
			case 'fragrances':
				return 'rgba(255, 206, 86, 1)';
			case 'skincare':
				return 'rgba(75, 192, 192, 1)';
			case 'groceries':
				return 'rgba(153, 102, 255, 1)';
			default:
				return 'rgba(255, 159, 64, 1)';
		}
	};

	return { generateBackgroundColor };
};

export default UseCustomBarColor;
