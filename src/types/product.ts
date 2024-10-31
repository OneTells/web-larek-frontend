// Типы для данных из API
type CategoryType =
	| 'софт-скил'
	| 'хард-скил'
	| 'кнопка'
	| 'другое'
	| 'дополнительное';

export type Product = {
	id: string;
	title: string;
	price: number | null;
	description: string;
	category: CategoryType;
	image: string;
};

export type ProductsList = {
	items: Product[];
	total: number;
};
