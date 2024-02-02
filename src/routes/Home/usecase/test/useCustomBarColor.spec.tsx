import UseCustomBarColor from '../useCustomBarColor';

describe('UseCustomBarColor', () => {
	it('should return correct background color for smartphones', () => {
		const { generateBackgroundColor } = UseCustomBarColor();
		const result = generateBackgroundColor('smartphones');

		expect(result).toBe('rgba(255, 99, 132, 1)');
	});

	it('should return correct background color for laptops', () => {
		const { generateBackgroundColor } = UseCustomBarColor();
		const result = generateBackgroundColor('laptops');

		expect(result).toBe('rgba(54, 162, 235, 1)');
	});

	it('should return default background color for unknown type', () => {
		const { generateBackgroundColor } = UseCustomBarColor();
		const result = generateBackgroundColor('unknownType');

		expect(result).toBe('rgba(255, 159, 64, 1)');
	});
});
