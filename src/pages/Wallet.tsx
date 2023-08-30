import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
	ArrowLeftCircleIcon,
	// ArrowPathIcon,
	ArrowUpCircleIcon,
	EllipsisHorizontalIcon,
	// PlusSmallIcon,
	BookOpenIcon,
	PencilSquareIcon,
	BanknotesIcon,
	CreditCardIcon,
} from "@heroicons/react/20/solid";
import Navbar from "../common/Navbar";
import VisaIcon from "../assets/visa.png";
import MasterIcon from "../assets/master.png";

const secondaryNavigation = [
	{ name: "Last 7 days", href: "#", current: true },
	{ name: "Last 30 days", href: "#", current: false },
	{ name: "All-time", href: "#", current: false },
];
const stats = [
	{
		name: "Total Balance",
		value: "$4,091.00",
		change: "+10.75%",
		changeType: "positive",
	},
];
type IStatuses = "Withdraw" | "Reader" | "Writer";

const statuses: {
	[key in IStatuses]: string;
} = {
	Withdraw: "text-blue-500 bg-blue-50 ring-blue-400/40",
	Reader: "text-teal-600 bg-teal-50 ring-teal-500/30",
	Writer: "text-teal-700 bg-teal-50 ring-teal-600/30",
};
const statuseIcons: {
	[key in IStatuses]: JSX.Element;
} = {
	Withdraw: <BanknotesIcon className="h-4 w-4" />,
	Reader: <BookOpenIcon className="h-4 w-4" />,
	Writer: <PencilSquareIcon className="h-4 w-4" />,
};
const days = [
	{
		date: "Today",
		dateTime: "2023-03-22",
		transactions: [
			{
				id: 1,
				invoiceNumber: "00012",
				href: "#",
				amount: "$1,600.00 USD",
				tax: "$500.00",
				status: "Reader",
				client: "Whispers of Autumn",
				description:
					"A collection of poignant haikus capturing the fleeting beauty of fall.",
				icon: ArrowUpCircleIcon,
			},
			{
				id: 2,
				invoiceNumber: "00011",
				href: "#",
				amount: "$3,000.00 USD",
				status: "Withdraw",
				client: "J.P Morgan",
				description: "XXXX 3076",
				icon: ArrowLeftCircleIcon,
			},
			{
				id: 3,
				invoiceNumber: "00009",
				href: "#",
				amount: "$1,091.00 USD",
				tax: "$130.00",
				status: "Writer",
				client: "Dreambound",
				description:
					" A novella about a young artist's journey through a surreal dreamscape in search of inspiration.",
				icon: ArrowUpCircleIcon,
			},
		],
	},
	{
		date: "Yesterday",
		dateTime: "2023-03-21",
		transactions: [
			{
				id: 4,
				invoiceNumber: "00010",
				href: "#",
				amount: "$1,400.00 USD",
				tax: "$90.00",
				status: "Reader",
				client: "Slices of Sunshine",
				description:
					"An illustrated book featuring heartwarming short stories that celebrate the simple joys of life.",
				icon: ArrowUpCircleIcon,
			},
		],
	},
];
const clients = [
	{
		id: 1,
		name: "Julia Durnin",
		imageUrl: VisaIcon,
		lastInvoice: {
			date: "08 / 2028",
			dateTime: "2022-12-13",
			amount: "XXXX XXXX XXXX",
			status: "7209",
		},
	},
	{
		id: 2,
		name: "Julia Durnin",
		imageUrl: MasterIcon,
		lastInvoice: {
			date: "04 / 2025",
			dateTime: "2023-01-22",
			amount: "XXXX XXXX XXXX",
			status: "4323",
		},
	},
	{
		id: 3,
		name: "Julia Durnin",
		imageUrl: VisaIcon,
		lastInvoice: {
			date: "01 / 2027",
			dateTime: "2023-01-23",
			amount: "XXXX XXXX XXXX",
			status: "9278",
		},
	},
];

function classNames(...classes: string[]): string {
	return classes.filter(Boolean).join(" ");
}

export default function Example(): JSX.Element {
	return (
		<>
			<Navbar />

			<main>
				<div className="relative isolate overflow-hidden">
					{/* Secondary navigation */}
					<header className="pb-4 pt-6 sm:pb-6">
						<div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
							<h1 className="text-2xl font-semibold leading-7 text-gray-900">
								Wallet
							</h1>
							<a
								href="#"
								className="ml-auto flex items-center gap-x-1 rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
							>
								<CreditCardIcon
									className="mr-1.5 h-5 w-5"
									aria-hidden="true"
								/>
								Add Payment Method
							</a>
						</div>
					</header>

					{/* Stats */}
					<div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
						<dl className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
							{stats.map((stat, statIdx) => (
								<div
									key={stat.name}
									className={classNames(
										statIdx % 2 === 1
											? "sm:border-l"
											: statIdx === 2
											? "lg:border-l"
											: "",
										"flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t border-gray-900/5 px-4 py-10 sm:px-6 lg:border-t-0 xl:px-8"
									)}
								>
									<dt className="text-sm font-semibold leading-6 text-gray-500">
										{stat.name}
									</dt>
									<dd
										className={classNames(
											stat.changeType === "negative"
												? "text-rose-600 font-semibold"
												: "text-teal-500 font-semibold",
											"text-xs font-medium"
										)}
									>
										{stat.change}
									</dd>
									<dd className="w-full flex-none text-4xl font-medium leading-10 tracking-tight text-gray-900">
										{stat.value}
									</dd>
								</div>
							))}
						</dl>
					</div>

					<div
						className="absolute left-0 top-full -z-10 mt-96 origin-top-left translate-y-40 -rotate-90 transform-gpu opacity-20 blur-3xl sm:left-1/2 sm:-ml-96 sm:-mt-10 sm:translate-y-0 sm:rotate-0 sm:transform-gpu sm:opacity-50"
						aria-hidden="true"
					>
						<div
							className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-muchbetaLight to-muchbetaDark"
							style={{
								clipPath:
									"polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
							}}
						/>
					</div>
				</div>

				<div className="space-y-16 py-16 xl:space-y-20">
					{/* Recent Transactions table */}
					<div>
						<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
							<h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
								Recent Transactions
							</h2>
							<div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto pt-1">
								{secondaryNavigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={
											item.current
												? "text-teal-600"
												: "text-gray-700"
										}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>

						<div className="mt-6 overflow-hidden border-t border-gray-100">
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
									<table className="w-full text-left">
										<thead className="sr-only">
											<tr>
												<th>Amount</th>
												<th className="hidden sm:table-cell">
													Client
												</th>
												<th>More details</th>
											</tr>
										</thead>
										<tbody>
											{days.map((day) => (
												<Fragment key={day.dateTime}>
													<tr className="text-sm leading-6 text-gray-900">
														<th
															scope="colgroup"
															colSpan={3}
															className="relative isolate py-2 font-semibold"
														>
															<time
																dateTime={
																	day.dateTime
																}
															>
																{day.date}
															</time>
															<div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
															<div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
														</th>
													</tr>
													{day.transactions.map(
														(transaction) => (
															<tr
																key={
																	transaction.id
																}
															>
																<td className="relative py-5 pr-6">
																	<div className="flex gap-x-6">
																		<transaction.icon
																			className={classNames(
																				"h-6 w-5 flex-none sm:block",
																				transaction.status ===
																					"Withdraw"
																					? "text-blue-400"
																					: "text-teal-400"
																			)}
																			aria-hidden="true"
																		/>
																		<div className="flex-auto">
																			<div className="flex items-start gap-x-3">
																				<div className="text-sm font-medium leading-6 text-gray-900">
																					{
																						transaction.amount
																					}
																				</div>
																				<div
																					className={classNames(
																						statuses[
																							transaction.status as IStatuses
																						],
																						"rounded-md py-1 px-2 text-xs flex flex-row gap-1 font-medium ring-1 ring-inset"
																					)}
																				>
																					{
																						transaction.status
																					}
																					{
																						statuseIcons[
																							transaction.status as IStatuses
																						]
																					}
																				</div>
																			</div>
																			{transaction.tax ? (
																				<div className="mt-1 text-xs leading-5 text-gray-500">
																					<div className="block sm:hidden">
																						<span className="font-semibold">
																							{
																								transaction.client
																							}
																						</span>
																						{
																							" : "
																						}
																						{
																							transaction.description
																						}
																					</div>
																					<div className="hidden sm:block">
																						{
																							transaction.tax
																						}{" "}
																						Tax
																					</div>
																				</div>
																			) : null}
																		</div>
																	</div>
																	<div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
																	<div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
																</td>
																<td className="hidden py-5 pr-6 sm:table-cell">
																	<div className="text-sm leading-6 text-gray-900">
																		{
																			transaction.client
																		}
																	</div>
																	<div className="mt-1 text-xs leading-5 text-gray-500">
																		{
																			transaction.description
																		}
																	</div>
																</td>
																<td className="py-5 text-right">
																	<div className="flex justify-end">
																		<a
																			href={
																				transaction.href
																			}
																			className="text-sm font-medium leading-6 text-teal-600 hover:text-teal-500"
																		>
																			View
																			<span className="hidden sm:inline">
																				{" "}
																				transaction
																			</span>
																			<span className="sr-only">
																				,
																				invoice
																				#
																				{
																					transaction.invoiceNumber
																				}

																				,{" "}
																				{
																					transaction.client
																				}
																			</span>
																		</a>
																	</div>
																	<div className="mt-1 text-xs leading-5 text-gray-500">
																		Invoice{" "}
																		<span className="text-gray-900">
																			#
																			{
																				transaction.invoiceNumber
																			}
																		</span>
																	</div>
																</td>
															</tr>
														)
													)}
												</Fragment>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

					{/* Recent client list */}
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
							<div className="flex items-center justify-between">
								<h2 className="text-base font-semibold leading-7 text-gray-900">
									Saved Payment Methods
								</h2>
								<a
									href="#"
									className="text-sm font-semibold leading-6 text-teal-600 hover:text-teal-500"
								>
									{/* View all */}
									<span className="sr-only">, clients</span>
								</a>
							</div>
							<ul
								role="list"
								className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
							>
								{clients.map((client) => (
									<li
										key={client.id}
										className="overflow-hidden rounded-xl border border-gray-200"
									>
										<div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
											<div className="h-12 w-12 flex items-center align-middle">
												<img
													src={client.imageUrl}
													alt={client.name}
													className=""
												/>
											</div>
											<div className="text-sm font-medium leading-6 text-gray-900">
												{client.name}
											</div>
											<Menu
												as="div"
												className="relative ml-auto"
											>
												<Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
													<span className="sr-only">
														Open options
													</span>
													<EllipsisHorizontalIcon
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
													<Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active
																			? "bg-gray-50"
																			: "",
																		"block px-3 py-1 text-sm leading-6 text-gray-900"
																	)}
																>
																	View
																	<span className="sr-only">
																		,{" "}
																		{
																			client.name
																		}
																	</span>
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<a
																	href="#"
																	className={classNames(
																		active
																			? "bg-gray-50"
																			: "",
																		"block px-3 py-1 text-sm leading-6 text-gray-900"
																	)}
																>
																	Edit
																	<span className="sr-only">
																		,{" "}
																		{
																			client.name
																		}
																	</span>
																</a>
															)}
														</Menu.Item>
													</Menu.Items>
												</Transition>
											</Menu>
										</div>
										<dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
											<div className="flex justify-between gap-x-4 py-3">
												<dt className="text-gray-500">
													Expiry
												</dt>
												<dd className="text-gray-700">
													<time
														dateTime={
															client.lastInvoice
																.dateTime
														}
													>
														{
															client.lastInvoice
																.date
														}
													</time>
												</dd>
											</div>
											<div className="flex justify-between gap-x-4 py-3">
												<dt className="text-gray-500">
													Card Number
												</dt>
												<dd className="flex items-start gap-x-2">
													<div className="font-medium text-gray-900">
														{
															client.lastInvoice
																.amount
														}
													</div>
													<div
														className={classNames(
															// eslint-disable-next-line @typescript-eslint/ban-ts-comment
															// @ts-expect-error
															statuses[
																client
																	.lastInvoice
																	.status
															],
															"rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
														)}
													>
														{
															client.lastInvoice
																.status
														}
													</div>
												</dd>
											</div>
										</dl>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
