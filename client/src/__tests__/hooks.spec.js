import { renderHook, act } from "@testing-library/react-hooks";
import { useSearchForm, useDebounce, useSearch } from "@hooks";
import moxios from "moxios";

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

describe("useDebounce hooks", () => {
	it("should return same value after delay", () => {
		jest.useFakeTimers();
		const expectedResult = "text";
		const { result } = renderHook(() => useDebounce(expectedResult, 500));

		expect(result.current).toBe(expectedResult);
		jest.advanceTimersByTime(520);
		expect(result.current).toBe(expectedResult);

		jest.useRealTimers();
	});
	it("should return same value before timer is reached", () => {
		jest.useFakeTimers();
		const value1 = "text1";
		const value2 = "text2";

		const { result, rerender } = renderHook(
			({ value, delay }) => useDebounce(value, delay),
			{ initialProps: { value: value1, delay: 500 } }
		);

		expect(result.current).toBe(value1);
		jest.advanceTimersByTime(490);

		rerender({ value: value2 });
		expect(result.current).toBe(value1);

		jest.runAllTimers();
		expect(result.current).toBe(value2);

		jest.useRealTimers();
	});
});

describe("useSearch hook", () => {
	beforeEach(() => {
		moxios.install();
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it("should return init data - empty articles", () => {
		const { result } = renderHook(() => useSearch());
		expect(result.current.articles).toStrictEqual([]);
	});
	it("should return init data - IDLE status", () => {
		const { result } = renderHook(() => useSearch());
		expect(result.current.status).toBe("idle");
	});

	it("should have SUCCESS status when call is started", async () => {
		// stubRequest for query "elon"
		moxios.stubRequest(
			"https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10",
			{
				status: 200,
				response: [
					"elon",
					["Elon", "Elon Musk", "Elon Musk's Tesla Roadster"],
					["", "", ""],
					[
						"https://en.wikipedia.org/wiki/Elon",
						"https://en.wikipedia.org/wiki/Elon_Musk",
						"https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster",
					],
				],
			}
		);
		const { result, waitForNextUpdate } = renderHook(() => useSearch("elon"));

		await waitForNextUpdate();

		expect(result.current.status).toBe("SUCCESS");
	});

	it("should have ERROR status when call is failed", async () => {
		// stubRequest for query "elon"
		moxios.stubRequest(
			"https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10",
			{
				status: 400,
				response: [],
			}
		);
		const { result, waitForNextUpdate } = renderHook(() => useSearch("elon"));

		await waitForNextUpdate();

		expect(result.current.status).toBe("FAILED");
	});
});
