import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { message } from 'antd';
import UseErrorAxios from '../../../shared/usecase/useErrorAxios';
import { DummyAPI } from '../../../shared/repositories/dummyService';

const UseGetChartData = (
	setInitialData: any,
	setListOfCategory: any,
	setDataByBrand: any
) => {
	const generateErrorMsg = UseErrorAxios();

	const getProducts = async () => {
		try {
			const { products } = await DummyAPI.getProducts();
			setInitialData(products);
			setListOfCategory();
			setDataByBrand(products);
			return products;
		} catch (error) {
			const errorMsg = generateErrorMsg(error as AxiosError);
			message.error(errorMsg);
		}
	};

	const { data, error, isPending } = useQuery({
		queryKey: ['products'],
		queryFn: getProducts,
	});

	return { isPending, data, error };
};

export default UseGetChartData;
