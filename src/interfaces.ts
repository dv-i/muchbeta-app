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
