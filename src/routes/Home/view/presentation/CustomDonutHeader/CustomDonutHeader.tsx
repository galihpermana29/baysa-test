import { CustomBarHeaderI } from '../../../model/interfaces';

const CustomDonutHeader = ({ headerTitle, data }: CustomBarHeaderI) => {
	return (
		<div className="text-center mb-[20px]">
			<div className="text-xl">{headerTitle}</div>
			<div className="font-bold"> {data}</div>
		</div>
	);
};

export default CustomDonutHeader;
