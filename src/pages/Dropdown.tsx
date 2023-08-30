import React, { useState } from "react";

const options = [
	"Action",
	"Adventure",
	"Comedy",
	"Drama",
	"Fantasy",
	"Horror",
	"Mystery",
	"Romance",
	"Sci-Fi",
	"Thriller",
];

export const MultiSelect = (): JSX.Element => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleOption = (option: string): void => {
		if (selectedOptions.includes(option)) {
			setSelectedOptions(
				selectedOptions.filter((item) => item !== option)
			);
		} else {
			setSelectedOptions([...selectedOptions, option]);
		}
	};

	const filteredOptions = options.filter((option) =>
		option.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="relative inline-block text-left">
			<div>
				<span className="rounded-md shadow-sm">
					<input
						type="text"
						className="py-2 px-4 block w-64 sm:w-48 leading-5 rounded-md transition ease-in-out duration-150 sm:text-sm sm:leading-5 focus:ring focus:ring-opacity-50"
						placeholder="Select genres"
						onFocus={() => {
							setIsDropdownOpen(true);
						}}
						onBlur={() => {
							setIsDropdownOpen(false);
						}}
						onChange={(e) => {
							setSearchQuery(e.target.value);
						}}
						value={searchQuery}
					/>
				</span>
			</div>
			{isDropdownOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div
						className="py-1"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
					>
						{filteredOptions.map((option) => (
							<div
								key={option}
								className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
								onClick={() => {
									toggleOption(option);
								}}
							>
								<label className="flex items-center space-x-2">
									<input
										type="checkbox"
										className="form-checkbox h-5 w-5 text-indigo-600"
										checked={selectedOptions.includes(
											option
										)}
										readOnly
									/>
									<span className="text-gray-900">
										{option}
									</span>
								</label>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default MultiSelect;
