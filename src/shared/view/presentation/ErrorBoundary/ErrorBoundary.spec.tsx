import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
	test('renders children when no error', () => {
		const { getByText } = render(
			<ErrorBoundary error={null}>
				<div>Child Component</div>
			</ErrorBoundary>
		);

		expect(getByText('Child Component')).toBeInTheDocument();
	});

	test('renders error message when error is provided', () => {
		const errorMessage = 'Test error message';
		const { getByText } = render(
			<ErrorBoundary error={new Error(errorMessage)}>
				<div>Child Component</div>
			</ErrorBoundary>
		);

		expect(getByText('Something Went Wrong')).toBeInTheDocument();
		expect(
			getByText('Please reload the page or contact the administrator')
		).toBeInTheDocument();
	});
});
