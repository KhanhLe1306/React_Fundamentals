import { configureStore, createSlice } from "@reduxjs/toolkit";

const products = [
	{
		id: 1,
		title: "CPU",
		price: 499,
		description: "i7 8700K",
	},
	{
		id: 2,
		title: "RAM",
		price: 299,
		description: "DDR4 3200 MHz",
	},
];

const initialState = {
	products: products,
	cart: [],
	itemCount: 0,
	showCart: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		toggleCart: (state) => {
			state.showCart = !state.showCart;
		},
		addItem: (state, action) => {
			state.itemCount++;
			const { id, title, price } = action.payload;
			const product = state.cart.find((p) => p.id === id);
			if (product) {
				const newCart = state.cart.map((p) => {
					console.log(p);
					if (p.id === product.id) {
						return { ...p, quantity: p.quantity + 1 };
					} else {
						return p;
					}
				});
				state.cart = newCart;
			} else {
				state.cart.push({ id, title, price, quantity: 1 });
			}
		},
		incrementItemCount: (state, action) => {
			state.itemCount++;
			const itemId = action.payload;
			const newCart = state.cart.map((c) => {
				if (c.id === itemId) {
					return { ...c, quantity: c.quantity + 1 };
				} else {
					return c;
				}
			});
			state.cart = newCart;
		},
		decrementItemCount: (state, action) => {
			state.itemCount--;
			const itemId = action.payload;
			const newCart = state.cart.map((c) => {
				if (c.id === itemId) {
					return { ...c, quantity: c.quantity - 1 };
				} else {
					return c;
				}
			});
			state.cart = newCart;
		},
	},
});

export const { toggleCart, addItem, incrementItemCount, decrementItemCount } =
	cartSlice.actions;

const store = configureStore({
	reducer: cartSlice.reducer,
});

//store.subscribe((state) => console.log(state.cart));

export default store;
