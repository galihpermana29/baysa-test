import { CustomLegendI } from '../../../model/interfaces';

const CustomLegend = ({ data }: CustomLegendI) => {
	return (
		<div className="flex max-w-[800px] overflow-x-scroll gap-[10px] mt-[20px]">
			{data.map((product, index) => (
				<div
					key={index}
					className="flex items-center gap-[10px] bg-slate-50 min-w-max p-[10px] rounded-lg">
					<div className="w-[10px] h-[10px] rounded-full bg-black" />
					<div className="flex-1">{product}</div>
				</div>
			))}
		</div>
	);
};

export default CustomLegend;
