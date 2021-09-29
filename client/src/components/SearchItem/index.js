import React from "react";
import "./style.scss";

const SearchItem = ({ id, label }) => {
	return (
		<div key={id} className="search-item">
			<a href={id} target="_blank">
				{label}
			</a>
			<p>{id}</p>
		</div>
	);
};

export default SearchItem;
