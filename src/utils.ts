import { PRICE_PER_WORD } from "./constants";

export const calculatePrice = (
	wordCount: number,
	numberOfBetaReaders: number
): number => {
	const price = Math.ceil(
		wordCount * PRICE_PER_WORD * (1 + numberOfBetaReaders * 0.1)
	);
	return !isNaN(price) ? price : 0;
};

export const classNames = (...classes: any): string => {
	return classes.filter(Boolean).join(" ");
};
