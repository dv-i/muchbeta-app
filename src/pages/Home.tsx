import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import ReactCardCarousel from "react-card-carousel";
import { classNames } from "../utils";

function Home(): JSX.Element {
	return (
		<>
			<RoleSelection />
			<SponsorAD />
			<PromotionSection />
			<PollSection />
		</>
	);
}

export default Home;

export function RoleSelection(): JSX.Element {
	return (
		<div className="bg-teal-700">
			<div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Role Selection
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-200">
						Choose your role and explore our application as one of
						the following. At any given moment, you can switch your
						role.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<NavLink
							to="/reader"
							className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Reader
						</NavLink>

						<NavLink
							to="/writer"
							className="rounded-md bg-white ml-5 px-3.5 py-2.5 text-sm font-semibold text-teal-600 shadow-sm hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Writer
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export function SponsorAD(): JSX.Element {
	return (
		<div className="relative overflow-hidden bg-white">
			<div
				className="hidden lg:absolute lg:inset-0 lg:block"
				aria-hidden="true"
			>
				<svg
					className="absolute left-1/2 top-0 -translate-y-8 translate-x-64 transform"
					width={640}
					height={784}
					fill="none"
					viewBox="0 0 640 784"
				>
					<defs>
						<pattern
							id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
							x={118}
							y={0}
							width={20}
							height={20}
							patternUnits="userSpaceOnUse"
						>
							<rect
								x={0}
								y={0}
								width={4}
								height={4}
								className="text-gray-200"
								fill="currentColor"
							/>
						</pattern>
					</defs>
					<rect
						y={72}
						width={640}
						height={640}
						className="text-gray-50"
						fill="currentColor"
					/>
					<rect
						x={118}
						width={404}
						height={784}
						fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
					/>
				</svg>
			</div>

			<div className="relative pb-16 sm:pb-24 lg:pb-3">
				<main className="mx-auto pt-6 max-w-7xl px-4 px-6 sm:mt-24 lg:mt-32 lg:mb-28">
					<div className="lg:grid lg:grid-cols-12 lg:gap-8">
						<div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
							<h1>
								{/* <span className="block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg">
									Sponsor Advertisement
								</span> */}
								<span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
									<span className="block text-gray-900">
										Showcase your brand with
										<span className="inline text-teal-600">
											{" "}
											Muchbeta
										</span>
									</span>
								</span>
							</h1>
							<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
								Our platform offers a unique opportunity for
								your business to connect with an engaged,
								literary-minded audience.
							</p>
						</div>
						<div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
							<svg
								className="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
								width={640}
								height={784}
								fill="none"
								viewBox="0 0 640 784"
								aria-hidden="true"
							>
								<defs>
									<pattern
										id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
										x={118}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className="text-gray-200"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									y={72}
									width={640}
									height={640}
									className="text-gray-50"
									fill="currentColor"
								/>
								<rect
									x={118}
									width={404}
									height={784}
									fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
								/>
							</svg>
							<div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
								<button
									type="button"
									className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
								>
									<span className="sr-only">
										Watch our video to learn more
									</span>
									<img
										className="w-full"
										src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
										alt=""
									/>
									<span
										className="absolute inset-0 flex h-full w-full items-center justify-center"
										aria-hidden="true"
									>
										<svg
											className="h-20 w-20 text-teal-500"
											fill="currentColor"
											viewBox="0 0 84 84"
										>
											<circle
												opacity="0.9"
												cx={42}
												cy={42}
												r={42}
												fill="white"
											/>
											<path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
										</svg>
									</span>
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export function PromotionSection(): JSX.Element {
	return (
		<div className="bg-teal-700">
			<div className="relative isolate">
				<div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-4 px-4">
					<h1 className="text-center py-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Authors Promotion
						<p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-3xl">
							The Coldest Sunset
						</p>
						<p className="font-normal max-w-xl mx-auto text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
							Showcase your finished projects that have been honed
							by the Muchbeta community and connect directly with
							your audience.
						</p>
					</h1>
					<div className="mt-5 mx-auto flex rounded-3xl max-w-2xl flex-col gap-16 bg-white/5 px-6 py-8 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
						<div className="w-full">
							<div
								className="relative h-full w-full flex align-middle justify-center"
								style={{ height: 400 }}
							>
								<ReactCardCarousel
									autoplay={true}
									autoplay_speed={10000}
								>
									<CarouselCard index={1} />
									<CarouselCard index={2} />
									<CarouselCard index={3} />
								</ReactCardCarousel>
							</div>
						</div>
					</div>
				</div>
				<div
					className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
					aria-hidden="true"
				>
					<div
						className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
						style={{
							clipPath:
								"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export function CarouselCard({ index }: { index: number }): JSX.Element {
	const sampleImages = [
		"https://images.unsplash.com/photo-1521109464564-2fa2faa95858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
		"https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
		"https://images.unsplash.com/photo-1542370285-b8eb8317691c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1426&q=80",
	];
	return (
		<div
			className="max-w-sm rounded-3xl bg-white overflow-hidden shadow-lg"
			style={{ width: 280, height: 400 }}
		>
			<img
				className="w-full aspect-auto"
				style={{ height: 210 }}
				src={sampleImages[index - 1]}
				alt="Sunset in the mountains"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
				<p className="text-gray-700 text-base">
					Showcase your finished projects that have been honed by the
					Muchbeta community and connect directly with your audience.
				</p>
			</div>
			<div className="px-6 pt-4 pb-2 hidden">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#photography
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#travel
				</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
					#winter
				</span>
			</div>
		</div>
	);
}

export function PollSection(): JSX.Element {
	const gradientColor = {
		light: "#9EF0E1",
		dark: "#439288",
	};
	return (
		<div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
			<div
				className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
				aria-hidden="true"
			>
				<div
					className={`aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[${gradientColor.dark}] to-[${gradientColor.light}] opacity-30`}
					style={{
						clipPath:
							"polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Poll
					</h1>
					<p className="mt-6 text-xl leading-8 text-gray-700">
						"What excites you most about Muchbeta?"
					</p>
				</div>
				<Poll />
			</div>
		</div>
	);
}

const plans = [
	{
		heading: "Seamless",
		description: "Receiving helpful, actionable feedback.",
		disk: "160 GB SSD disk",
		price: "$40",
	},
	{
		heading: "Library",
		description: "Staying motivated to meet monthly writing goals.",
		disk: "256 GB SSD disk",
		price: "$80",
	},
	{
		heading: "Both",
		description: "Earning by beta reading.",
		disk: "512 GB SSD disk",
		price: "$160",
	},
];

export function Poll(): JSX.Element {
	const [selected, setSelected] = useState(plans[0]);

	return (
		<RadioGroup className="pt-10" value={selected} onChange={setSelected}>
			<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
			<div className="space-y-4">
				{plans.map((plan) => (
					<RadioGroup.Option
						key={plan.heading}
						value={plan}
						className={({ active }) =>
							classNames(
								active
									? "border-teal-600 ring-2 ring-teal-600"
									: "border-gray-300",
								"relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between"
							)
						}
					>
						{({ active, checked }) => (
							<>
								<span className="flex items-center">
									<span className="flex flex-col text-sm">
										{/* <RadioGroup.Label
											as="span"
											className="font-medium text-gray-900"
										>
											{plan.heading}
										</RadioGroup.Label> */}
										<RadioGroup.Description
											as="span"
											className="text-gray-500"
										>
											<span className="inline">
												{plan.description}
											</span>{" "}
										</RadioGroup.Description>
									</span>
								</span>

								<span
									className={classNames(
										active ? "border" : "border-2",
										checked
											? "border-teal-600"
											: "border-transparent",
										"pointer-events-none absolute -inset-px rounded-lg"
									)}
									aria-hidden="true"
								/>
							</>
						)}
					</RadioGroup.Option>
				))}
			</div>
		</RadioGroup>
	);
}
