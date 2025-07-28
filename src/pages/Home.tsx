import type { Dispatch, SetStateAction } from "react";
import { ProductCard } from "../components";
import data from "../data/data.json";
import { useTitle } from "../hooks/useTitle";

type HomeProps = {
	setCartList: Dispatch<SetStateAction<Product[]>>;
};

export const Home = ({ setCartList }: HomeProps) => {
	const products: Product[] = data.products;

	useTitle("Home");

	const handleAddProduct = (product: Product) => {
		setCartList((prev) => [...prev, product]);
	};

	return (
		<main>
			<section className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} handleAddProduct={() => handleAddProduct(product)} />
				))}
			</section>
		</main>
	);
};
