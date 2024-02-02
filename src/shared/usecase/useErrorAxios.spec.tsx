import { AxiosError } from 'axios';
import UseErrorAxios from './useErrorAxios';

describe('UseErrorAxios', () => {
	test('returns error message from response data', () => {
		const generateErrorMsg = UseErrorAxios();
		const axiosError = {
			message: 'Request failed with status code 404',
			response: {
				data: {
					message: 'Not Found',
				},
			},
		};

		const result = generateErrorMsg(axiosError as AxiosError);

		expect(result).toEqual('Not Found');
	});

	test('returns default error message if response data has no message', () => {
		const generateErrorMsg = UseErrorAxios();
		const axiosError = {
			message: 'Request failed with status code 500',
			response: {
				data: {},
			},
		};

		const result = generateErrorMsg(axiosError as AxiosError);

		expect(result).toEqual('Ouch, an error happen!');
	});

	test('returns default error message if response data is undefined', () => {
		const generateErrorMsg = UseErrorAxios();
		const axiosError = {
			message: 'Request failed with status code 500',
			response: undefined,
		};

		const result = generateErrorMsg(axiosError as AxiosError);

		expect(result).toEqual('Ouch, an error happen!');
	});
});
