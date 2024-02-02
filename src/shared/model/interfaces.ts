export interface LoadingBoundaryI {
	children: JSX.Element | React.ReactNode;
	loading: boolean;
}

export interface ErrorBoundaryI {
	children: JSX.Element | React.ReactNode;
	error: Error | null;
}
