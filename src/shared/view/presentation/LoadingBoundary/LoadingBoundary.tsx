import { Spin } from 'antd';
import { LoadingBoundaryI } from '../../../model/interfaces';

const LoadingBoundary = ({ children, loading }: LoadingBoundaryI) => {
	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen ">
				<Spin data-testid="spin-container" />
			</div>
		);
	}
	return children;
};

export default LoadingBoundary;
