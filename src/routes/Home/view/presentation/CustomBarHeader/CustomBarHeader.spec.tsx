import { render, screen } from '@testing-library/react';
import CustomBarHeader from './CustomBarHeader';

const mockData = 'Mock Data';
const mockHeaderTitle = 'Mock Header Title';
const mockFilterComponent = <div>Mock Filter Component</div>;

test('renders CustomBarHeader component with the correct content', () => {
	render(
		<CustomBarHeader
			headerTitle={mockHeaderTitle}
			data={mockData}
			filterComponent={mockFilterComponent}
		/>
	);
	const headerTitleElement = screen.getByText(
		new RegExp(`${mockHeaderTitle}:`, 'i')
	);
	const dataElement = screen.getByText(mockData);
	const filterComponentElement = screen.getByText(/Mock Filter Component/i);

	expect(headerTitleElement).toBeInTheDocument();
	expect(dataElement).toBeInTheDocument();
	expect(filterComponentElement).toBeInTheDocument();
});
