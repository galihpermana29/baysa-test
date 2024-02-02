import { create } from 'zustand';
import { RootProductI } from '../../../shared/model/apiInterface';
import { ChartDataStoreI, GroupedProductsI } from '../model/interfaces';

export const useManipulateDataStore = create<ChartDataStoreI>()((set) => ({
	data: [],
	dataByBrand: {},
	filteredData: [],
	categoryState: [],
	listOfCategory: [],
	filterByCategory: (categoryName: string[]) =>
		set((state) => {
			const result = state.data?.filter((dx) =>
				categoryName.includes(dx.category)
			);
			if (result.length) {
				state.setDataByBrand(result);
			} else {
				state.setDataByBrand(state.data);
			}
			return { filteredData: result };
		}),
	setListOfCategory: () =>
		set((state) => {
			const newCats: string[] = [];
			state.data.forEach((dx) => {
				if (newCats.indexOf(dx.category) === -1) newCats.push(dx.category);
			});
			const result = newCats.map((dx) => ({ value: dx, label: dx }));
			return { listOfCategory: result };
		}),
	setDataByBrand: (payload: RootProductI[]) =>
		set(() => {
			const groupedProducts = payload.reduce((result, product) => {
				if (!result[product.brand]) {
					result[product.brand] = [];
				}
				result[product.brand].push(product);
				return result;
			}, {} as GroupedProductsI);
			return { dataByBrand: groupedProducts };
		}),
	setInitialData: (payloadInitialData: RootProductI[]) =>
		set(() => {
			return { data: payloadInitialData };
		}),
}));
