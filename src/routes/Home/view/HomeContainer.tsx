import { DemoChart } from './presentation/ProductStockBar/ProductStockBar';
import { Select } from 'antd';
import { useManipulateDataStore } from '../usecase/useManipulateDataStore';
import CustomBarHeader from './presentation/CustomBarHeader/CustomBarHeader';
import ErrorBoundary from '../../../shared/view/presentation/ErrorBoundary/ErrorBoundary';
import LoadingBoundary from '../../../shared/view/presentation/LoadingBoundary/LoadingBoundary';
import UseCustomBarColor from '../usecase/useCustomBarColor';
import UseCustomTooltip from '../usecase/useCustomTooltip';
import UseGenerateDataset from '../usecase/useGenerateDataset';
import UseGenerateLabels from '../usecase/useGenerateLabels';
import UseGetChartData from '../repository/useGetChartData';
import DemoDonutChart from './presentation/ProductDonutChart/ProductDonutChart';
import CustomDonutHeader from './presentation/CustomDonutHeader/CustomDonutHeader';
import { UseGenerateLabelsT } from '../model/interfaces';

const HomeContainer = () => {
	/**
	 * Client side state using Zustand
	 * Here is some state on client side that we used in component
	 */
	const {
		data,
		dataByBrand,
		filterByCategory,
		filteredData,
		listOfCategory,
		setInitialData,
		setListOfCategory,
		setDataByBrand,
	} = useManipulateDataStore((state) => ({
		data: state.data,
		dataByBrand: state.dataByBrand,
		filterByCategory: state.filterByCategory,
		filteredData: state.filteredData,
		listOfCategory: state.listOfCategory,
		setInitialData: state.setInitialData,
		setListOfCategory: state.setListOfCategory,
		setDataByBrand: state.setDataByBrand,
	}));

	/**
	 * Server side state using React Query
	 * We are doing fetching to backend in here
	 */

	const { isPending, error } = UseGetChartData(
		setInitialData,
		setListOfCategory,
		setDataByBrand
	);

	/**
	 * Some use case on client side
	 * After some data is already idle to use, we are initialize
	 * some custom function/hooks that we want to use
	 */

	const { productExternalTooltip } = UseCustomTooltip();
	const { generateBackgroundColor } = UseCustomBarColor();
	/**
	 * Generate dataset and label for bar chart
	 * We want to display the stock of every product
	 */
	const {
		dataset,
		dataSource,
		total: totalStock,
	} = UseGenerateDataset(
		filteredData.length > 0 ? filteredData : data,
		'stock'
	);

	const labelsFromTitle = UseGenerateLabels(
		dataSource as UseGenerateLabelsT,
		'title'
	);

	/**
	 * Generate dataset and label for donut chart
	 * We want to display total product in every brands
	 */
	const labelsFromBrand = Object.keys(dataByBrand);
	const { dataset: datasetByBrand, total: totalBrand } = UseGenerateDataset(
		dataByBrand,
		'brand'
	);

	return (
		<LoadingBoundary loading={isPending}>
			<ErrorBoundary error={error}>
				<div className="flex gap-[20px]">
					<div className="flex-1 p-[20px] rounded-lg shadow-md">
						<DemoChart
							customTooltip={productExternalTooltip}
							xAxisLabel="Product Name"
							yAxisLabel="Product Stock"
							config={{
								labels: labelsFromTitle,
								dataset: dataset,
								data: dataSource as UseGenerateLabelsT,
								/**
								 * We can put any other styles based on chart.js documenatation
								 */
								styles: {
									borderRadius: 20,
									/**
									 * We can passed custom background color using an array
									 * backgroundColor: ['gray', 'aquamarine', 'orange', 'black'],
									 * or by a function
									 */
									backgroundColor: (c) => {
										return generateBackgroundColor(
											dataSource[c.dataIndex].category as string
										);
									},
								},
							}}
							headerEl={
								<CustomBarHeader
									headerTitle="Product Stock Data"
									data={totalStock}
									filterComponent={
										<Select
											mode="multiple"
											allowClear
											placeholder="Select categories"
											options={listOfCategory}
											className="min-w-[200px]"
											onChange={filterByCategory}
										/>
									}
								/>
							}
						/>
					</div>
					<div className="flex-1 flex items-center p-[20px] rounded-lg shadow-md">
						<DemoDonutChart
							headerEl={
								<CustomDonutHeader
									headerTitle="Product Brand Total"
									data={totalBrand}
								/>
							}
							config={{
								labels: labelsFromBrand,
								dataset: datasetByBrand,
								/**
								 * We can put any other styles based on chart.js documenatation
								 */
								styles: {
									/**
									 * We can passed custom background color using an array
									 * backgroundColor: ['gray', 'aquamarine', 'orange', 'black'],
									 * or by a function
									 */
									backgroundColor: (c) => {
										return generateBackgroundColor(
											data[c.dataIndex].category as string
										);
									},
								},
							}}
						/>
					</div>
				</div>
			</ErrorBoundary>
		</LoadingBoundary>
	);
};

export default HomeContainer;
