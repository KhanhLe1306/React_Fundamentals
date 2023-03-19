import { useEffect } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchCart } from "./store";

let firstTime = true;

function App() {
	const showCart = useSelector((state) => state.showCart);
	const cartState = useSelector((state) => state);
	const isCartModified = useSelector((state) => state.modified);

	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(initialFetch());
	// }, [dispatch]);

	// const initialFetch = () => {
	// 	return async (dispatch) => {
	// 		const fetchData = async () => {
	// 			const response = await fetch(
	// 				"https://shoppingcart-redux-d3bc2-default-rtdb.firebaseio.com/cart.json"
	// 			);

	// 			if (!response.ok) {
	// 				throw new Error("Fetching data failed!");
	// 			}
	// 			const data = await response.json();
	// 			return data;
	// 		};

	// 		try {
	// 			const cartData = await fetchData();
	// 			dispatch(fetchCart(cartData));
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	};
	// };

	useEffect(() => {
		fetchdata();
	}, []);

	const fetchdata = async () => {
		const response = await fetch(
			"https://shoppingcart-redux-d3bc2-default-rtdb.firebaseio.com/cart.json"
		);

		if (!response.ok) {
			throw new Error("Fetching data failed!");
		}
		const data = await response.json();
		dispatch(fetchCart(data));
	};

	useEffect(() => {
		console.log("Inside useEffect!");
		if (firstTime) {
			firstTime = false;
			return;
		}

		if (!isCartModified) return;

		const fetchData = async () => {
			const response = await fetch(
				"https://shoppingcart-redux-d3bc2-default-rtdb.firebaseio.com/cart.json",
				{ method: "PUT", body: JSON.stringify(cartState) }
			);
			if (!response.ok) {
				throw new Error("Fetching data failed!");
			}
			const data = response.json();
			//return data;
		};

		fetchData().catch((err) => {
			console.log(err);
		});
	}, [cartState]);

	return (
		<Layout>
			{showCart && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
