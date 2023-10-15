import React, { useState } from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { projects } from "../constants";
const PRICE_PER_WORD = 0.823;

const getProjectTitleUrlSlug = (): string => {
	return window.location.pathname.split("/")[3];
};

const getProjectDetailsFromProjectTitleUrlSlug = (
	projectTitleUrlSlug: string
): any => {
	return projects.find(
		(project) =>
			project.title.toLowerCase().replaceAll(" ", "-") ===
			projectTitleUrlSlug
	);
};

/* <div className="flex">
											<PlusCircleIcon
												className="h-10 w-10 text-indigo-500 cursor-pointer"
												aria-hidden="true"
											/>
											<div className="flex items-center">
												Add new chapter
											</div>
										</div> */

export default function CurrentProject(): JSX.Element {
	const [wordCount, setWordCount] = useState<number>(
		getProjectDetailsFromProjectTitleUrlSlug(getProjectTitleUrlSlug())
			.wordCount
	);
	const [numberOfBetaReaders, setNumberOfBetaReaders] = useState<number>(
		getProjectDetailsFromProjectTitleUrlSlug(getProjectTitleUrlSlug())
			.numberOfBetaReaders
	);
	const [chapters, setChapters] = useState<string[]>(
		getProjectDetailsFromProjectTitleUrlSlug(getProjectTitleUrlSlug())
			.chapters
	);

	const [projectTitle, setProjectTitle] = useState(
		getProjectDetailsFromProjectTitleUrlSlug(getProjectTitleUrlSlug()).title
	);

	const calculatePrice = (): number => {
		return Math.ceil(
			wordCount && wordCount > 0 ? wordCount * PRICE_PER_WORD : 0
		);
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};
	return (
		<div className="min-h-full">
			<div className="mx-auto max-w-7xl flex flex-col ">
				<header className="relative isolate">
					<div
						className="absolute inset-0 -z-10 overflow-hidden"
						aria-hidden="true"
					>
						<div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
							<div
								className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-muchbetaLight to-muchbetaDark"
								style={{
									clipPath:
										"polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
								}}
							/>
						</div>
						<div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
					</div>

					<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
						<div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
							<div className="flex items-center gap-x-6">
								<h1>
									<div className="text-sm leading-6 font-semibold text-gray-500">
										Current Project
									</div>
									<div className="mt-1 text-2xl font-semibold leading-6 text-teal-600">
										{projectTitle}
									</div>
								</h1>
							</div>
						</div>
					</div>
				</header>
				<main className="flex-1 px-8">
					<form
						onSubmit={(e) => {
							handleFormSubmit(e);
						}}
					>
						<div className="space-y-12">
							<div className="border-b border-gray-900/10 pb-12">
								<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
													disabled
													type="text"
													name="project-title"
													id="project-title"
													autoComplete="project-title"
													className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
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
														<span>
															Upload a file
														</span>
														<input
															disabled
															id="file-upload"
															name="file-upload"
															type="file"
															className="sr-only"
															accept=".txt"
															onChange={(e) => {
																setChapters([
																	...chapters,
																	e.target
																		.value,
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

										{chapters.length >= 0 && (
											<div className="flex gap-4">
												{chapters.map(
													(chapter, index) => {
														return (
															<div
																key={index}
																className="h-20 w-20 px-2 py-2 flex justify-center items-center bg-gray-300"
															>
																<p className="text-gray-500 text-sm whitespace-nowrap">
																	Chapter{" "}
																	{index + 1}
																</p>
															</div>
														);
													}
												)}
											</div>
										)}
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="country"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Trigger Warnings
										</label>
										<div className="mt-2">
											<select
												disabled
												id="trigger-warning"
												name="trigger-warning"
												autoComplete="trigger-warning-name"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
											>
												<option>
													Violence and Graphic
													Descriptions
												</option>
												<option>
													Sexual Assault and
													Non-consensual Content
												</option>
												<option>
													Mental Health and Suicide
												</option>
												<option>
													Substance Abuse and
													Addiction
												</option>
												<option>
													Racial and Cultural Violence
												</option>
											</select>
										</div>
									</div>

									<div className="sm:col-span-3">
										<label
											htmlFor="demographics"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Demographics
										</label>
										<div className="mt-2">
											<select
												disabled
												id="demographics"
												name="demographics"
												autoComplete="demographics-name"
												className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
											>
												<option>
													Young Adults (Ages 16-24)
												</option>
												<option>
													Working Professionals
												</option>
												<option>
													Parents and Caregivers
												</option>
												<option>
													Seniors (Ages 65+)
												</option>
												<option>
													Science Enthusiasts
												</option>
											</select>
										</div>
									</div>

									<div className="col-span-full">
										<div>
											<label
												htmlFor="word-count"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Number of words
											</label>
											<input
												disabled
												id="word-count"
												type="number"
												className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
												value={wordCount}
												onChange={(e) => {
													setWordCount(
														parseInt(e.target.value)
													);
												}}
											/>
										</div>
										<div className="mb-4">
											<p className="text-gray-700">
												Approximate Price: ${" "}
												{calculatePrice()}
											</p>
										</div>
									</div>

									<div className="col-span-full">
										<label
											htmlFor="beta-readers"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Number of Beta Readers hired:{" "}
											{numberOfBetaReaders}
										</label>
										<input
											disabled
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

									<div className="col-span-full">
										<label
											htmlFor="beta-readers-question"
											className="block text-sm font-medium leading-6 text-gray-900"
										>
											Question for Beta Readers
										</label>
										<div className="mt-2 mb-2">
											<select
												disabled
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
												disabled
												type="text"
												name="beta-reader-custom-question"
												id="beta-reader-custom-question"
												autoComplete="beta-reader-custom-question"
												className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"
												placeholder="Enter your own question"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="mt-6 flex items-center justify-end gap-x-6">
							<button
								type="submit"
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Submit
							</button>
						</div> */}
					</form>
				</main>
			</div>
		</div>
	);
}
