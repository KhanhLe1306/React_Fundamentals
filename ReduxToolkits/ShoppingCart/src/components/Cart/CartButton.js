import classes from "./CartButton.module.css";

import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const itemCount = useSelector((state) => state.itemCount);

	const toggleCartHandler = () => {
		dispatch(toggleCart());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{itemCount}</span>
		</button>
	);
};

export default CartButton;
