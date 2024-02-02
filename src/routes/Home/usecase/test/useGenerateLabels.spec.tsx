import UseGenerateLabels from '../useGenerateLabels';
import { mockOriginData } from '../../model/data/mockData';

describe('check labels generated for legend and x axis generated for chart', () => {
	it('iphone stock should be 94 and total stock of all product should be 94', () => {
		const labels = UseGenerateLabels(mockOriginData, 'brand');
		expect(labels[0]).toBe('apple');
	});
});
