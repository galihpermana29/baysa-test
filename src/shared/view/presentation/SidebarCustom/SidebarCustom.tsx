import { Link } from 'react-router-dom';

const SidebarCustom = () => {
	return (
		<div
			data-testid="sidebar-custom"
			className="flex flex-col justify-between max-w-[400px] min-h-screen h-full bg-white gap-[10px] p-[20px] ">
			<div className="flex flex-col gap-[20px]">
				<div>
					<Link to="/" className="text-black">
						Dashboard
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SidebarCustom;
