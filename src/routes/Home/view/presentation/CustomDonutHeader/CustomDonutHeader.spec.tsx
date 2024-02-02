import { render, screen } from '@testing-library/react';
import CustomDonutHeader from './CustomDonutHeader';

const mockData = '190';
const mockTitle = 'title';

test('testing the Donut Custom Header', () => {
	render(<CustomDonutHeader data={mockData} headerTitle={mockTitle} />);

	const dataEl = screen.getByText(mockData);
	const titleEel = screen.getByText(mockTitle);

	expect(dataEl).toBeInTheDocument();
	expect(titleEel).toBeInTheDocument();
});
