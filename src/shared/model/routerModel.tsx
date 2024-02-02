import { createBrowserRouter } from 'react-router-dom';

import DashboardLayoutContainer from '../view/presentation/DashboardLayout/DashboardLayoutContainer.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <DashboardLayoutContainer />,
	},
]);
