import React from "react";
import { Disclosure } from "@headlessui/react";
import {
	ArrowLeftIcon,
	WalletIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Example(): JSX.Element {
	const navigate = useNavigate();
	const handleOnClickBackButton = (): void => {
		navigate(-1);
	};
	return (
		<Disclosure as="nav" className="bg-white shadow">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 justify-between">
					<div className="absolute inset-y-0 left-0 flex items-center ">
						{/* Mobile menu button */}
						<Disclosure.Button
							onClick={handleOnClickBackButton}
							className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
						>
							<ArrowLeftIcon
								className="block h-6 w-6"
								aria-hidden="true"
							/>
						</Disclosure.Button>
					</div>
					<div className="flex flex-1 items-center justify-center">
						<div className="flex flex-shrink-0 items-center">
							<NavLink to="/home">
								<img
									className="h-8 w-auto"
									src={Logo}
									alt="muchbeta"
								/>
							</NavLink>
						</div>
					</div>
					<div className="absolute inset-y-0 gap-2 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<NavLink
							to="/wallet"
							type="button"
							className="cursor-pointer relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
						>
							<span className="sr-only">View notifications</span>
							<WalletIcon
								className="h-6 w-6"
								aria-hidden="true"
							/>
						</NavLink>

						{/* Profile dropdown */}
						<NavLink
							to="/profile"
							className="cursor-pointer relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
						>
							<span className="sr-only">View notifications</span>
							<UserCircleIcon
								className="h-6 w-6"
								aria-hidden="true"
							/>
						</NavLink>
					</div>
				</div>
			</div>
		</Disclosure>
	);
}
