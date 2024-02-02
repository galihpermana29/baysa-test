import { AxiosError } from 'axios';
import { RootErrorResponseI } from '../model/apiInterface';

const UseErrorAxios = () => {
	const generateErrorMsg = (error: AxiosError) => {
		const axiosError = error as AxiosError;
		const responseData = axiosError.response?.data as
			| RootErrorResponseI
			| undefined;
		const err = responseData?.message
			? responseData?.message
			: 'Ouch, an error happen!';
		return err;
	};

	return generateErrorMsg;
};

export default UseErrorAxios;
