import { Transition, Dialog } from "@headlessui/react";
import { BookOpenIcon } from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import { projects } from "../constants";
import type { Project } from "../interfaces";

const PRICE_PER_WORD = 0.823;
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

	const calculatePrice = (): number => {
		return Math.ceil(
			wordCount && wordCount > 0 ? wordCount * PRICE_PER_WORD : 0
		);
	};

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		setIsOpen(false);
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
																disabled={
																	currentProject !==
																	undefined
																}
																type="text"
																name="project-title"
																id="project-title"
																autoComplete="project-title"
																className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																value={
																	projectTitle
																}
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
																		Upload a
																		file
																	</span>
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
																		onChange={(
																			e
																		) => {
																			setChapters(
																				[
																					...chapters,
																					e
																						.target
																						.value,
																				]
																			);
																		}}
																	/>
																</label>
																<p className="pl-1">
																	or drag and
																	drop
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
																(
																	chapter,
																	index
																) => {
																	return (
																		<div
																			key={
																				index
																			}
																			className="h-20 w-20 px-2 py-2 flex justify-center items-center bg-gray-300"
																		>
																			<p className="text-gray-500 text-sm whitespace-nowrap">
																				Chapter{" "}
																				{index +
																					1}
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
														Trigger Warning
														Selection
													</label>
													<div className="mt-2">
														<select
															disabled={
																currentProject !==
																undefined
															}
															id="trigger-warning"
															name="trigger-warning"
															autoComplete="trigger-warning-name"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
														>
															<option>
																Violence and
																Graphic
																Descriptions
															</option>
															<option>
																Sexual Assault
																and
																Non-consensual
																Content
															</option>
															<option>
																Mental Health
																and Suicide
															</option>
															<option>
																Substance Abuse
																and Addiction
															</option>
															<option>
																Racial and
																Cultural
																Violence
															</option>
														</select>
													</div>
												</div>

												<div className="sm:col-span-3">
													<label
														htmlFor="demographics"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Demographics Selection
													</label>
													<div className="mt-2">
														<select
															disabled={
																currentProject !==
																undefined
															}
															id="demographics"
															name="demographics"
															autoComplete="demographics-name"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
														>
															<option>
																Young Adults
																(Ages 16-24)
															</option>
															<option>
																Working
																Professionals
															</option>
															<option>
																Parents and
																Caregivers
															</option>
															<option>
																Seniors (Ages
																65+)
															</option>
															<option>
																Science
																Enthusiasts
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
															Enter the number of
															words
														</label>
														<input
															disabled={
																currentProject !==
																undefined
															}
															id="word-count"
															type="number"
															className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
															value={wordCount}
															onChange={(e) => {
																setWordCount(
																	parseInt(
																		e.target
																			.value
																	)
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
														Number of Beta Readers
														to hire:{" "}
														{numberOfBetaReaders}
													</label>
													<input
														disabled={
															currentProject !==
															undefined
														}
														id="beta-readers"
														type="range"
														min={1}
														max={100}
														value={
															numberOfBetaReaders
														}
														className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
														onChange={(e) => {
															setNumberOfBetaReaders(
																parseInt(
																	e.target
																		.value
																)
															);
														}}
													/>
												</div>

												<div className="col-span-full">
													<label
														htmlFor="beta-readers-question"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Select or type in your
														own question for Beta
														Readers
													</label>
													<div className="mt-2 mb-2">
														<select
															disabled={
																currentProject !==
																undefined
															}
															id="beta-readers-question"
															name="beta-readers-question"
															autoComplete="beta-readers-question-name"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
														>
															<option>
																Question 1
															</option>
															<option>
																Question 2
															</option>
															<option>
																Question 3
															</option>
														</select>
													</div>
													<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
														<input
															disabled={
																currentProject !==
																undefined
															}
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
										</div>
									</div>

									{!currentProject && (
										<div className="mt-6 flex items-center justify-end gap-x-6">
											<button
												type="submit"
												className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												Submit
											</button>
										</div>
									)}
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
