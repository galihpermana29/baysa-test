import '@testing-library/jest-dom';
jest.mock('react-chartjs-2', () => ({
	Doughnut: () => null,
	Bar: () => null,
}));
