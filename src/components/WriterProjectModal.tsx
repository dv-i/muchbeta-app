import { Transition, Dialog } from "@headlessui/react";
import { BookOpenIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import { PRICE_PER_WORD, projects } from "../constants";
import type { Project } from "../interfaces";
import Select from "react-tailwindcss-select";
import {
	type Option,
	type SelectValue,
} from "react-tailwindcss-select/dist/components/type";
import { WriterFeedback } from "./WriterFeedback";

const people = [
	{
		name: "Leslie Alexander",
		email: "leslie.alexander@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The story clearly has a beginning, middle, and end, which is great. I found myself wondering what might happen next, which made me think that a bit more unpredictability could be intriguing. There are parts where I could almost guess what was coming, and I think it would be amazing to be surprised a few more times.",
			micro: "Sometimes I stumbled over sentences that seemed a bit complex or didn’t flow as well with the story. It might be worth taking another look at those. Also, there were moments when characters acted in ways that puzzled me because it seemed different from their usual behavior. Plus, there are scenes that felt less connected to the main story, which got me thinking about their importance.",
			wordBuilding:
				"The world in your book is vivid and easy to picture, which I loved. The details made me feel like I was right there. If there were more sensory descriptions, I bet it would be even more engaging. The places already have such strong imagery that I'm curious about the other senses, too.",
			storyArc:
				"The plot kept me interested and wanting to read on, which is a strong point. The chapters flow into each other well, maintaining interest. I did notice that some solutions to problems seemed to come about quickly, and it made me pause and think back on the events leading up to them.",
			characters:
				"The characters are compelling, and their unique traits shine through, which made me care about what happens to them. At times, I was curious about their thought processes, especially when they faced challenges. Seeing more of how they deal with things internally could add even more depth to their personalities.",
		},
	},
	{
		name: "Michael Foster",
		email: "michael.foster@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The story clearly has a beginning, middle, and end, which is great. I found myself wondering what might happen next, which made me think that a bit more unpredictability could be intriguing. There are parts where I could almost guess what was coming, and I think it would be amazing to be surprised a few more times.",
			micro: "Sometimes I stumbled over sentences that seemed a bit complex or didn’t flow as well with the story. It might be worth taking another look at those. Also, there were moments when characters acted in ways that puzzled me because it seemed different from their usual behavior. Plus, there are scenes that felt less connected to the main story, which got me thinking about their importance.",
			wordBuilding:
				"The world in your book is vivid and easy to picture, which I loved. The details made me feel like I was right there. If there were more sensory descriptions, I bet it would be even more engaging. The places already have such strong imagery that I'm curious about the other senses, too.",
			storyArc:
				"The plot kept me interested and wanting to read on, which is a strong point. The chapters flow into each other well, maintaining interest. I did notice that some solutions to problems seemed to come about quickly, and it made me pause and think back on the events leading up to them.",
			characters:
				"The characters are compelling, and their unique traits shine through, which made me care about what happens to them. At times, I was curious about their thought processes, especially when they faced challenges. Seeing more of how they deal with things internally could add even more depth to their personalities.",
		},
	},
	{
		name: "Dries Vincent",
		email: "dries.vincent@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The story clearly has a beginning, middle, and end, which is great. I found myself wondering what might happen next, which made me think that a bit more unpredictability could be intriguing. There are parts where I could almost guess what was coming, and I think it would be amazing to be surprised a few more times.",
			micro: "Sometimes I stumbled over sentences that seemed a bit complex or didn’t flow as well with the story. It might be worth taking another look at those. Also, there were moments when characters acted in ways that puzzled me because it seemed different from their usual behavior. Plus, there are scenes that felt less connected to the main story, which got me thinking about their importance.",
			wordBuilding:
				"The world in your book is vivid and easy to picture, which I loved. The details made me feel like I was right there. If there were more sensory descriptions, I bet it would be even more engaging. The places already have such strong imagery that I'm curious about the other senses, too.",
			storyArc:
				"The plot kept me interested and wanting to read on, which is a strong point. The chapters flow into each other well, maintaining interest. I did notice that some solutions to problems seemed to come about quickly, and it made me pause and think back on the events leading up to them.",
			characters:
				"The characters are compelling, and their unique traits shine through, which made me care about what happens to them. At times, I was curious about their thought processes, especially when they faced challenges. Seeing more of how they deal with things internally could add even more depth to their personalities.",
		},
	},
	{
		name: "Lindsay Walton",
		email: "lindsay.walton@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The story clearly has a beginning, middle, and end, which is great. I found myself wondering what might happen next, which made me think that a bit more unpredictability could be intriguing. There are parts where I could almost guess what was coming, and I think it would be amazing to be surprised a few more times.",
			micro: "Sometimes I stumbled over sentences that seemed a bit complex or didn’t flow as well with the story. It might be worth taking another look at those. Also, there were moments when characters acted in ways that puzzled me because it seemed different from their usual behavior. Plus, there are scenes that felt less connected to the main story, which got me thinking about their importance.",
			wordBuilding:
				"The world in your book is vivid and easy to picture, which I loved. The details made me feel like I was right there. If there were more sensory descriptions, I bet it would be even more engaging. The places already have such strong imagery that I'm curious about the other senses, too.",
			storyArc:
				"The plot kept me interested and wanting to read on, which is a strong point. The chapters flow into each other well, maintaining interest. I did notice that some solutions to problems seemed to come about quickly, and it made me pause and think back on the events leading up to them.",
			characters:
				"The characters are compelling, and their unique traits shine through, which made me care about what happens to them. At times, I was curious about their thought processes, especially when they faced challenges. Seeing more of how they deal with things internally could add even more depth to their personalities.",
		},
	},
	{
		name: "Courtney Henry",
		email: "courtney.henry@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The story clearly has a beginning, middle, and end, which is great. I found myself wondering what might happen next, which made me think that a bit more unpredictability could be intriguing. There are parts where I could almost guess what was coming, and I think it would be amazing to be surprised a few more times.",
			micro: "Sometimes I stumbled over sentences that seemed a bit complex or didn’t flow as well with the story. It might be worth taking another look at those. Also, there were moments when characters acted in ways that puzzled me because it seemed different from their usual behavior. Plus, there are scenes that felt less connected to the main story, which got me thinking about their importance.",
			wordBuilding:
				"The world in your book is vivid and easy to picture, which I loved. The details made me feel like I was right there. If there were more sensory descriptions, I bet it would be even more engaging. The places already have such strong imagery that I'm curious about the other senses, too.",
			storyArc:
				"The plot kept me interested and wanting to read on, which is a strong point. The chapters flow into each other well, maintaining interest. I did notice that some solutions to problems seemed to come about quickly, and it made me pause and think back on the events leading up to them.",
			characters:
				"The characters are compelling, and their unique traits shine through, which made me care about what happens to them. At times, I was curious about their thought processes, especially when they faced challenges. Seeing more of how they deal with things internally could add even more depth to their personalities.",
		},
	},
	{
		name: "Tom Cook",
		email: "tom.cook@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The story clearly has a beginning, middle, and end, which is great. I found myself wondering what might happen next, which made me think that a bit more unpredictability could be intriguing. There are parts where I could almost guess what was coming, and I think it would be amazing to be surprised a few more times.",
			micro: "Sometimes I stumbled over sentences that seemed a bit complex or didn’t flow as well with the story. It might be worth taking another look at those. Also, there were moments when characters acted in ways that puzzled me because it seemed different from their usual behavior. Plus, there are scenes that felt less connected to the main story, which got me thinking about their importance.",
			wordBuilding:
				"The world in your book is vivid and easy to picture, which I loved. The details made me feel like I was right there. If there were more sensory descriptions, I bet it would be even more engaging. The places already have such strong imagery that I'm curious about the other senses, too.",
			storyArc:
				"The plot kept me interested and wanting to read on, which is a strong point. The chapters flow into each other well, maintaining interest. I did notice that some solutions to problems seemed to come about quickly, and it made me pause and think back on the events leading up to them.",
			characters:
				"The characters are compelling, and their unique traits shine through, which made me care about what happens to them. At times, I was curious about their thought processes, especially when they faced challenges. Seeing more of how they deal with things internally could add even more depth to their personalities.",
		},
	},
];

interface WriterProjectModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	currentProject?: string;
}
const getProjectDetails = (projectTitle: string | undefined): Project => {
	return projects.find(
		(project) => project.title === projectTitle
	) as Project;
};
export const WriterProjectModal = ({
	isOpen,
	setIsOpen,
	currentProject,
}: WriterProjectModalProps): JSX.Element => {
	const [currentFeedback, setCurrentFeedback] = useState<any>();
	const [wordCount, setWordCount] = useState<number>(
		getProjectDetails(currentProject)?.wordCount || 0
	);
	const [numberOfBetaReaders, setNumberOfBetaReaders] = useState<number>(
		getProjectDetails(currentProject)?.numberOfBetaReaders || 0
	);
	const [chapters, setChapters] = useState<string[]>(
		getProjectDetails(currentProject)?.chapters || []
	);

	const [projectTitle] = useState<string>(
		getProjectDetails(currentProject)?.title || ""
	);

	const [genrePreferences, setGenrePreferences] = useState<Option | Option[]>(
		currentProject
			? [
					{
						value: "comedy",
						label: "Comedy",
					},
					{
						value: "drama",
						label: "Drama",
					},
					{
						value: "fantasy",
						label: "Fantasy",
					},
			  ]
			: []
	);

	const [triggerWarnings, setTriggerWarnings] = useState<Option | Option[]>(
		currentProject
			? [
					{
						value: "Violence and Graphic Descriptions",
						label: "Violence and Graphic Descriptions",
					},
			  ]
			: []
	);

	const [demographicsSelection, setDemographicsSelection] = useState<
		Option | Option[]
	>(
		currentProject
			? [
					{
						value: "Young Adults (Ages 16-24)",
						label: "Young Adults (Ages 16-24)",
					},
					{
						value: "Working Professionals",
						label: "Working Professionals",
					},
			  ]
			: []
	);

	const calculatePrice = (): number => {
		return Math.ceil(
			wordCount && wordCount > 0 ? wordCount * PRICE_PER_WORD : 0
		);
	};

	const renderRegularFields = (): JSX.Element => {
		return (
			<>
				<div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Project Title
						</label>
						<div className="mt-2 sm:col-span-2 sm:mt-0">
							<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
								<input
									disabled={currentProject !== undefined}
									type="text"
									name="project-title"
									id="project-title"
									autoComplete="project-title"
									className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
									value={projectTitle}
								/>
							</div>
						</div>
					</div>
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Chapters
						</label>
						<div className="mt-2 sm:col-span-2 sm:mt-0">
							<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
								<div className="mt-2 mb-2 flex flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
									<div className="text-center">
										<BookOpenIcon
											className="mx-auto h-12 w-12 text-gray-300"
											aria-hidden="true"
										/>
										<div className="mt-4 flex text-sm leading-6 text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
											>
												<span>Upload a file</span>
												<input
													disabled={
														currentProject !==
														undefined
													}
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
													accept=".txt"
													onChange={(e) => {
														setChapters([
															...chapters,
															e.target.value,
														]);
													}}
												/>
											</label>
											<p className="pl-1">
												or drag and drop
											</p>
										</div>
										<p className="text-xs leading-5 text-gray-600">
											TXT upto 5MB
										</p>
									</div>
								</div>
							</div>
							<div className="p-6 pl-0">
								{chapters.length >= 0 && (
									<div className="flex gap-4">
										{chapters.map((chapter, index) => {
											return (
												<div
													key={index}
													className="h-20 w-20 px-2 py-2 flex justify-center items-center bg-gray-300"
												>
													<p className="text-gray-500 text-sm whitespace-nowrap">
														Chapter {index + 1}
													</p>
												</div>
											);
										})}
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Trigger warnings
						</label>
						<div className="mt-2 sm:col-span-1 sm:mt-0">
							<div className="mt-2">
								<Select
									isDisabled={currentProject !== undefined}
									isSearchable
									options={[
										{
											value: "Violence and Graphic Descriptions",
											label: "Violence and Graphic Descriptions",
										},
										{
											value: "Sexual Assault and Non-consensual Content",
											label: "Sexual Assault and Non-consensual Content",
										},
										{
											value: "Mental Health and Suicide",
											label: "Mental Health and Suicide",
										},
										{
											value: "Substance Abuse and Addiction",
											label: "Substance Abuse and Addiction",
										},
										{
											value: "Racial and Cultural Violence",
											label: "Racial and Cultural Violence",
										},
									]}
									value={triggerWarnings ?? null}
									isMultiple
									onChange={function (
										value: SelectValue
									): void {
										value && setTriggerWarnings(value);
									}}
									primaryColor={"teal"}
								/>
							</div>
						</div>
					</div>
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Genre Preferences
						</label>
						<div className="mt-2 sm:col-span-1 sm:mt-0">
							<div className="mt-2">
								<Select
									isDisabled={currentProject !== undefined}
									isSearchable
									options={[
										{
											value: "action",
											label: "Action",
										},
										{
											value: "adventure",
											label: "Adventure",
										},
										{
											value: "comedy",
											label: "Comedy",
										},
										{
											value: "drama",
											label: "Drama",
										},
										{
											value: "fantasy",
											label: "Fantasy",
										},
										{
											value: "horror",
											label: "Horror",
										},
										{
											value: "mystery",
											label: "Mystery",
										},
										{
											value: "romance",
											label: "Romance",
										},
										{
											value: "sci-fi",
											label: "Sci-Fi",
										},
										{
											value: "thriller",
											label: "Thriller",
										},
										{
											value: "historical-fiction",
											label: "Historical Fiction",
										},
										{
											value: "non-fiction",
											label: "Non-Fiction",
										},
										{
											value: "poetry",
											label: "Poetry",
										},
									]}
									value={genrePreferences ?? null}
									isMultiple
									onChange={function (
										value: SelectValue
									): void {
										value && setGenrePreferences(value);
									}}
									primaryColor={"teal"}
								/>
							</div>
						</div>
					</div>
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Demographics Selection
						</label>
						<div className="mt-2 sm:col-span-1 sm:mt-0">
							<div className="mt-2">
								<Select
									isDisabled={currentProject !== undefined}
									isSearchable
									options={[
										{
											value: "Young Adults (Ages 16-24)",
											label: "Young Adults (Ages 16-24)",
										},
										{
											value: "Working Professionals",
											label: "Working Professionals",
										},
										{
											value: "Parents and Caregivers",
											label: "Parents and Caregivers",
										},
										{
											value: "Seniors (Ages 65+)",
											label: "Seniors (Ages 65+)",
										},
										{
											value: "Science Enthusiasts",
											label: "Science Enthusiasts",
										},
									]}
									value={demographicsSelection ?? null}
									isMultiple
									onChange={function (
										value: SelectValue
									): void {
										value &&
											setDemographicsSelection(value);
									}}
									primaryColor={"teal"}
								/>
							</div>
						</div>
					</div>
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Number of words
						</label>
						<div className="mt-2 sm:col-span-2 sm:mt-0">
							<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
								<input
									disabled={currentProject !== undefined}
									id="word-count"
									type="number"
									className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
									value={wordCount}
									onChange={(e) => {
										setWordCount(parseInt(e.target.value));
									}}
								/>
							</div>
							<div className="mb-4 pt-2">
								<p className="text-gray-700">
									Approximate Price: $ {calculatePrice()}
								</p>
							</div>
						</div>
					</div>
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Number of Beta Readers to hire
						</label>
						<div className="mt-2 sm:col-span-2 sm:mt-0">
							<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
								<input
									disabled={currentProject !== undefined}
									id="beta-readers"
									type="range"
									min={1}
									max={100}
									value={numberOfBetaReaders}
									className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
									onChange={(e) => {
										setNumberOfBetaReaders(
											parseInt(e.target.value)
										);
									}}
								/>
							</div>
							<div className="mb-4 pt-2">
								<p className="text-gray-700">
									Number of readers: {numberOfBetaReaders}
								</p>
							</div>
						</div>
					</div>
					<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
						<label
							htmlFor="username"
							className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
						>
							Select or type in your own question for Beta Readers
						</label>
						<div className="mt-2 sm:col-span-2 sm:mt-0">
							<select
								disabled={currentProject !== undefined}
								id="beta-readers-question"
								name="beta-readers-question"
								autoComplete="beta-readers-question-name"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
							>
								<option>Question 1</option>
								<option>Question 2</option>
								<option>Question 3</option>
							</select>
							<div className="flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
								<input
									disabled={currentProject !== undefined}
									type="text"
									name="beta-reader-custom-question"
									id="beta-reader-custom-question"
									autoComplete="beta-reader-custom-question"
									className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
									placeholder="Enter your own question"
								/>
							</div>
						</div>
					</div>
					{currentProject &&
						!currentFeedback &&
						renderReaderFeedback()}
					{/* INSERT hERE */}
				</div>
			</>
		);
	};

	const renderReaderFeedback = (): JSX.Element => {
		return (
			<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
				<label
					htmlFor="username"
					className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
				>
					Reader feedback
				</label>
				<div className="mt-2 sm:col-span-1 sm:mt-0">
					<ul
						role="list"
						className="divide-y divide-gray-100 h-96 overflow-y-scroll"
					>
						{people.map((person) => (
							<li
								key={person.email}
								className="flex items-center justify-between gap-x-6 py-5"
							>
								<div className="flex min-w-0 gap-x-4">
									<img
										className="h-12 w-12 flex-none rounded-full bg-gray-50"
										src={person.imageUrl}
										alt=""
									/>
									<div className="min-w-0 flex-auto">
										<p className="text-sm font-semibold leading-6 text-gray-900">
											{person.name}
										</p>
										<p className="mt-1 truncate text-xs leading-5 text-gray-500">
											{person.email}
										</p>
									</div>
								</div>
								<button
									onClick={() => {
										setCurrentFeedback(person);
									}}
									className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
								>
									View
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	};

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setIsOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end items-center  justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full max-w-xs sm:max-w-6xl sm:p-6">
								{currentProject ? (
									<h1 className="text-3xl">
										Project - {currentProject}
									</h1>
								) : (
									<h1 className="text-3xl">Project - New</h1>
								)}

								<>
									<div className="space-y-12">
										<div className="pb-12">
											<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
												{currentFeedback !==
												undefined ? (
													<WriterFeedback
														currentFeedback={
															currentFeedback
														}
														setCurrentFeedback={
															setCurrentFeedback
														}
													/>
												) : (
													renderRegularFields()
												)}
											</div>
										</div>
									</div>

									{!currentProject && (
										<div className="mt-6 flex items-center justify-end gap-x-6">
											<button
												onClick={() => {
													setIsOpen(false);
												}}
												className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												Submit
											</button>
										</div>
									)}
								</>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
