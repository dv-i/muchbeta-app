import { useState } from "react";
import Select from "react-tailwindcss-select";
import ProfileImg from "../assets/julia_photo.jpeg";

import {
	type Option,
	type SelectValue,
} from "react-tailwindcss-select/dist/components/type";
import { classNames } from "../utils";
import {
	ArrowUpIcon,
	ArrowDownIcon,
	BanknotesIcon,
} from "@heroicons/react/20/solid";

const secondaryNavigation = [
	{ name: "Account", href: "#", current: true },
	{ name: "Notifications", href: "#", current: false },
	{ name: "Billing", href: "#", current: false },
	{ name: "Teams", href: "#", current: false },
	{ name: "Integrations", href: "#", current: false },
];

const stats = [
	{
		name: "Average rating",
		stat: "4.5",
		previousStat: "4.1",
		change: "9.7%",
		changeType: "increase",
	},
	{
		name: "Missed deadline tally",
		stat: "2",
		previousStat: "3",
		change: "33%",
		changeType: "decrease",
	},
	{
		name: "Misconduct reports",
		stat: "0",
		previousStat: "1",
		change: "100%",
		changeType: "decrease",
	},
];

export default function Example(): JSX.Element {
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
	return (
		<main>
			<header className="border-b border-white/5">
				{/* Secondary navigation */}
				<nav className="flex overflow-x-auto py-4">
					<ul
						role="list"
						className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-500 sm:px-6 lg:px-8"
					>
						{secondaryNavigation.map((item) => (
							<li key={item.name}>
								<a
									href={item.href}
									className={
										item.current ? "text-teal-400" : ""
									}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</header>

			{/* Settings forms */}
			<div className="divide-y divide-white/5">
				{/* Stats */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Your stats
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							Your average rating is visible to everyone, but the
							rest of your statistics are confidential and can
							only be accessed by you.
						</p>
					</div>
					<div>
						<h3 className="text-base font-semibold leading-6 text-gray-900">
							Last 30 days
						</h3>
						<dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-1 md:divide-x md:divide-y-0">
							{stats.map((item) => (
								<div
									key={item.name}
									className="px-4 py-5 sm:p-6"
								>
									<dt className="text-base font-normal text-gray-900">
										{item.name}
									</dt>
									<dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
										<div className="flex items-baseline text-2xl font-semibold text-indigo-600">
											{item.stat}
											<span className="ml-2 text-sm font-medium text-gray-500">
												from {item.previousStat}
											</span>
										</div>

										<div
											className={classNames(
												item.changeType === "increase"
													? "bg-green-100 text-green-800"
													: "bg-red-100 text-red-800",
												"inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
											)}
										>
											{item.changeType === "increase" ? (
												<ArrowUpIcon
													className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
													aria-hidden="true"
												/>
											) : (
												<ArrowDownIcon
													className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
													aria-hidden="true"
												/>
											)}

											<span className="sr-only">
												{" "}
												{item.changeType === "increase"
													? "Increased"
													: "Decreased"}{" "}
												by{" "}
											</span>
											{item.change}
										</div>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>

				{/* Priority tokens */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Your priority tokens
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							Priority tokens allow you to accept projects before
							they are open to other users on the platform.
						</p>
					</div>
					<div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
						<dt>
							<div className="absolute rounded-md bg-indigo-500 p-3">
								<BanknotesIcon
									className="h-6 w-6 text-white"
									aria-hidden="true"
								/>
							</div>
							<p className="ml-16 truncate text-sm font-medium text-gray-500">
								{"Priority tokens"}
							</p>
						</dt>
						<dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
							<p className="text-2xl font-semibold text-gray-900">
								{200}
							</p>
							<div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-indigo-600 hover:text-indigo-500"
									>
										Buy more
									</a>
								</div>
							</div>
						</dd>
					</div>
				</div>

				{/* Basic Information */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Personal Information
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							Your personal name will be kept confidential and
							will not appear on your public profile. All
							interactions on our platform are anonymous.
						</p>
					</div>

					<form className="md:col-span-2">
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
							<div className="col-span-full flex items-center gap-x-8">
								<img
									src={ProfileImg}
									alt=""
									className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
								/>
								<div>
									<button
										type="button"
										className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500"
									>
										Change avatar
									</button>
									<p className="mt-2 text-xs leading-5 text-gray-500">
										JPG, GIF or PNG. 1MB max.
									</p>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label
									htmlFor="first-name"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									First name
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										disabled
										value={"Squirmy"}
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="sm:col-span-3">
								<label
									htmlFor="last-name"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Last name
								</label>
								<div className="mt-2">
									<input
										type="text"
										name="last-name"
										id="last-name"
										disabled
										value={"Wormy"}
										autoComplete="family-name"
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										value={"squirmy@muchbeta.org"}
										disabled
										autoComplete="email"
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="userid"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Username
								</label>
								<div className="mt-2">
									<div className="flex rounded-md bg-teal-600/10 ring-1 ring-inset ring-teal-600/20 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-500">
										<input
											type="text"
											name="userid"
											id="userid"
											autoComplete="userid"
											value={"squirmywormy"}
											className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="timezone"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Location
								</label>
								<div className="mt-2">
									<select
										id="timezone"
										name="timezone"
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6 [&_*]:text-black"
									>
										<option>New York</option>
										<option>Toronto</option>
										<option>London</option>
									</select>
								</div>
							</div>
							<div className="col-span-full">
								<label
									htmlFor="dob"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Date of birth
								</label>
								<div className="mt-2">
									<input
										type="date"
										name="dob"
										id="dob"
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>

						<div className="mt-8 flex">
							<button className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
								Save
							</button>
						</div>
					</form>
				</div>

				{/* Preferences */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Genre Preferences
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							Choose your preferred genres to read as a beta
							reader. This helps us match you with books you're
							most likely to enjoy and provide valuable feedback
							on.
						</p>
					</div>

					<form className="md:col-span-2">
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
							<div className="col-span-full">
								<label
									htmlFor="logout-password"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Your genres
								</label>
								<div className="mt-2">
									<Select
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
										onChange={function (
											value: SelectValue
										): void {
											value && setGenrePreferences(value);
										}}
										primaryColor={"teal"}
									/>
								</div>
							</div>
						</div>

						<div className="mt-8 flex">
							<button
								//
								className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
							>
								Save Preferences
							</button>
						</div>
					</form>
				</div>

				{/* Password */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Change password
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							Update your password associated with your account.
						</p>
					</div>

					<form className="md:col-span-2">
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
							<div className="col-span-full">
								<label
									htmlFor="current-password"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Current password
								</label>
								<div className="mt-2">
									<input
										id="current-password"
										name="current_password"
										type="password"
										autoComplete="current-password"
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="new-password"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									New password
								</label>
								<div className="mt-2">
									<input
										id="new-password"
										name="new_password"
										type="password"
										autoComplete="new-password"
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="col-span-full">
								<label
									htmlFor="confirm-password"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Confirm password
								</label>
								<div className="mt-2">
									<input
										id="confirm-password"
										name="confirm_password"
										type="password"
										autoComplete="new-password"
										className="block w-full rounded-md border-0 bg-teal-600/10 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-teal-600/20 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>

						<div className="mt-8 flex">
							<button className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">
								Save
							</button>
						</div>
					</form>
				</div>

				{/* Delete your account */}
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Delete account
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							No longer want to use our service? You can delete
							your account here. This action is not reversible.
							All information related to this account will be
							deleted permanently.
						</p>
					</div>

					<form className="flex items-start md:col-span-2">
						<button className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400">
							Yes, delete my account
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
