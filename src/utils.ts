import { PRICE_PER_WORD } from "./constants";

export const calculatePrice = (wordCount: number): number => {
	return Math.ceil(
		wordCount && wordCount > 0 ? wordCount * PRICE_PER_WORD : 0
	);
};

export const classNames = (...classes: any): string => {
	return classes.filter(Boolean).join(" ");
};
