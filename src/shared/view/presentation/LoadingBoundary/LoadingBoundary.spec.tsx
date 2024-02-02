import { render } from '@testing-library/react';
import LoadingBoundary from './LoadingBoundary';

describe('ErrorBoundary', () => {
	test('renders children when no loading', () => {
		const { getByText } = render(
			<LoadingBoundary loading={false}>
				<div>Child Component</div>
			</LoadingBoundary>
		);

		expect(getByText('Child Component')).toBeInTheDocument();
	});

	test('renders error message when loading is provided', () => {
		const { getByTestId } = render(
			<LoadingBoundary loading={true}>
				<div>Child Component</div>
			</LoadingBoundary>
		);
		expect(getByTestId('spin-container')).toBeInTheDocument();
	});
});
