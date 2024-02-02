import { RootProductI } from '@/shared/model/apiInterface';
import { GroupedProductsI } from '../../model/interfaces';
import UseGenerateDataset from '../useGenerateDataset';

const mockGroupedData: GroupedProductsI = {
	apple: [
		{
			id: 1,
			title: 'apple',
			description: 'apple desc',
			price: 9,
			discountPercentage: 2,
			rating: 4,
			stock: 2,
			brand: 'brand apple',
			category: 'smartphones',
			thumbnail: '',
			images: [''],
		},
		{
			id: 1,
			title: 'macbook',
			description: 'macbook desc',
			price: 9,
			discountPercentage: 2,
			rating: 4,
			stock: 2,
			brand: 'brand apple',
			category: 'laptops',
			thumbnail: '',
			images: [''],
		},
	],
	samsung: [
		{
			id: 1,
			title: 'samsung',
			description: 'samsung desc',
			price: 9,
			discountPercentage: 2,
			rating: 4,
			stock: 2,
			brand: 'brand samsung',
			category: 'smartphones',
			thumbnail: '',
			images: [''],
		},
	],
};

const mockOriginData: RootProductI[] = [
	{
		id: 1,
		title: 'apple',
		description: 'apple desc',
		price: 9,
		discountPercentage: 2,
		rating: 4,
		stock: 94,
		brand: 'brand apple',
		category: 'smartphones',
		thumbnail: '',
		images: [''],
	},
];

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
