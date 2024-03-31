import {
	EllipsisVerticalIcon,
	PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReaderJobModal } from "../components/ReaderJobModal";
import { readerData } from "../constants";
import { Menu, Transition } from "@headlessui/react";
import { calculatePrice } from "../utils";
import { News } from "./Writer";

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

export default function Example(): JSX.Element {
	const [jobModaIsOpen, setJobModalIsOpen] = useState<boolean>(false);
	const [currentJob, setCurrentJob] = useState<string | undefined>();
	return (
		<main>
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
							{/* <img
									src="https://tailwindui.com/img/logos/48x48/tuple.svg"
									alt=""
									className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
								/> */}
							<h1>
								<div className="text-sm leading-6 font-semibold text-gray-500">
									Home
								</div>
								<div className="mt-1 text-2xl font-semibold leading-6 text-teal-600">
									Reader
								</div>
							</h1>
						</div>
						<div className="flex items-center gap-x-4 sm:gap-x-6">
							<NavLink
								to={"/writer"}
								className="rounded-md flex flex-row align-middle justify-center self-center items-center gap-2 bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
							>
								<PencilSquareIcon className="h-4 w-4" /> Writer
								Mode
							</NavLink>
						</div>
					</div>
				</div>
			</header>

			<div className="mx-auto max-w-7xl">
				<div className="mt-6 mb-6 px-8">
					<h2 className="text-sm font-medium text-gray-900">
						Projects In-Progress
					</h2>
					<ul
						role="list"
						className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
					>
						{readerData
							.filter((match) => match.status === "in-progress")
							.map((project) => (
								<li
									key={project.id}
									className="relative col-span-1 flex rounded-md shadow-sm"
								>
									<div
										className={classNames(
											"bg-teal-600",
											"flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
										)}
									>
										{project.initials}
									</div>
									<div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
										<div className="flex-1 truncate px-4 py-2 text-sm h-12">
											<span
												onClick={() => {
													setCurrentJob(
														project.title
													);
													setJobModalIsOpen(true);
												}}
												className="font-medium text-gray-900 hover:text-gray-600 cursor-pointer"
											>
												{project.title}
											</span>
										</div>
										<Menu
											as="div"
											className="flex-shrink-0 pr-2"
										>
											<Menu.Button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
												<span className="sr-only">
													Open options
												</span>
												<EllipsisVerticalIcon
													className="h-5 w-5"
													aria-hidden="true"
												/>
											</Menu.Button>
											<Transition
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
													<div className="py-1">
														<Menu.Item>
															{({ active }) => (
																<span
																	onClick={() => {
																		setCurrentJob(
																			project.title
																		);
																		setJobModalIsOpen(
																			true
																		);
																	}}
																	className={classNames(
																		active
																			? "bg-gray-100 text-gray-900"
																			: "text-gray-700",
																		"block px-4 py-2 text-sm cursor-pointer"
																	)}
																>
																	View
																</span>
															)}
														</Menu.Item>
													</div>
													<div className="py-1">
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active
																			? "bg-gray-100 text-gray-900"
																			: "text-gray-700",
																		"block px-4 py-2 text-sm"
																	)}
																>
																	Share
																</a>
															)}
														</Menu.Item>
													</div>
												</Menu.Items>
											</Transition>
										</Menu>
									</div>
								</li>
							))}
					</ul>
				</div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					<div className="shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
						<div className="sm:mx-0 px-4 py-8 pb-0 sm:px-8 sm:pb-14 xl:px-12 xl:pb-4 xl:pt-8">
							<table className="w-full whitespace-nowrap text-left text-sm leading-6">
								<thead className="border-b border-gray-200 text-gray-900">
									<tr>
										<th
											scope="col"
											className="px-0 py-3 font-bold text-lg w-full"
										>
											Projects You Might Like
										</th>
										<th
											scope="col"
											className="py-3 pl-8 pr-0 text-right text-md font-semibold"
										>
											Price
										</th>
									</tr>
								</thead>
								<tbody>
									{readerData
										.filter(
											(item) =>
												item.status === "suggested"
										)
										.map((item) => (
											<tr
												onClick={() => {
													setCurrentJob(item.title);
													setJobModalIsOpen(true);
												}}
												key={item.id}
												className="border-b border-gray-100 cursor-pointer"
											>
												<td className="max-w-0 px-0 py-5 align-top">
													<div className="truncate font-semibold text-md text-teal-700">
														{item.title}
														<span className="text-sm text-gray-600">
															{item.author
																? ` by ${item.author}`
																: ""}
														</span>
													</div>
													<div className=" whitespace-break-spaces text-gray-500">
														{item.description}
													</div>
												</td>

												<td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700">
													$
													{calculatePrice(
														item.wordCount
													)}
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					</div>

					<div className="lg:col-start-3">
						{/* Activity feed */}
						<h2 className="text-lg font-semibold leading-6 text-gray-900">
							Past Reads
						</h2>
						<ul role="list" className="mt-6 space-y-6">
							{readerData
								.filter((item) => item.status === "completed")
								.map((activityItem, activityItemIdx) => (
									<li
										onClick={() => {
											setCurrentJob(activityItem.title);
											setJobModalIsOpen(true);
										}}
										key={activityItem.id}
										className="relative flex gap-x-4 cursor-pointer"
									>
										<div
											className={classNames(
												activityItemIdx ===
													readerData.filter(
														(item) =>
															item.status ===
															"completed"
													).length -
														1
													? "h-6"
													: "-bottom-6",
												"absolute left-0 top-0 flex w-6 justify-center"
											)}
										>
											<div className="w-px bg-gray-200" />
										</div>
										{activityItem.comment ? (
											<>
												<img
													src={activityItem.imageUrl}
													alt=""
													className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
												/>
												<div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
													<div className="flex justify-between gap-x-4">
														<div className="py-0.5 text-xs leading-5 text-gray-500">
															<span className="font-medium text-gray-900">
																{
																	activityItem.title
																}
															</span>
															{"'s"} author
															commented
														</div>
														<time
															dateTime={
																activityItem.date
															}
															className="flex-none py-0.5 text-xs leading-5 text-gray-500"
														>
															{activityItem.date}
														</time>
													</div>
													<p className="text-sm leading-6 text-gray-500">
														{activityItem.comment}
													</p>
												</div>
											</>
										) : (
											<>
												<div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
													{activityItem.status ===
													"completed" ? (
														<CheckCircleIcon
															className="h-6 w-6 text-teal-600"
															aria-hidden="true"
														/>
													) : (
														<div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
													)}
												</div>
												<p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
													You completed{" "}
													<span className="font-medium text-gray-900">
														{activityItem.title}
													</span>
													{"'s "}
													reader job.
												</p>
												<time
													dateTime={activityItem.date}
													className="flex-none py-0.5 text-xs leading-5 text-gray-500"
												>
													{activityItem.date}
												</time>
											</>
										)}
									</li>
								))}
						</ul>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-7xl lg:p-0 mg:p-0 xl:p-0 p-4 md:pb-16 lg:pb-16 xl:pb-16 rounded-lg">
				<News />
			</div>
			{jobModaIsOpen && (
				<ReaderJobModal
					currentJob={currentJob}
					isOpen={jobModaIsOpen}
					setIsOpen={setJobModalIsOpen}
				/>
			)}
		</main>
	);
}
