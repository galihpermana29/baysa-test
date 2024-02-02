import { RootProductI } from '@/shared/model/apiInterface';
import UseGenerateLabels from '../useGenerateLabels';

const mockOriginData: RootProductI[] = [
	{
		id: 1,
		title: 'apple',
		description: 'apple desc',
		price: 9,
		discountPercentage: 2,
		rating: 4,
		stock: 94,
		brand: 'apple',
		category: 'smartphones',
		thumbnail: '',
		images: [''],
	},
];

describe('check labels generated for legend and x axis generated for chart', () => {
	it('iphone stock should be 94 and total stock of all product should be 94', () => {
		const labels = UseGenerateLabels(mockOriginData, 'brand');
		expect(labels[0]).toBe('apple');
	});
});
