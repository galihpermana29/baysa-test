import { RootProductI } from '../../../shared/model/apiInterface';

export interface SelectValueI {
	value: unknown;
	label: string;
}

export interface DemoChartI {
	customTooltip?: (context: any, data: any) => void;
	config: ConfigChartI;
	xAxisLabel: string;
	yAxisLabel: string;
	headerEl: React.ReactNode;
}
export interface DemoDonutChartI {
	config: ConfigChartI;
	headerEl: React.ReactNode;
}

export interface ConfigChartI {
	labels: string[];
	dataset: unknown[];
	data?: any[];
	styles?: StylesBarI;
}

export interface StylesBarI {
	[key: string]: unknown;
}

export interface CustomLegendI {
	data: string[];
}

export interface CustomBarHeaderI {
	data: string | number;
	filterComponent?: React.ReactNode;
	headerTitle: string;
}

export type UseGenerateLabelsT = RootProductI[];

export interface GroupedProductsI {
	[brand: string]: RootProductI[];
}

export interface ChartDataStoreI {
	data: RootProductI[];
	filteredData: RootProductI[];
	categoryState: string[];
	dataByBrand: GroupedProductsI;
	listOfCategory: SelectValueI[];
	filterByCategory: (categoryName: string[]) => void;
	setInitialData: (payloadInitialData: RootProductI[]) => void;
	setListOfCategory: () => void;
	setDataByBrand: (payloadInitialData: RootProductI[]) => void;
}
