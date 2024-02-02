import UseGenerateDataset from '../useGenerateDataset';
import { mockGroupedData, mockOriginData } from '../../model/data/mockData';

describe('check dataset generated for chart', () => {
	it('apple total product should be 2 ', () => {
		const { dataset } = UseGenerateDataset(mockGroupedData, 'brand');
		expect(dataset[0]).toBe(2);
	});

	it('samsung total product should be 1 and total all product is 3', () => {
		const { dataset, total } = UseGenerateDataset(mockGroupedData, 'brand');
		expect(dataset[1]).toBe(1);
		expect(total).toBe(3);
	});

	it('iphone stock should be 94 and total stock of all product should be 94', () => {
		const { dataset, total } = UseGenerateDataset(mockOriginData, 'stock');
		expect(dataset[0]).toBe(94);
		expect(total).toBe(94);
	});
});
