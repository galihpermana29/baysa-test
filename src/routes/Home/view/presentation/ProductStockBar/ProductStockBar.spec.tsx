import { render, screen } from '@testing-library/react';
import { DemoChart } from './ProductStockBar';

const mockConfig = {
	labels: ['Label 1', 'Label 2', 'Label 3'],
	dataset: [10, 20, 30],
	styles: {
		backgroundColor: ['red', 'green', 'blue'],
	},
	data: [],
};

const mockXAxis = 'Product';
const mockYAxis = 'Stock';

test('renders DemoChartBar component with provided configuration and dataset', () => {
	const wrapper = render(
		<DemoChart
			xAxisLabel={mockXAxis}
			yAxisLabel={mockYAxis}
			config={mockConfig}
			headerEl={<div>header el</div>}
		/>
	);

	const headerEl = wrapper.getByText('header el');

	mockConfig.labels.forEach((data) => {
		const legendTextEl = screen.getByText(data);
		expect(legendTextEl).toBeInTheDocument();
	});
	expect(headerEl).toBeInTheDocument();
	expect(wrapper).toMatchSnapshot();
});
