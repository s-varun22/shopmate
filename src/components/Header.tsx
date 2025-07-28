import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

type HeaderProps = {
	cartList?: Product[];
};

export const Header = ({ cartList = [] }: HeaderProps) => {
	return (
		<header>
			<Link to="/" className="logo">
				<img src={logo} alt="logo" />
			</Link>
			<div className="">Shopping App</div>
			<Link to="/cart" className="items">
				<i className="bi bi-cart4"></i>
				<span>Cart {cartList.length !== 0 && `: ${cartList.length}`}</span>
			</Link>
		</header>
	);
};
