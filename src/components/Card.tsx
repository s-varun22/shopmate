import "./Card.css";

type CardProp = {
	product: Product;
	handleRemoveProduct?: (id: number) => void; // Optional prop
};

export const Card = ({ product, handleRemoveProduct }: CardProp) => {
	return (
		<div className="cartCard">
			<img src={product.image} alt="product image" />
			<p className="productName">{product.name}</p>
			<p className="productPrice">{product.price}€</p>

			{handleRemoveProduct && (
				<button onClick={() => handleRemoveProduct(product.id)} className="remove-button">
					Remove
				</button>
			)}
		</div>
	);
};
