import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import {
	ChevronRightIcon,
	EllipsisVerticalIcon,
} from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import { projects } from "../constants";
import { WriterProjectModal } from "../components/WriterProjectModal";
import { classNames } from "../utils";

const pinnedProjects = projects.filter((project) => project.pinned);

export default function Example(): JSX.Element {
	const [projectModaIsOpen, setProjectModalIsOpen] = useState<boolean>(false);
	const [currentProject, setCurrentProject] = useState<string | undefined>();

	useEffect(() => {
		if (!projectModaIsOpen) {
			setCurrentProject(undefined);
		}
	}, [projectModaIsOpen]);
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
										Home
									</div>
									<div className="mt-1 text-2xl font-semibold leading-6 text-teal-600">
										Writer
									</div>
								</h1>
							</div>
							<div className="flex items-center gap-x-4 sm:gap-x-6">
								<div
									onClick={() => {
										setProjectModalIsOpen(true);
									}}
									className="rounded-md flex flex-row align-middle justify-center self-center items-center gap-2 bg-white border-teal-600 border-2 cursor-pointer px-3 py-2 text-sm font-semibold text-teal-600 hover:text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
								>
									<PlusCircleIcon className="h-4 w-4" /> Start
									a Project
								</div>
								<NavLink
									to={"/reader"}
									className="rounded-md flex flex-row align-middle justify-center self-center items-center gap-2 bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
								>
									<BookOpenIcon className="h-4 w-4" /> Reader
									Mode
								</NavLink>
							</div>
						</div>
					</div>
				</header>
				<main className="flex-1">
					{/* Page title & actions */}
					{/* <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
							<div className="min-w-0 flex-1">
								<h1>
									<div className="text-sm leading-6 font-semibold text-gray-500">
										Home
									</div>
									<div className="mt-1 text-2xl font-semibold leading-6 text-teal-600">
										Writer
									</div>
								</h1>
							</div>
							<div className="mt-4 flex sm:ml-4 sm:mt-0">
								<NavLink
									to="/reader"
									type="button"
									className="order-0 gap-2 inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 sm:order-1 sm:ml-3"
								>
									<BookOpenIcon className="h-4 w-4" />
									Reader Mode
								</NavLink>
							</div>
						</div> */}
					{/* Pinned projects */}
					<div className="mt-6 px-4 sm:px-6 lg:px-8">
						<h2 className="text-sm font-medium text-gray-900">
							Current Projects
						</h2>
						<ul
							role="list"
							className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"
						>
							{pinnedProjects.map((project) => (
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
													setCurrentProject(
														project.title
													);
													setProjectModalIsOpen(true);
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
																		setCurrentProject(
																			project.title
																		);
																		setProjectModalIsOpen(
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

					{/* Projects list (only on smallest breakpoint) */}
					<div className="mt-10 sm:hidden">
						<div className="px-4 sm:px-6">
							<h2 className="text-sm font-medium text-gray-900">
								Past Projects
							</h2>
						</div>
						<ul
							role="list"
							className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
						>
							{projects.map((project) => (
								<li key={project.id}>
									<span
										onClick={() => {
											setCurrentProject(project.title);
											setProjectModalIsOpen(true);
										}}
										className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6 cursor-pointer"
									>
										<span className="flex items-center space-x-3 truncate">
											<span
												className={classNames(
													"bg-teal-600",
													"h-2.5 w-2.5 flex-shrink-0 rounded-full"
												)}
												aria-hidden="true"
											/>
											<span className="truncate text-sm font-medium leading-6">
												{project.title}{" "}
												<span className="truncate font-normal text-gray-500 text-xs">
													{project.description}
												</span>
											</span>
										</span>
										<ChevronRightIcon
											className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
											aria-hidden="true"
										/>
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Projects table (small breakpoint and up) */}
					<div className="mt-8 hidden sm:block">
						<div className="inline-block min-w-full border-b border-l border-r border-gray-200 align-middle">
							<table className="min-w-full">
								<thead>
									<tr className="border-t border-gray-200">
										<th
											className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
											scope="col"
										>
											<span className="lg:pl-2">
												Past Projects
											</span>
										</th>

										<th
											className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
											scope="col"
										>
											Last updated
										</th>
										<th
											className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
											scope="col"
										/>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100 bg-white">
									{projects.map((project) => (
										<tr
											key={project.id}
											onClick={() => {
												setCurrentProject(
													project.title
												);
												setProjectModalIsOpen(true);
											}}
											className="cursor-pointer"
										>
											<td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
												<div className="flex items-center space-x-3 lg:pl-2">
													<div
														className={classNames(
															"bg-teal-600",
															"h-2.5 w-2.5 flex-shrink-0 rounded-full"
														)}
														aria-hidden="true"
													/>
													<span className="truncate hover:text-gray-600">
														<span>
															{project.title}{" "}
															<span className="font-normal text-gray-500">
																{" "}
																{
																	project.description
																}
															</span>
														</span>
													</span>
												</div>
											</td>
											<td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
												{project.lastUpdated}
											</td>
											<td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
												<ChevronRightIcon
													className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
													aria-hidden="true"
												/>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</main>
			</div>
			<div className="mx-auto max-w-7xl lg:p-0 mg:p-0 xl:p-0 md:pt-16 lg:pt-16 xl:pt-16 p-4 md:pb-16 lg:pb-16 xl:pb-16 rounded-lg">
				<News />
			</div>

			{projectModaIsOpen && (
				<WriterProjectModal
					currentProject={currentProject}
					isOpen={projectModaIsOpen}
					setIsOpen={setProjectModalIsOpen}
				/>
			)}
		</div>
	);
}

export function News(): JSX.Element {
	return (
		<div className="relative bg-gray-900 rounded-lg">
			<div className="relative h-80 rounded-lg overflow-hidden bg-teal-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
				<img
					className="h-full w-full object-cover"
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
			<div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
					<h2 className="text-base font-semibold leading-7 text-teal-400">
						News / Updates
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						A Special Thanks to Our Supporters
					</p>
					<p className="mt-6 text-base leading-7 text-gray-300">
						As we unveil Muchbeta in its soft launch phase, we
						extend our heartfelt gratitude to you, our pioneering
						supporters. Your belief in our vision has brought us to
						this pivotal moment, and we're thrilled to grant you
						exclusive early access to the platform.
					</p>
					<div className="mt-8">
						<a
							href="#"
							className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Visit the help center
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
