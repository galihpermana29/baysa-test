import { CustomBarHeaderI } from '../../../model/interfaces';

const CustomBarHeader = ({
	headerTitle,
	data,
	filterComponent,
}: CustomBarHeaderI) => {
	return (
		<div className="flex justify-between mb-[20px]">
			<div>
				<div className="text-xl">{headerTitle}:</div>
				<div className="font-bold"> {data}</div>
			</div>
			{filterComponent}
		</div>
	);
};

export default CustomBarHeader;
