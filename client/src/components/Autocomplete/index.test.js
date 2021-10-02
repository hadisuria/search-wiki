import React from "react";

import { shallow } from "enzyme";
import Autocomplete from "./index";

const render = (props) => shallow(<Autocomplete {...props} />);

describe("Autocomplete component", () => {
	let sut;
	let props;

	describe("without props", () => {
		beforeEach(() => {
			sut = render(props);
		});
		it("should match snapshot", () => {
			expect(sut).toMatchSnapshot();
		});
	});

	describe("when articles are passed", () => {
		beforeEach(() => {
			props = {
				articles: [1],
				searchValue: "Search value",
				onSearchChange: jest.fn(),
			};
			sut = render(props);
		});
		it("should match snapshot", () => {
			const props = sut.props();

			expect(props.renderMenu()).toMatchSnapshot();
		});
	});
	describe("when articles are NOT passed", () => {
		beforeEach(() => {
			props = {
				articles: null,
				searchValue: "Search value",
				onSearchChange: jest.fn(),
			};
			sut = render(props);
		});
		it("should match snapshot", () => {
			const props = sut.props();

			expect(props.renderMenu()).toMatchSnapshot();
		});
	});

	describe("when renderItems prop is called", () => {
		beforeEach(() => {
			sut = render(props);
		});

		describe("When item is highlighted", () => {
			it("should match snapshot", () => {
				const { renderItem } = sut.props();
				const item = {
					id: "https://en.wikipedia.org/wiki/Elon_Musk",
					label: "Elon Musk",
				};
				const highlighted = true;
				expect(renderItem(item, highlighted)).toMatchSnapshot();
			});
		});

		describe("When item is NOT highlighted", () => {
			it("should match snapshot", () => {
				const { renderItem } = sut.props();
				const item = {
					id: "https://en.wikipedia.org/wiki/Elon_Musk",
					label: "Elon Musk",
				};
				const highlighted = false;
				expect(renderItem(item, highlighted)).toMatchSnapshot();
			});
		});
	});
});
