export interface RootLoginResponseI {
	success: boolean;
	data: LoginResponseI;
}

export interface LoginResponseI {
	data: LoginReturnedDataI;
	user: {
		name: string;
	};
}

export interface LoginReturnedDataI {
	access_token: string;
	token_type: string;
	expires_at: string;
}

export interface RootLoginPayloadI {
	email: string;
	password: string;
	remember_me: number;
}

export interface RootErrorResponseI {
	success: boolean;
	message: string;
}

export interface RootShippingCompsResponseI {
	success: boolean;
	data: ShippingCompsDataI[];
	message: string;
	time: number;
}

export interface RootDeleteShippingCompsI {
	success: boolean;
	data: string;
	message: string;
	time: number;
}

export interface ShippingCompsDataI {
	id: number;
	name: string;
	key: number;
}

export interface RootShippingCompsPayloadI {
	name: string;
}

export interface RootProductResponseI {
	products: RootProductI[];
}

export interface RootProductI {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];
}
