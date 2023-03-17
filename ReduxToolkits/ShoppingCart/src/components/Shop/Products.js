import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";

const Products = () => {
	const productsList = useSelector((state) => state.products);
	const products = productsList.map((p) => (
    <ProductItem key={p.id} id={p.id} title={p.title} price={p.price} description={p.description} />
	));
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>{products}</ul>
		</section>
	);
};

export default Products;
