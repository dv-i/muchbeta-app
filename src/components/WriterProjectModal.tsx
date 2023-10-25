import { Transition, Dialog, Disclosure } from "@headlessui/react";
import {
	BookOpenIcon,
	MinusSmallIcon,
	PlusSmallIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useEffect, useState } from "react";
import { PRICE_PER_WORD, projects } from "../constants";
import type { Project } from "../interfaces";
import Select from "react-tailwindcss-select";
import {
	type Option,
	type SelectValue,
} from "react-tailwindcss-select/dist/components/type";

const people = [
	{
		name: "Leslie Alexander",
		email: "leslie.alexander@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The overall story structure is solid, but it could benefit from more suspense and unexpected twists.",
			micro: "I found some minor grammatical errors and typos that need editing.",
			wordBuilding: "The world you've created is vivid and immersive.",
			storyArc:
				"The plot progression is engaging and keeps the reader hooked.",
			characters: "The characters are well-developed and relatable.",
		},
	},
	{
		name: "Michael Foster",
		email: "michael.foster@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The overall story structure is solid, but it could benefit from more suspense and unexpected twists.",
			micro: "I found some minor grammatical errors and typos that need editing.",
			wordBuilding: "The world you've created is vivid and immersive.",
			storyArc:
				"The plot progression is engaging and keeps the reader hooked.",
			characters: "The characters are well-developed and relatable.",
		},
	},
	{
		name: "Dries Vincent",
		email: "dries.vincent@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The overall story structure is solid, but it could benefit from more suspense and unexpected twists.",
			micro: "I found some minor grammatical errors and typos that need editing.",
			wordBuilding: "The world you've created is vivid and immersive.",
			storyArc:
				"The plot progression is engaging and keeps the reader hooked.",
			characters: "The characters are well-developed and relatable.",
		},
	},
	{
		name: "Lindsay Walton",
		email: "lindsay.walton@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The overall story structure is solid, but it could benefit from more suspense and unexpected twists.",
			micro: "I found some minor grammatical errors and typos that need editing.",
			wordBuilding: "The world you've created is vivid and immersive.",
			storyArc:
				"The plot progression is engaging and keeps the reader hooked.",
			characters: "The characters are well-developed and relatable.",
		},
	},
	{
		name: "Courtney Henry",
		email: "courtney.henry@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The overall story structure is solid, but it could benefit from more suspense and unexpected twists.",
			micro: "I found some minor grammatical errors and typos that need editing.",
			wordBuilding: "The world you've created is vivid and immersive.",
			storyArc:
				"The plot progression is engaging and keeps the reader hooked.",
			characters: "The characters are well-developed and relatable.",
		},
	},
	{
		name: "Tom Cook",
		email: "tom.cook@example.com",
		imageUrl:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		href: "#",
		feedback: {
			macro: "The overall story structure is solid, but it could benefit from more suspense and unexpected twists.",
			micro: "I found some minor grammatical errors and typos that need editing.",
			wordBuilding: "The world you've created is vivid and immersive.",
			storyArc:
				"The plot progression is engaging and keeps the reader hooked.",
			characters: "The characters are well-developed and relatable.",
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

	useEffect(() => {
		console.log("current", currentFeedback);
	}, [currentFeedback]);

	const calculatePrice = (): number => {
		return Math.ceil(
			wordCount && wordCount > 0 ? wordCount * PRICE_PER_WORD : 0
		);
	};

	const renderRegularFields = (): JSX.Element => {
		return (
			<>
				<div className="sm:col-span-4">
					<label
						htmlFor="project-title"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Project Title
					</label>
					<div className="mt-2">
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

				<div className="col-span-full">
					<label
						htmlFor="cover-photo"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Chapters
					</label>
					<div className="mt-2 mb-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
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
										disabled={currentProject !== undefined}
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
								<p className="pl-1">or drag and drop</p>
							</div>
							<p className="text-xs leading-5 text-gray-600">
								TXT upto 5MB
							</p>
						</div>
					</div>

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

				<div className="col-span-full">
					<label
						htmlFor="logout-password"
						className="block text-sm font-medium leading-6 text-gray-700"
					>
						Trigger warnings
					</label>
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
							onChange={function (value: SelectValue): void {
								value && setTriggerWarnings(value);
							}}
							primaryColor={"teal"}
						/>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="logout-password"
						className="block text-sm font-medium leading-6 text-gray-700"
					>
						Genre Preferences
					</label>
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
							onChange={function (value: SelectValue): void {
								value && setGenrePreferences(value);
							}}
							primaryColor={"teal"}
						/>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="logout-password"
						className="block text-sm font-medium leading-6 text-gray-700"
					>
						Demographics Selection
					</label>
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
							onChange={function (value: SelectValue): void {
								value && setDemographicsSelection(value);
							}}
							primaryColor={"teal"}
						/>
					</div>
				</div>

				<div className="col-span-full">
					<div>
						<label
							htmlFor="word-count"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Enter the number of words
						</label>
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
					<div className="mb-4">
						<p className="text-gray-700">
							Approximate Price: $ {calculatePrice()}
						</p>
					</div>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="beta-readers"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Number of Beta Readers to hire: {numberOfBetaReaders}
					</label>
					<input
						disabled={currentProject !== undefined}
						id="beta-readers"
						type="range"
						min={1}
						max={100}
						value={numberOfBetaReaders}
						className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
						onChange={(e) => {
							setNumberOfBetaReaders(parseInt(e.target.value));
						}}
					/>
				</div>

				<div className="col-span-full">
					<label
						htmlFor="beta-readers-question"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Select or type in your own question for Beta Readers
					</label>
					<div className="mt-2 mb-2">
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
					</div>
					<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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
			</>
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
											<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
												{currentFeedback !==
												undefined ? (
													<>
														<div className="sm:col-span-4">
															<label
																htmlFor="project-title"
																className="block text-md font-medium leading-6 text-gray-900"
															>
																Viewing feedback
																for{" "}
																{
																	currentFeedback.name
																}
																:
															</label>
														</div>
														<div className="sm:col-span-4">
															<label
																htmlFor="project-title"
																className="block text-sm font-medium leading-6 text-gray-900"
															>
																Macro
															</label>
															<div className="mt-2">
																<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																	<textarea
																		value={
																			currentFeedback
																				.feedback
																				.macro
																		}
																		disabled
																		name="project-title"
																		id="project-title"
																		autoComplete="project-title"
																		className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																	/>
																</div>
															</div>
														</div>
														<div className="sm:col-span-4">
															<label
																htmlFor="project-title"
																className="block text-sm font-medium leading-6 text-gray-900"
															>
																Micro
															</label>
															<div className="mt-2">
																<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																	<textarea
																		value={
																			currentFeedback
																				.feedback
																				.micro
																		}
																		disabled
																		name="project-title"
																		id="project-title"
																		autoComplete="project-title"
																		className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																	/>
																</div>
															</div>
														</div>
														<div className="sm:col-span-4">
															<label
																htmlFor="project-title"
																className="block text-sm font-medium leading-6 text-gray-900"
															>
																Word Building
															</label>
															<div className="mt-2">
																<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																	<textarea
																		value={
																			currentFeedback
																				.feedback
																				.wordBuilding
																		}
																		disabled
																		name="project-title"
																		id="project-title"
																		autoComplete="project-title"
																		className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																	/>
																</div>
															</div>
														</div>

														<div className="sm:col-span-4">
															<label
																htmlFor="project-title"
																className="block text-sm font-medium leading-6 text-gray-900"
															>
																Story Arc
															</label>
															<div className="mt-2">
																<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																	<textarea
																		value={
																			currentFeedback
																				.feedback
																				.storyArc
																		}
																		disabled
																		name="project-title"
																		id="project-title"
																		autoComplete="project-title"
																		className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																	/>
																</div>
															</div>
														</div>
														<div className="sm:col-span-4">
															<label
																htmlFor="project-title"
																className="block text-sm font-medium leading-6 text-gray-900"
															>
																Characters
															</label>
															<div className="mt-2">
																<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																	<textarea
																		value={
																			currentFeedback
																				.feedback
																				.characters
																		}
																		disabled
																		name="project-title"
																		id="project-title"
																		autoComplete="project-title"
																		className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																	/>
																</div>
															</div>
														</div>

														<div className="sm:col-span-4">
															<button
																onClick={() => {
																	setCurrentFeedback(
																		undefined
																	);
																}}
																className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
															>
																Back
															</button>
														</div>
													</>
												) : (
													renderRegularFields()
												)}
											</div>
										</div>
									</div>

									{currentProject && !currentFeedback && (
										<>
											<label
												htmlFor="beta-readers-question"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Reader feedback
											</label>
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
																src={
																	person.imageUrl
																}
																alt=""
															/>
															<div className="min-w-0 flex-auto">
																<p className="text-sm font-semibold leading-6 text-gray-900">
																	{
																		person.name
																	}
																</p>
																<p className="mt-1 truncate text-xs leading-5 text-gray-500">
																	{
																		person.email
																	}
																</p>
															</div>
														</div>
														<button
															onClick={() => {
																setCurrentFeedback(
																	person
																);
															}}
															className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
														>
															View
														</button>
													</li>
												))}
											</ul>
										</>
									)}

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
