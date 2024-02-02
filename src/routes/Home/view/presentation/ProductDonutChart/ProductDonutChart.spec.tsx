import { render } from '@testing-library/react';
import DemoDonutChart from './ProductDonutChart';

const mockConfig = {
	labels: ['Label 1', 'Label 2', 'Label 3'],
	dataset: [10, 20, 30],
	styles: {
		backgroundColor: ['red', 'green', 'blue'],
	},
	data: [],
};

test('renders DemoDonutChart component with provided configuration and dataset', () => {
	const wrapper = render(
		<DemoDonutChart config={mockConfig} headerEl={<div>header el</div>} />
	);

	const headerEl = wrapper.getByText('header el');

	expect(headerEl).toBeInTheDocument();
	expect(wrapper).toMatchSnapshot();
});
