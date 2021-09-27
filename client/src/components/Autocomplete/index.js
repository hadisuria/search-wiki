import React from "react";
import ReactAutocomplete from "react-autocomplete";
import Input from "../Input";

const Autocomplete = ({ articles, searchValue, onSearchChange }) => {
	console.log("search value", searchValue);
	return (
		<ReactAutocomplete
			items={articles}
			renderInput={Input}
			inputProps={{ placeholder: "Input text here..." }}
			getItemValue={(item) => item.label}
			renderMenu={(children, value, style) => {
				return articles && articles.length ? (
					<div style={{ ...style }} className="input-suggestion">
						{children}
						<a href={`/search?query=${value}`} className="search-link">
							See all result
						</a>
					</div>
				) : (
					<></>
				);
			}}
			renderItem={(item, highlighted) => (
				<div
					key={item.id}
					style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
				>
					{item.label}
				</div>
			)}
			value={searchValue}
			onChange={onSearchChange}
			// onSelect={(value) => setSearchValue(value)}
		/>
	);
};

export default Autocomplete;
