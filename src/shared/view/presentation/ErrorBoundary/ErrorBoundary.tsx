import { ErrorBoundaryI } from '../../../model/interfaces';

const ErrorBoundary = ({ children, error }: ErrorBoundaryI) => {
	if (error) {
		return (
			<div className="flex justify-center items-center h-screen ">
				<div className="text-center ">
					<h1 className="font-bold text-2xl">Something Went Wrong</h1>
					<div>Please reload the page or contact the administrator</div>
				</div>
			</div>
		);
	}
	return children;
};

export default ErrorBoundary;
