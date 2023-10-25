import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReaderJobModal } from "../components/ReaderJobModal";
import { matches, pastReads } from "../constants";

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

			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{/* Invoice summary */}
					{/* <div className="lg:col-start-3 lg:row-end-1">
							<h2 className="sr-only">Summary</h2>
							<div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
								<dl className="flex flex-wrap">
									<div className="flex-auto pl-6 pt-6">
										<dt className="text-sm font-semibold leading-6 text-gray-900">
											Amount
										</dt>
										<dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
											$10,560.00
										</dd>
									</div>
									<div className="flex-none self-end px-6 pt-4">
										<dt className="sr-only">Status</dt>
										<dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
											Paid
										</dd>
									</div>
									<div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
										<dt className="flex-none">
											<span className="sr-only">
												Client
											</span>
											<UserCircleIcon
												className="h-6 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</dt>
										<dd className="text-sm font-medium leading-6 text-gray-900">
											Alex Curren
										</dd>
									</div>
									<div className="mt-4 flex w-full flex-none gap-x-4 px-6">
										<dt className="flex-none">
											<span className="sr-only">
												Due date
											</span>
											<CalendarDaysIcon
												className="h-6 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</dt>
										<dd className="text-sm leading-6 text-gray-500">
											<time dateTime="2023-01-31">
												January 31, 2023
											</time>
										</dd>
									</div>
									<div className="mt-4 flex w-full flex-none gap-x-4 px-6">
										<dt className="flex-none">
											<span className="sr-only">
												Status
											</span>
											<CreditCardIcon
												className="h-6 w-5 text-gray-400"
												aria-hidden="true"
											/>
										</dt>
										<dd className="text-sm leading-6 text-gray-500">
											Paid with MasterCard
										</dd>
									</div>
								</dl>
								<div className="mt-6 border-t border-gray-900/5 px-6 py-6">
									<a
										href="#"
										className="text-sm font-semibold leading-6 text-gray-900"
									>
										Download receipt{" "}
										<span aria-hidden="true">&rarr;</span>
									</a>
								</div>
							</div>
						</div> */}

					{/* Invoice */}
					<div className="shadow-sm ring-1 ring-gray-900/5 sm:rounded-lg lg:col-span-2 lg:row-span-2 lg:row-end-2">
						<div className="sm:mx-0 px-4 py-8 pb-0 sm:px-8 sm:pb-14 xl:px-12 xl:pb-4 xl:pt-8">
							<table className="w-full whitespace-nowrap text-left text-sm leading-6">
								<thead className="border-b border-gray-200 text-gray-900">
									<tr>
										<th
											scope="col"
											className="px-0 py-3 font-bold text-lg w-full"
										>
											Matches
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
									{matches.map((item) => (
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
												{item.price}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<Updates />
					</div>

					<div className="lg:col-start-3">
						{/* Activity feed */}
						<h2 className="text-lg font-semibold leading-6 text-gray-900">
							Past Reads
						</h2>
						<ul role="list" className="mt-6 space-y-6">
							{pastReads.map((activityItem, activityItemIdx) => (
								<li
									onClick={() => {
										setCurrentJob(
											activityItem.readJob.name
										);
										setJobModalIsOpen(true);
									}}
									key={activityItem.id}
									className="relative flex gap-x-4 cursor-pointer"
								>
									<div
										className={classNames(
											activityItemIdx ===
												pastReads.length - 1
												? "h-6"
												: "-bottom-6",
											"absolute left-0 top-0 flex w-6 justify-center"
										)}
									>
										<div className="w-px bg-gray-200" />
									</div>
									{activityItem.type === "commented" ? (
										<>
											<img
												src={
													activityItem.readJob
														.imageUrl
												}
												alt=""
												className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50"
											/>
											<div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
												<div className="flex justify-between gap-x-4">
													<div className="py-0.5 text-xs leading-5 text-gray-500">
														<span className="font-medium text-gray-900">
															{
																activityItem
																	.readJob
																	.name
															}
														</span>
														{"'s"} author commented
													</div>
													<time
														dateTime={
															activityItem.dateTime
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
												{activityItem.type ===
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
												You {activityItem.type}{" "}
												<span className="font-medium text-gray-900">
													{activityItem.readJob.name}
												</span>
												{"'s "}
												reader job.
											</p>
											<time
												dateTime={activityItem.dateTime}
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

export function Updates(): JSX.Element {
	return (
		<div className="relative rounded-lg m-4 sm:m-4 bg-gray-900">
			<div className="relative lg:h-full rounded-lg overflow-hidden bg-teal-600 md:absolute md:left-0 md:h-full md:w-1/4 lg:w-1/2">
				<img
					className="h-full w-full object-cover"
					// src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
					src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
					alt=""
				/>
				<svg
					viewBox="0 0 926 676"
					aria-hidden="true"
					className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
				>
					<path
						fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
						fillOpacity=".4"
						d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
					/>
					<defs>
						<linearGradient
							id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
							x1="926.392"
							x2="-109.635"
							y1=".176"
							y2="321.024"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#776FFF" />
							<stop offset={1} stopColor="#FF4694" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="relative mx-auto w-full py-8 sm:py-16 lg:px-8">
				<div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-2/3 lg:pl-24 lg:pr-0 xl:pl-40 ">
					<h2 className="text-base font-semibold leading-7 text-teal-400">
						News / Updates
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Exciting News for Community
					</p>
					<p className="mt-6 text-base leading-7 text-gray-300">
						Dive into a new chapter of reading with our latest
						update, delivering a fresh and engaging experience that
						connects book lovers worldwide. Explore enhanced
						features, discover new authors, and connect with fellow
						readers who share your passion, all in one vibrant
						community.
					</p>
					{/* <div className="mt-8">
						<a
							href="#"
							className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Visit the help center
						</a>
					</div> */}
				</div>
			</div>
		</div>
	);
}
