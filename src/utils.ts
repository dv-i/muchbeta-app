import { PRICE_PER_WORD } from "./constants";

export const calculatePrice = (wordCount: number): number => {
	return Math.ceil(
		wordCount && wordCount > 0 ? wordCount * PRICE_PER_WORD : 0
	);
};
