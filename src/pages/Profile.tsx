import { useState } from "react";
import Select from "react-tailwindcss-select";
import ProfileImg from "../assets/julia_photo.jpeg";

import {
	type Option,
	type SelectValue,
} from "react-tailwindcss-select/dist/components/type";

const secondaryNavigation = [
	{ name: "Account", href: "#", current: true },
	{ name: "Notifications", href: "#", current: false },
	{ name: "Billing", href: "#", current: false },
	{ name: "Teams", href: "#", current: false },
	{ name: "Integrations", href: "#", current: false },
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
				{/* Basic Information */}
				<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Personal Information
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							Use a permanent address where you can receive mail.
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
										value={"Julia"}
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
										value={"Durnin"}
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
										value={"juliadurnin@gmail.com"}
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
										<span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
											example.com/
										</span>
										<input
											type="text"
											name="userid"
											id="userid"
											autoComplete="userid"
											value={"jdurnin"}
											className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="janesmith"
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
										<option>Torronto</option>
										<option>London</option>
									</select>
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
				<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
					<div>
						<h2 className="text-base font-semibold leading-7 text-gray-700">
							Genre Preferences
						</h2>
						<p className="mt-1 text-sm leading-6 text-gray-500">
							Unlock a world of curated content by sharing your
							favorite genre! Let us transform your preferences
							into a personalized content experience using our
							cutting-edge algorithms.
						</p>
					</div>

					<form className="md:col-span-2">
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
							<div className="col-span-full">
								<label
									htmlFor="logout-password"
									className="block text-sm font-medium leading-6 text-gray-700"
								>
									Your password
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
				<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
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
				<div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
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
