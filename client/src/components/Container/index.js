import React from "react";
import { useSearchForm, useSearch, useDebounce } from "../../hooks";

const Container = ({ children }) => {
	const { searchValue, onSearchChange } = useSearchForm();
	const { articles, status, error } = useSearch(useDebounce(searchValue, 500));

	return children({ searchValue, onSearchChange, articles });
};

export default Container;
