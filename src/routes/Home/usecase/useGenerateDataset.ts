import { GroupedProductsI, UseGenerateLabelsT } from '../model/interfaces';

/**
 * This hooks will generate dataset for chart
 * and also return the original data and total of dataset
 */

const UseGenerateDataset = (
	data: UseGenerateLabelsT | GroupedProductsI,
	dataKey: string = 'stock'
) => {
	if (dataKey === 'brand') {
		const brandTotals: number[] = [];
		Object.keys(data).forEach((brand) => {
			const total: number = data[brand].length;
			brandTotals.push(total);
		});

		const total = brandTotals.reduce((a, b) => a + b, 0);
		return { dataset: brandTotals, dataSource: data, total };
	}

	const dataset = (data as UseGenerateLabelsT).map(
		(product) => product[dataKey]
	);
	const total = dataset.reduce((a, b) => a + b, 0);
	return { dataset, dataSource: data, total };
};

export default UseGenerateDataset;
