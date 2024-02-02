import { Outlet, useLocation } from 'react-router-dom';
import SidebarCustom from '../SidebarCustom/SidebarCustom';
import HomeContainer from '../../../../routes/Home/view/HomeContainer';
import CustomNavbar from '../CustomNavbar/CustomNavbar';

const DashboardLayoutContainer = () => {
	const loc = useLocation();

	return (
		<div>
			<CustomNavbar />
			<div className="flex">
				<div className="w-full max-w-[250px]">
					<SidebarCustom />
				</div>
				<div className="w-full flex-1 p-[20px] bg-slate-200">
					<div className="min-h-[90vh] bg-white rounded-lg p-[30px]">
						{loc.pathname === '/' && <HomeContainer />}
						{loc.pathname !== '/' && <Outlet />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayoutContainer;
