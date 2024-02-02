import { RootProductI } from '@/shared/model/apiInterface';
import { GroupedProductsI } from '../interfaces';

export const mockGroupedData: GroupedProductsI = {
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

export const mockOriginData: RootProductI[] = [
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
