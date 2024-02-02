import { render, screen } from '@testing-library/react';
import CustomLegend from './CustomLegend';

const mockData = ['iphone', 'samsung', 'xiaomi'];

test('testing custom legend chart', () => {
	render(<CustomLegend data={mockData} />);

	mockData.forEach((data) => {
		const legendTextEl = screen.getByText(data);
		expect(legendTextEl).toBeInTheDocument();
	});
});
