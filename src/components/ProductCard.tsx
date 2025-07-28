import "./Product.css";

type ProductProps = {
	product: Product;
	handleAddProduct: (product: Product) => void;
};

export const ProductCard = ({ product, handleAddProduct }: ProductProps) => {
	return (
		<div className="product">
			<img src={product.image} alt={product.name} />
			<p className="name">{product.name}</p>
			<div className="action">
				<p>{product.price}€</p>
				<button onClick={() => handleAddProduct(product)}>Add to Cart</button>
			</div>
		</div>
	);
};
