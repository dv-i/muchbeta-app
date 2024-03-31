import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { readerData } from "../constants";
import type { Job } from "../interfaces";
import Select from "react-tailwindcss-select";
import {
	type Option,
	type SelectValue,
} from "react-tailwindcss-select/dist/components/type";
import { toast } from "react-toastify";
import { calculatePrice } from "../utils";

interface ReaderJobModalProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	currentJob?: string;
}
const getJobDetails = (jobTitle: string | undefined): Job => {
	return readerData.find((job) => job.title === jobTitle) as Job;
};

export const ReaderJobModal = ({
	isOpen,
	setIsOpen,
	currentJob,
}: ReaderJobModalProps): JSX.Element => {
	const [wordCount, setWordCount] = useState<number>(
		getJobDetails(currentJob)?.wordCount || 0
	);

	const [jobTitle] = useState<string>(getJobDetails(currentJob)?.title || "");

	const [isFeedbackMode, setIsFeedbackMode] = useState<boolean>(false);

	const [genrePreferences, setGenrePreferences] = useState<Option | Option[]>(
		[
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
	);

	const [triggerWarnings, setTriggerWarnings] = useState<Option | Option[]>([
		{
			value: "Violence and Graphic Descriptions",
			label: "Violence and Graphic Descriptions",
		},
	]);

	const [demographicsSelection, setDemographicsSelection] = useState<
		Option | Option[]
	>([
		{
			value: "Young Adults (Ages 16-24)",
			label: "Young Adults (Ages 16-24)",
		},
		{
			value: "Working Professionals",
			label: "Working Professionals",
		},
	]);

	const handleOnAcceptClick = (): void => {
		setIsFeedbackMode(true);
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
								{!isFeedbackMode ? (
									<h1 className="text-3xl">
										Job - {currentJob}
									</h1>
								) : (
									<h1 className="text-3xl">
										Feedback - {currentJob}
									</h1>
								)}

								{isFeedbackMode ? (
									<>
										<div className="space-y-12">
											<div className="pb-12">
												<div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Story
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																<textarea
																	rows={4}
																	name="comment"
																	id="comment"
																	className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
																	defaultValue={
																		""
																	}
																/>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Macro
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																<textarea
																	name="project-title"
																	id="project-title"
																	autoComplete="project-title"
																	className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																/>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Micro
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																<textarea
																	name="project-title"
																	id="project-title"
																	autoComplete="project-title"
																	className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																/>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Word Building
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																<textarea
																	name="project-title"
																	id="project-title"
																	autoComplete="project-title"
																	className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																/>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Story Arc
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																<textarea
																	name="project-title"
																	id="project-title"
																	autoComplete="project-title"
																	className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																/>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Characters
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																<textarea
																	name="project-title"
																	id="project-title"
																	autoComplete="project-title"
																	className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																/>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Exclude this writer?
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<input
																id="candidates"
																aria-describedby="candidates-description"
																name="candidates"
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
														</div>
													</div>

													{/* INSERT HERE */}
												</div>
											</div>
										</div>

										{currentJob &&
											getJobDetails(currentJob)
												?.status !== "completed" && (
												<div className="mt-6 flex items-center justify-end gap-x-6">
													<button
														onClick={() => {
															setIsOpen(false);
														}}
														className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														Decline
													</button>
													<button
														onClick={() => {
															toast.success(
																"Submission Successful",
																{
																	position:
																		"top-right",
																	autoClose: 5000,
																	hideProgressBar:
																		false,
																	closeOnClick:
																		true,
																	pauseOnHover:
																		true,
																	draggable:
																		true,
																	progress:
																		undefined,
																	theme: "light",
																}
															);
															setIsOpen(false);
														}}
														className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														Submit Feedback
													</button>
												</div>
											)}
									</>
								) : (
									<>
										<div className="space-y-12">
											<div className="pb-12">
												<div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Job Title
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
																<input
																	disabled={
																		currentJob !==
																		undefined
																	}
																	type="text"
																	name="project-title"
																	id="project-title"
																	autoComplete="project-title"
																	className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
																	value={
																		jobTitle
																	}
																/>
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
																	isDisabled
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
																	value={
																		triggerWarnings ??
																		null
																	}
																	isMultiple
																	onChange={function (
																		value: SelectValue
																	): void {
																		value &&
																			setTriggerWarnings(
																				value
																			);
																	}}
																	primaryColor={
																		"teal"
																	}
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
																	isDisabled
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
																	value={
																		genrePreferences ??
																		null
																	}
																	isMultiple
																	onChange={function (
																		value: SelectValue
																	): void {
																		value &&
																			setGenrePreferences(
																				value
																			);
																	}}
																	primaryColor={
																		"teal"
																	}
																/>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Demographics
															Selection
														</label>
														<div className="mt-2 sm:col-span-1 sm:mt-0">
															<div className="mt-2">
																<Select
																	isDisabled
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
																	value={
																		demographicsSelection ??
																		null
																	}
																	isMultiple
																	onChange={function (
																		value: SelectValue
																	): void {
																		value &&
																			setDemographicsSelection(
																				value
																			);
																	}}
																	primaryColor={
																		"teal"
																	}
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
																	disabled={
																		currentJob !==
																		undefined
																	}
																	id="word-count"
																	type="number"
																	className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
																	value={
																		wordCount
																	}
																	onChange={(
																		e
																	) => {
																		setWordCount(
																			parseInt(
																				e
																					.target
																					.value
																			)
																		);
																	}}
																/>
															</div>
															<div className="mb-4 pt-2">
																<p className="text-gray-700">
																	Approximate
																	Price: ${" "}
																	{calculatePrice(
																		wordCount
																	)}
																</p>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Time required to
															complete
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"></div>
															<div className="mb-4 pt-2">
																<p className="text-gray-700">
																	5 hours
																</p>
															</div>
														</div>
													</div>
													<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
														<label
															htmlFor="username"
															className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
														>
															Exclude this writer?
														</label>
														<div className="mt-2 sm:col-span-2 sm:mt-0">
															<input
																disabled={
																	currentJob !==
																	undefined
																}
																id="candidates"
																aria-describedby="candidates-description"
																name="candidates"
																type="checkbox"
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>

										{currentJob &&
											getJobDetails(currentJob)
												?.status !== "completed" && (
												<div className="mt-6 flex items-center justify-end gap-x-6">
													<button
														onClick={() => {
															setIsOpen(false);
														}}
														className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														Decline
													</button>
													<button
														onClick={() => {
															if (
																!isFeedbackMode
															) {
																handleOnAcceptClick();
															}
														}}
														className="rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
													>
														Accept
													</button>
												</div>
											)}
									</>
								)}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
