import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchForm } from "@hooks";
import { at } from "lodash";

describe("useSearchForm hooks", () => {
	let event1;
	let event2;
	beforeEach(() => {
		event1 = {
			target: {
				value: "data1",
			},
		};
		event2 = {
			target: {
				value: "data2",
			},
		};
	});

	it("should update searchValue", () => {
		const { result } = renderHook(() => useSearchForm());

		act(() => result.current.onSearchChange(event1));

		expect(result.current.searchValue).toBe("data1");

		act(() => result.current.onSearchChange(event2));

		expect(result.current.searchValue).toBe("data2");
	});
});
