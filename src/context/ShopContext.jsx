import { createContext, useState } from "react";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	let [productsData, setProductsData] = useState([]);
	const currency = "$";
	const delivery_fee = 10;
	const [activeSearch, setActiveSearch] = useState(false);
	const [search, setSearch] = useState('');
	const value = {
		productsData, currency, delivery_fee, search, setSearch, activeSearch, setActiveSearch
	};
	return (
		<ShopContext.Provider value={value}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
