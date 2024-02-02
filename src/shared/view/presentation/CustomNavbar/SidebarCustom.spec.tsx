import { render, screen } from '@testing-library/react';
import CustomNavbar from './CustomNavbar';

test('renders CustomNavbar component with the correct content', () => {
	// Render the CustomNavbar component
	render(<CustomNavbar />);

	// Use the screen object to query for elements
	const titleElement = screen.getByText(/BAYSA TEST/i);
	const nameElement = screen.getByText(/Galih Permana/i);

	// Assert that the title and name elements are present
	expect(titleElement).toBeInTheDocument();
	expect(nameElement).toBeInTheDocument();
});
