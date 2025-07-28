import { useEffect } from "react";

export const useTitle = (title: string) => {
	useEffect(() => {
		document.title = `${title} | Shop Mate`;
	}, [title]);

	return null;
};
