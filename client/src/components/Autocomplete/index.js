import React from "react";
import ReactAutocomplete from "react-autocomplete";
import Input from "@components/Input";
import "./style.scss";

const Autocomplete = ({ articles, searchValue, onSearchChange }) => {
	return (
		<ReactAutocomplete
			items={articles}
			renderInput={Input}
			wrapperStyle={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				alignItems: "center",
				margin: "32px",
			}}
			inputProps={{
				placeholder: "Input text here...",
			}}
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
					style={{
						backgroundColor: highlighted ? "#eee" : "transparent",
						marginBottom: "4px",
						marginTop: "4px",
						marginRight: "20px",
						marginLeft: "20px",
						borderStyle: "solid",
						borderWidth: "0px",
						borderBottomWidth: "1px",
						borderColor: "grey",
					}}
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
