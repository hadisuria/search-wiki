import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

export const useSearch = (query) => {
	const [state, setState] = useState({
		articles: [],
		status: "idle",
		error: "",
	});

	const cancelToken = useRef(null);

	if (cancelToken.current) {
		cancelToken.current.cancel("Operation canceled");
	}

	useEffect(() => {
		// if (query.length < 1) return;

		cancelToken.current = axios.CancelToken.source();

		axios
			.get(
				`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`,
				{
					cancelToken: cancelToken.current.token,
				}
			)
			.then(function (response) {
				// handle success
				const parsedResponse = [];
				for (let i = 0; i < response.data[1].length; i++) {
					parsedResponse.push({
						id: response.data[3][i],
						label: response.data[1][i],
					});
				}
				console.log(parsedResponse);
				// handling empty string
				if (parsedResponse[0].id === 0 || parsedResponse[0].label === "!") {
					parsedResponse = [];
				}
				setState({
					articles: parsedResponse,
					status: "SUCCESS",
					error: "",
				});
			})
			.catch(function (error) {
				// handle error
				if (axios.isCancel(error)) {
					return;
				}
				setState({
					articles: [],
					status: "FAILED",
					error: error,
				});
			});
	}, [query]);

	return state;
};

// Debouncer
export const useDebounce = (value, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const debounceId = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(debounceId);
	}, [value, delay]);

	return debouncedValue;
};

export const useSearchForm = () => {
	const [searchValue, setSearchValue] = useState("");

	const onSearchChange = useCallback((e) => {
		setSearchValue(e.target.value);
	}, []);

	return {
		searchValue,
		onSearchChange,
	};
};
