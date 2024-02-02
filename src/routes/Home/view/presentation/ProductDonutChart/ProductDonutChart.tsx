import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DemoDonutChartI } from '../../../model/interfaces';

ChartJS.register(ArcElement, Tooltip, Legend);

const DemoDonutChart = ({ config, headerEl }: DemoDonutChartI) => {
	const data = {
		labels: config.labels,
		datasets: [
			{
				label: 'Total product',
				data: config.dataset,
				borderWidth: 1,
				...config.styles,
			},
		],
	};

	const donutOptions: any = {
		plugins: {
			legend: {
				display: false,
			},
		},
		...config,
	};
	return (
		<div>
			{headerEl}
			<Doughnut data={data} options={donutOptions} />
		</div>
	);
};

export default DemoDonutChart;
