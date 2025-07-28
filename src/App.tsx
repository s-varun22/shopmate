import { useState } from "react";
import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Cart, Home } from "./pages";

export function App() {
	const [cartList, setCartList] = useState<Product[]>([]);

	return (
		<>
			<Header cartList={cartList} />
			<Routes>
				<Route path="/" element={<Home setCartList={setCartList} />} />
				<Route path="/cart" element={<Cart cartList={cartList} setCartList={setCartList} />} />
			</Routes>
			<Footer />
		</>
	);
}
