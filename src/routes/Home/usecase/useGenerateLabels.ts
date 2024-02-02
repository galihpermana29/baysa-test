import { UseGenerateLabelsT } from '../model/interfaces';

/**
 *
 * This hooks will generate labels for x axis for chart
 */
const UseGenerateLabels = (
	data: UseGenerateLabelsT,
	dataKey: string = 'title'
) => {
	const labels = data.map((product) => product[dataKey]);
	return labels;
};

export default UseGenerateLabels;
