import React, { useState } from "react";
import {
	CheckCircleIcon,
	ChevronRightIcon,
	InformationCircleIcon,
	UserPlusIcon,
} from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Example(): JSX.Element {
	const [sections, setSections] = useState<
		{ name: string; status: "current" | "visited" | "not-visited" }[]
	>([
		{ name: "About", status: "current" },
		{ name: "Agreement", status: "not-visited" },
		{ name: "Billing", status: "not-visited" },
	]);

	const currentSection = sections.find((_) => _.status === "current");
	const currentSectionIndex = sections.findIndex(
		(_) => _.status === "current"
	);
	return (
		<div className="flex mx-auto min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 max-w-sm">
			<div className="mx-auto w-full">
				<div className="sm:mx-auto sm:w-full pb-10">
					<NavLink to="/">
						<img
							className="mx-auto h-14 w-auto"
							src={Logo}
							alt="Your Company"
						/>
					</NavLink>
					<h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
						Sign up for a new account
					</h2>
				</div>
			</div>

			<nav className="flex" aria-label="Breadcrumb">
				<ol role="list" className="flex items-center space-x-4">
					<li>
						<div>
							<a
								href="#"
								className="text-gray-400 hover:text-gray-500"
							>
								<UserPlusIcon
									className="h-5 w-5 flex-shrink-0"
									aria-hidden="true"
								/>
								<span className="sr-only">Home</span>
							</a>
						</div>
					</li>
					{sections
						.filter((_) => _.status !== "not-visited")
						.map((section, idx) => (
							<li key={section.name}>
								<div className="flex items-center">
									<ChevronRightIcon
										className="h-5 w-5 flex-shrink-0 text-gray-400"
										aria-hidden="true"
									/>
									<div
										className={`ml-4 text-sm font-medium ${
											idx === currentSectionIndex
												? "text-gray-600"
												: "text-gray-500"
										} hover:text-gray-700`}
									>
										{section.name}
									</div>
								</div>
							</li>
						))}
				</ol>
			</nav>

			{currentSection && currentSection.name === "About" && (
				<div
					style={{ minHeight: 450, height: 450 }}
					className="pt-16 flex flex-col gap-5 pb-20"
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Name
						</label>
						<div className="mt-2">
							<input
								type="text"
								name="name"
								id="name"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								placeholder="Jane Smith"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Email
						</label>
						<div className="mt-2">
							<input
								type="email"
								name="email"
								id="email"
								className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								placeholder="you@example.com"
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="phone-number"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Phone Number
						</label>
						<div className="relative mt-2 rounded-md shadow-sm">
							<div className="absolute inset-y-0 left-0 flex items-center">
								<label htmlFor="country" className="sr-only">
									Country
								</label>
								<select
									id="country"
									name="country"
									autoComplete="country"
									className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm"
								>
									<option>US</option>
									<option>CA</option>
									<option>EU</option>
								</select>
							</div>
							<input
								type="text"
								name="phone-number"
								id="phone-number"
								className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								placeholder="+1 (555) 987-6543"
							/>
						</div>
					</div>

					<button
						type="button"
						className="rounded-md border-2 border-teal-600 bg-teal-50 px-3 py-2 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-100"
					>
						<div className="inline-flex self-center gap-x-1.5">
							Verify your identity with Plaid
							<CheckCircleIcon
								className="-mr-0.5 h-5 w-5 text-teal-600"
								aria-hidden="true"
							/>
						</div>
					</button>
				</div>
			)}

			{currentSection && currentSection.name === "Agreement" && (
				<div
					style={{ minHeight: 450, height: 450 }}
					className="pt-16 flex flex-col gap-5 pb-20"
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900"
						>
							Non Disclosure Agreement
						</label>
						<div className="mt-2">
							<textarea
								style={{ height: 330 }}
								readOnly
								name="name"
								id="name"
								className="block w-full text-sm text-gray-400 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
								placeholder="Jane Smith"
							>
								This Non-Disclosure Agreement (the "Agreement")
								is entered into as of [Date] by and between
								[Disclosing Party Name], located at [Address]
								("Disclosing Party"), and [Receiving Party
								Name], located at [Address] ("Receiving Party"),
								collectively referred to as the "parties." 1.
								Confidential Information The Disclosing Party
								intends to disclose certain confidential and
								proprietary information ("Confidential
								Information") to the Receiving Party for the
								purpose of [describe the purpose]. 2.
								Obligations of Receiving Party The Receiving
								Party agrees to: a) keep the Confidential
								Information confidential; b) not disclose the
								Confidential Information to any third party
								without the prior written consent of the
								Disclosing Party; c) use the Confidential
								Information only for the purposes of [describe
								the purpose]; d) return or destroy all copies of
								the Confidential Information upon request. 3.
								Exclusions from Confidential Information
								Confidential Information does not include
								information that: a) is or becomes publicly
								known through no breach of this Agreement by the
								Receiving Party; b) is received from a third
								party without breach of any obligation of
								confidentiality; c) is independently developed
								by the Receiving Party without use of or
								reference to the Disclosing Party's Confidential
								Information. 4. Term This Agreement shall remain
								in effect for a period of [term] years from the
								date the Confidential Information is disclosed.
								5. Miscellaneous This Agreement constitutes the
								entire agreement between the parties regarding
								the subject matter hereof and supersedes all
								prior agreements and understandings, whether
								written or oral, relating to such subject
								matter. IN WITNESS WHEREOF, the parties hereto
								have executed this Non-Disclosure Agreement as
								of the date first above written.
							</textarea>
						</div>
					</div>
				</div>
			)}

			{currentSection && currentSection.name === "Billing" && (
				<div
					style={{ minHeight: 450, height: 450 }}
					className="pt-16 flex flex-col gap-5 pb-20"
				>
					<fieldset>
						<legend className="block text-sm font-medium leading-6 text-gray-900">
							Card Details
						</legend>
						<div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
							<div>
								<label
									htmlFor="card-number"
									className="sr-only"
								>
									Card number
								</label>
								<input
									type="text"
									name="card-number"
									id="card-number"
									className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="Card number"
								/>
							</div>
							<div className="flex -space-x-px">
								<div className="w-1/2 min-w-0 flex-1">
									<label
										htmlFor="card-expiration-date"
										className="sr-only"
									>
										Expiration date
									</label>
									<input
										type="text"
										name="card-expiration-date"
										id="card-expiration-date"
										className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="MM / YY"
									/>
								</div>
								<div className="min-w-0 flex-1">
									<label
										htmlFor="card-cvc"
										className="sr-only"
									>
										CVC
									</label>
									<input
										type="text"
										name="card-cvc"
										id="card-cvc"
										className="relative block w-full rounded-none rounded-br-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="CVC"
									/>
								</div>
							</div>
						</div>
					</fieldset>

					<fieldset className="">
						<legend className="block text-sm font-medium leading-6 text-gray-900">
							Billing address
						</legend>
						<div className="mt-2 -space-y-px rounded-md shadow-sm">
							<div>
								<label htmlFor="country" className="sr-only">
									Country
								</label>
								<select
									id="country"
									name="country"
									autoComplete="country-name"
									className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
								</select>
							</div>
							<div>
								<label
									htmlFor="postal-code"
									className="sr-only"
								>
									ZIP / Postal code
								</label>
								<input
									type="text"
									name="postal-code"
									id="postal-code"
									autoComplete="postal-code"
									className="relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									placeholder="ZIP / Postal code"
								/>
							</div>
						</div>
					</fieldset>

					<div className="rounded-md bg-teal-50 p-4">
						<div className="flex">
							<div className="flex-shrink-0">
								<InformationCircleIcon
									className="h-5 w-5 text-teal-400"
									aria-hidden="true"
								/>
							</div>
							<div className="ml-3 flex-1 md:flex md:justify-between">
								<p className="text-sm text-teal-700">
									A $8.99 registration fee is going to be
									deducted from this card.
								</p>
							</div>
						</div>
					</div>

					<div className="text-xs text-gray-400">
						By clicking Complete Registration, you agree to
						MuchBeta's{" "}
						<span className="font-bold text-teal-600">
							terms and conditions
						</span>
					</div>
				</div>
			)}

			{sections.findIndex((_) => _.status === "current") !==
				sections.length - 1 && (
				<button
					type="submit"
					className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
					onClick={() => {
						setSections((prev) => {
							return prev.map((_, index) => {
								if (index <= currentSectionIndex) {
									return { ..._, status: "visited" };
								} else if (index === currentSectionIndex + 1) {
									return { ..._, status: "current" };
								} else {
									return { ..._, status: "not-visited" };
								}
							});
						});
					}}
				>
					Next
				</button>
			)}

			{sections.findIndex((_) => _.status === "current") ===
				sections.length - 1 && (
				<NavLink to="/home">
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
					>
						Complete Registration
					</button>
				</NavLink>
			)}
		</div>
	);
}
