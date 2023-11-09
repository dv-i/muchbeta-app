import { Switch } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { toast } from "react-toastify";
interface WriterFeedbackProps {
	currentFeedback: any;
	setCurrentFeedback: React.Dispatch<any>;
}

function classNames(...classes: any): string {
	return classes.filter(Boolean).join(" ");
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
	const [reviews] = useState([
		{
			question: "Was this review...?",
			review: 1,
			reviewState: review1,
		},
		{
			question: "Did the reader...?",
			review: 2,
			reviewState: review2,
		},
		{
			question: "Was this...?",
			review: 3,
			reviewState: review3,
		},
		{
			question: "Review put...",
			review: 4,
			reviewState: review4,
		},
		{
			question: "Reader is...",
			review: 5,
			reviewState: review5,
		},
	]);
	return (
		<>
			<div className="sm:col-span-4">
				<Switch.Group as="div" className="flex items-center">
					<Switch
						checked={isViewingFeedback}
						onChange={setIsViewingFeedback}
						className={classNames(
							isViewingFeedback ? "bg-indigo-600" : "bg-gray-200",
							"relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
						)}
					>
						<span
							aria-hidden="true"
							className={classNames(
								isViewingFeedback
									? "translate-x-5"
									: "translate-x-0",
								"pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
							)}
						/>
					</Switch>
					<Switch.Label as="span" className="ml-3 text-sm">
						<span className="font-medium text-gray-900">
							{isViewingFeedback
								? "Viewing Feedback"
								: "Submit feedback for Beta Reader"}
						</span>{" "}
					</Switch.Label>
				</Switch.Group>
				<div className="flex gap-20 pt-4">
					{isViewingFeedback ? (
						<div className="flex-1 ">
							<label
								htmlFor="project-title"
								className="block text-md font-medium leading-6 text-gray-900 pb-4"
							>
								Viewing feedback from {currentFeedback.name}:
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
										Review for this reader
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
										Report this review?
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
								<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
									<label
										htmlFor="username"
										className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
									>
										Exclude this Beta Reader?
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
