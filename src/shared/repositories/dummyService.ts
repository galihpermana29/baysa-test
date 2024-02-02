import { RootProductResponseI } from '../model/apiInterface';
import { ApiClass } from './api';

class DummyService extends ApiClass {
	constructor(baseURL?: string, config?: Record<string, any>) {
		super(baseURL, config);
	}

	public async getProducts(): Promise<RootProductResponseI> {
		const { data } = await this.axiosInstance.get<RootProductResponseI>(
			'/products'
		);
		return data;
	}
}

export const DummyAPI = new DummyService('https://dummyjson.com/');
