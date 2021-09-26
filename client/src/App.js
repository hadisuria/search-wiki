import React, { useState } from "react";
import ReactAutocomplete from "react-autocomplete";
import { useSearch, useDebounce } from "./hooks";
import Input from "./components/Input";

function App() {
	const [value, setValue] = useState("");

	const { articles, status, error } = useSearch(useDebounce(value, 500));

	return (
		<ReactAutocomplete
			items={articles}
			renderInput={Input}
			inputProps={{ placeholder: "Input text here..." }}
			// shouldItemRender={(item, value) =>
			// 	item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
			// }
			getItemValue={(item) => item.label}
			renderMenu={(children, value, style) => {
				return (
					<div style={{ ...style }} className="input-suggestion">
						{children}
						<a href={`/search?query=${value}`} className="search-link">
							See all result
						</a>
					</div>
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
			value={value}
			onChange={(e) => setValue(e.target.value)}
			onSelect={(value) => setValue(value)}
		/>
	);
}

export default App;
