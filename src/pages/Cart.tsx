import type { Dispatch, SetStateAction } from "react";
import { Card } from "../components";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

type CartProps = {
	cartList?: Product[];
	setCartList: Dispatch<SetStateAction<Product[]>>;
};

export const Cart = ({ cartList = [], setCartList }: CartProps) => {
	const navigate = useNavigate();

	useTitle("Cart");

	const handleRemoveProduct = (id: number) => {
		setCartList((prev: Product[]) => prev.filter((product: Product) => product.id !== id));
	};
	return (
		<main>
			<section className="cart">
				<h1>Cart Items: {cartList.length}</h1>
				{cartList.length === 0 ? (
					<p className="cart">Your cart is empty.</p>
				) : (
					cartList.map((product) => (
						<Card key={product.id} product={product} handleRemoveProduct={handleRemoveProduct} />
					))
				)}
			</section>
			<div className="home">
				<button onClick={() => navigate("/")}>Go to Home</button>
			</div>
		</main>
	);
};
