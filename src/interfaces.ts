export interface Project {
	id: number;
	title: string;
	initials: string;
	description: string;
	lastUpdated: string;
	bgColorClass: string;
	wordCount: number;
	numberOfBetaReaders: number;
	chapters: string[];
	genres?: string[];
	price?: number;
	status: "in-progress" | "paused";
}

export interface Job {
	id: number;
	title: string;
	author: string;
	description: string;
	wordCount: number;
	initials: string;
	status: "in-progress" | "suggested" | "completed";
	date: string; // You might want to use a proper date type here
	feedback: {
		macro: string;
		micro: string;
		wordBuilding: string;
		storyArc: string;
		characters: string;
	};
	comment: string;
	genres?: string[];
	price?: number;
	preview?: string;
	fullText?: string;
}
