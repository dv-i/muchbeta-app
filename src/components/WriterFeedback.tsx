import { StarIcon, FlagIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { classNames } from "../utils";
interface WriterFeedbackProps {
	currentFeedback: any;
	setCurrentFeedback: React.Dispatch<any>;
}

export const WriterFeedback = ({
	currentFeedback,
	setCurrentFeedback,
}: WriterFeedbackProps): JSX.Element => {
	const [review1, setReview1] = useState(0);
	const [review2, setReview2] = useState(0);
	const [review3, setReview3] = useState(0);
	const [review4, setReview4] = useState(0);
	const [review5, setReview5] = useState(0);
	const [isViewingFeedback, setIsViewingFeedback] = useState(true);
	const [tabs, setTabs] = useState([
		{ name: "View Feedback", current: true },
		{ name: "Submit Feedback", current: false },
	]);

	const renderReviewWidget = (reviewNumber: number): JSX.Element => {
		const getCurrentRating = (reviewNumber: number): number => {
			switch (reviewNumber) {
				case 1:
					return review1;

				case 2:
					return review2;
				case 3:
					return review3;
				case 4:
					return review4;

				case 5:
					return review5;
				default:
					return 0;
			}
		};
		return (
			<div className="flex">
				{[1, 2, 3, 4, 5].map((rating) => {
					return (
						<StarIcon
							onClick={() => {
								switch (reviewNumber) {
									case 1:
										if (rating === review1) {
											setReview1(review1 - 1);
										} else {
											setReview1(rating);
										}

										break;
									case 2:
										if (rating === review2) {
											setReview2(review2 - 1);
										} else {
											setReview2(rating);
										}
										break;
									case 3:
										if (rating === review3) {
											setReview3(review3 - 1);
										} else {
											setReview3(rating);
										}
										break;
									case 4:
										if (rating === review4) {
											setReview4(review4 - 1);
										} else {
											setReview4(rating);
										}
										break;
									case 5:
										if (rating === review5) {
											setReview5(review5 - 1);
										} else {
											setReview5(rating);
										}
										break;
								}
							}}
							key={rating}
							className={classNames(
								rating <= getCurrentRating(reviewNumber)
									? "text-yellow-400"
									: "text-gray-200",
								"h-5 w-5 flex-shrink-0 cursor-pointer"
							)}
							aria-hidden="true"
						/>
					);
				})}
			</div>
		);
	};

	useEffect(() => {
		setTabs((prevTabs) => {
			return prevTabs.map((tab) => {
				if (tab.name === "View Feedback") {
					return {
						...tab,
						name: "View Feedback",
						current: isViewingFeedback,
					};
				} else {
					return {
						...tab,
						name: "Submit Feedback",
						current: !isViewingFeedback,
					};
				}
			});
		});
	}, [isViewingFeedback]);
	const [reviews] = useState([
		{
			question: "Critical Analysis",
			review: 1,
			reviewState: review1,
		},
		{
			question: "Sticking to the Brief",
			review: 2,
			reviewState: review2,
		},
		{
			question: "Respectfulness",
			review: 3,
			reviewState: review3,
		},
	]);
	return (
		<>
			<div className="sm:col-span-4">
				<div>
					<div className="sm:hidden">
						<label htmlFor="tabs" className="sr-only">
							Select a tab
						</label>
						{/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
						<select
							id="tabs"
							name="tabs"
							className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
							defaultValue={tabs.find((tab) => tab.current)?.name}
						>
							{tabs.map((tab) => (
								<option key={tab.name}>{tab.name}</option>
							))}
						</select>
					</div>
					<div className="hidden sm:block">
						<nav className="flex space-x-4" aria-label="Tabs">
							{tabs.map((tab) => (
								<span
									key={tab.name}
									className={classNames(
										tab.current
											? "bg-teal-100 text-gray-700"
											: "text-gray-500 hover:text-gray-700",
										"rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
									)}
									aria-current={
										tab.current ? "page" : undefined
									}
									onClick={() => {
										setIsViewingFeedback(
											tab.name === "View Feedback"
										);
									}}
								>
									{tab.name}
								</span>
							))}
						</nav>
					</div>
				</div>

				<div className="flex gap-20 pt-4">
					{isViewingFeedback ? (
						<div className="flex-1 ">
							<label
								htmlFor="project-title"
								className="block text-md font-medium leading-6 text-gray-900 pb-4"
							>
								Viewing feedback from Beta Reader #
								{currentFeedback.index}:
							</label>
							<div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
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
												value={
													currentFeedback.feedback
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
												value={
													currentFeedback.feedback
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
												value={
													currentFeedback.feedback
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
												value={
													currentFeedback.feedback
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
												value={
													currentFeedback.feedback
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

								{/* INSERT HERE */}
							</div>
						</div>
					) : (
						<div className="flex-1">
							<label
								htmlFor="project-title"
								className="block text-md font-medium leading-6 text-gray-900 pb-4"
							>
								Submit your feedback for {currentFeedback.name}:
							</label>
							<div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
								{reviews.map((review) => {
									return (
										<div
											key={review.question}
											className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6"
										>
											<label
												htmlFor="username"
												className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
											>
												{review.question}
											</label>
											<div className="mt-2 sm:col-span-2 sm:mt-0">
												<div className="flex">
													{renderReviewWidget(
														review.review
													)}
													<p className="ml-3 text-sm text-gray-700">
														{review.reviewState}
														<span className="sr-only">
															{" "}
															out of 5 stars
														</span>
													</p>
												</div>
											</div>
										</div>
									);
								})}
								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
									<label
										htmlFor="username"
										className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
									>
										Additional notes
									</label>
									<div className="mt-2 sm:col-span-2 sm:mt-0">
										<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
											<textarea
												name="project-title"
												id="project-title"
												autoComplete="project-title"
												className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
												value={
													"Thanks for your insights—they really got me thinking on how to improve. I wish we could've dug a bit deeper on the character stuff, but overall, I found your feedback really useful. Much appreciated!"
												}
											/>
										</div>
									</div>
								</div>
								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
									<div className="flex">
										<label
											htmlFor="username"
											className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
										>
											Report this review?{" "}
										</label>
										<div className="flex items-center ml-1">
											<FlagIcon
												height={16}
												width={16}
												color="red"
											/>
										</div>
									</div>

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
								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
									<div className="flex">
										<label
											htmlFor="username"
											className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
										>
											Exclude this Beta Reader?
										</label>
										<div className="flex items-end ml-1">
											<XMarkIcon
												height={24}
												width={24}
												color="red"
											/>
										</div>
									</div>

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
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="sm:col-span-full flex justify-end gap-2">
				<button
					onClick={() => {
						setCurrentFeedback(undefined);
					}}
					className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Back
				</button>

				{!isViewingFeedback && (
					<button
						onClick={() => {
							toast.success("Submission Successful", {
								position: "top-right",
								autoClose: 5000,
								hideProgressBar: false,
								closeOnClick: true,
								pauseOnHover: true,
								draggable: true,
								progress: undefined,
								theme: "light",
							});
							setCurrentFeedback(undefined);
						}}
						className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Submit
					</button>
				)}
			</div>
		</>
	);
};
