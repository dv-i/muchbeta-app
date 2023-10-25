export interface Project {
	id: number;
	title: string;
	initials: string;
	description: string;
	lastUpdated: string;
	pinned: boolean;
	bgColorClass: string;
	wordCount: number;
	numberOfBetaReaders: number;
	chapters: string[];
}

export interface Job {
	id: number;
	title: string;
	description: string;
	author: string;
	price: string;
	wordCount: number;
}
