import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { DemoChartI } from '../../../model/interfaces';
import CustomLegend from '../CustomLegend/CustomLegend';
import { Divider } from 'antd';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export function DemoChart({
	customTooltip,
	config,
	xAxisLabel,
	yAxisLabel,
	headerEl,
}: DemoChartI) {
	const chartData = {
		labels: config.labels,
		datasets: [
			{
				label: 'Stock',
				data: config.dataset,
				backgroundColor: 'rgba(75,192,192,0.6)',
				...config.styles,
			},
		],
	};

	const chartOptions: any = {
		scales: {
			x: {
				title: {
					display: true,
					text: xAxisLabel,
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: yAxisLabel,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
				...(customTooltip !== null
					? { external: (context: any) => customTooltip!(context, config.data) }
					: {}),
			},
		},
		...config,
	};

	return (
		<div>
			{headerEl}
			<Divider />
			<Bar data={chartData} options={chartOptions} />
			<CustomLegend data={config.labels} />
		</div>
	);
}
