import React from "react";
import { useSearch } from "@hooks";
import Container from "@components/Container";
import Autocomplete from "@components/Autocomplete";

const Search = ({ ...props }) => {
	const search = props.location.search;
	const params = new URLSearchParams(search);
	const query = params.get("query");

	const { articles, status } = useSearch(query, 50);
	return (
		<div>
			<Container>
				{({ searchValue, onSearchChange, articles }) => (
					<Autocomplete
						articles={articles}
						onSearchChange={onSearchChange}
						searchValue={searchValue}
					/>
				)}
			</Container>
			{status === "idle" ? (
				<></>
			) : !articles.length && status === "SUCCESS" ? (
				<h3>No article for query: {query}</h3>
			) : (
				<div>
					{articles.map((article) => {
						return (
							<div key={article.id}>
								<a href={article.id} target="_blank">
									{article.label}
								</a>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Search;
