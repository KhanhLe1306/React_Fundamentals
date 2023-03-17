import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
	const cart = useSelector((state) => state.cart);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cart.map((c) => (
					<CartItem
						key={c.id}
            item={{
              id: c.id,
							title: c.title,
							quantity: c.quantity,
							price: c.price,
							total: c.price * c.quantity,
						}}
					/>
				))}
			</ul>
		</Card>
	);
};

export default Cart;
