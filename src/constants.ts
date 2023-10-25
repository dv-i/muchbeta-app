export const projects = [
	{
		id: 1,
		title: "The Great Gatsby",
		initials: "GG",
		description:
			"A Jazz Age tale of wealth, ambition, and unrequited love set against the backdrop of opulence and excess.",
		lastUpdated: "August 17, 2023",
		pinned: true,
		bgColorClass: "bg-teal-600",
		wordCount: 2345,
		numberOfBetaReaders: 4,
		chapters: ["Red", "Blue", "Green", "Yellow"],
	},
	{
		id: 1,
		title: "1984",
		initials: "1984",
		description:
			"A dystopian novel depicting a totalitarian society where individualism is suppressed and truth is controlled by a powerful regime.",
		lastUpdated: "May 22, 2023",
		pinned: false,
		bgColorClass: "bg-teal-600",
		wordCount: 5365,
		numberOfBetaReaders: 1,
		chapters: ["Dog", "Cat", "Fish", "Bird", "Rabbit"],
	},
	{
		id: 1,
		title: "To Kill a Mockingbird",
		initials: "KM",
		description:
			"A coming-of-age story that confronts racism and moral complexities in a racially divided Southern town.",
		lastUpdated: "May 11, 2023",
		pinned: true,
		bgColorClass: "bg-teal-600",
		wordCount: 10000,
		numberOfBetaReaders: 10,
		chapters: [
			"Red",
			"Blue",
			"Green",
			"Yellow",
			"Orange",
			"Purple",
			"Pink",
		],
	},
	{
		id: 1,
		title: "Harry Potter and the Sorcerer's Stone",
		initials: "HP",
		description:
			"The enchanting beginning of a series where a young boy discovers his magical heritage and faces the challenges of a hidden wizarding world.",
		lastUpdated: "April 27, 2023",
		pinned: true,
		bgColorClass: "bg-teal-600",
		wordCount: 7834,
		numberOfBetaReaders: 3,
		chapters: ["Red", "Blue", "Green", "Yellow", "Orange"],
	},
	{
		id: 1,
		title: "Pride and Prejudice",
		initials: "PP",
		description:
			"A timeless romance that explores societal norms, family dynamics, and the evolving relationship between Elizabeth Bennet and Mr. Darcy.",
		lastUpdated: "March 17, 2023",
		pinned: false,
		bgColorClass: "bg-teal-600",
		wordCount: 1145,
		numberOfBetaReaders: 1,
		chapters: ["Apple", "Banana", "Cherry"],
	},

	// More projects...
];

export const matches = [
	{
		id: 1,
		title: "The Alchemist",
		author: "Paulo Coelho",
		description:
			"A shepherd's quest for treasure turns into a journey of self-discovery and life's true meaning.",
		price: "$2,000.00",
		wordCount: 4867,
	},
	{
		id: 2,
		title: "Jane Eyre",
		author: "Charlotte Bronte",
		description:
			"An orphaned governess's journey through love and identity challenges, complicated by her employer's secrets.",
		price: "$5,200.00",
		wordCount: 9897,
	},
	{
		id: 3,
		title: "The Fault in Our Stars",
		author: "John Green",
		description:
			"Two teenagers facing cancer fall in love, exploring life's complexities with humor and heartache.",
		price: "$1,200.00",
		wordCount: 3333,
	},
	{
		id: 4,
		title: "Animal Farm",
		author: "George Orwell",
		description:
			"Farm animals' rebellion evolves into a cautionary tale about power and corruption.",
		price: "$400.00",
		wordCount: 1881,
	},
	{
		id: 5,
		title: "To Kill a Mockingbird",
		author: "Sample Author",
		description: "Sample Description",
		price: "$2557.63",
		wordCount: 7824,
	},
	{
		id: 6,
		title: "Harry Potter and the Sorcerer's Stone",
		author: "Sample Author",
		description: "Sample Description",
		price: "$1499.32",
		wordCount: 6322,
	},
	{
		id: 7,
		title: "The Catcher in the Rye",
		author: "Sample Author",
		description: "Sample Description",
		price: "$1719.32",
		wordCount: 4444,
	},
];

export const pastReads = [
	{
		id: 1,
		type: "completed",
		readJob: { name: "The Catcher in the Rye" },
		date: "1d ago",
		feedback: {
			macro: "The overall story structure is solid, but it could benefit from more suspense and unexpected twists.",
			micro: "I found some minor grammatical errors and typos that need editing.",
			wordBuilding: "The world you've created is vivid and immersive.",
			storyArc:
				"The plot progression is engaging and keeps the reader hooked.",
			characters: "The characters are well-developed and relatable.",
		},

		// dateTime: "2023-01-23T10:32",
	},
	{
		id: 3,
		type: "completed",
		readJob: { name: "To Kill a Mockingbird" },
		date: "7d ago",
		feedback: {
			macro: "The story lacks a clear direction and could use a stronger plotline.",
			micro: "Grammar and punctuation need improvement throughout the text.",
			wordBuilding: "The world-building is creative and intriguing.",
			storyArc:
				"The story's progression is a bit slow and could benefit from more action.",
			characters: "The characters are underdeveloped and lack depth.",
		},

		// dateTime: "2023-01-23T11:24",
	},
	{
		id: 4,
		type: "completed",
		readJob: { name: "Harry Potter and the Sorcerer's Stone" },
		date: "7d ago",
		feedback: {
			macro: "The story's pacing is excellent, with a well-executed plot twist.",
			micro: "The writing is polished and free of errors.",
			wordBuilding:
				"The world-building is rich and vivid, immersing the reader in the setting.",
			storyArc:
				"The story arc is well-structured and keeps the reader engaged.",
			characters:
				"The characters are complex and relatable, driving the narrative forward.",
		},

		// dateTime: "2023-01-23T11:24",
	},
	{
		id: 5,
		type: "commented",
		readJob: {
			name: "To Kill a Mockingbird",
			imageUrl:
				"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		comment:
			"Added summary: Set in the American South, a young girl learns about racial injustice and moral growth through her father's defense of an unjustly accused black man.",
		date: "10d ago",
		feedback: {
			macro: "The story's overarching plot is intriguing, but some subplots could use more development.",
			micro: "The text is clean and well-edited, with no noticeable errors.",
			wordBuilding: "The world-building is detailed and well-imagined.",
			storyArc:
				"The story arc is well-paced and keeps the reader guessing.",
			characters:
				"The characters are diverse and add depth to the narrative.",
		},

		// dateTime: "2023-01-23T15:56",
	},
	{
		id: 6,
		type: "accepted",
		readJob: { name: "To Kill a Mockingbird" },
		date: "15d ago",
		feedback: {
			macro: "The story's structure is chaotic, making it hard to follow.",
			micro: "Numerous grammatical errors and typos detract from the reading experience.",
			wordBuilding: "The world-building lacks depth and detail.",
			storyArc:
				"The story arc feels disjointed and lacks a clear progression.",
			characters: "The characters lack development and are unrelatable.",
		},

		// dateTime: "2023-01-24T09:12",
	},
	{
		id: 7,
		type: "accepted",
		readJob: { name: "Harry Potter and the Sorcerer's Stone" },
		date: "16d ago",
		dateTime: "2023-01-24T09:20",
		feedback: {
			macro: "The story has a compelling overarching plot with great potential.",
			micro: "The writing is mostly clean, but a few minor errors need attention.",
			wordBuilding:
				"The world-building is imaginative and adds depth to the story.",
			storyArc:
				"The story arc is well-constructed, but it could use more surprises.",
			characters:
				"The characters are well-developed and relatable, driving the narrative forward.",
		},
	},
];

export const PRICE_PER_WORD = 0.823;
