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

	// describe("with props", () => {
	// 	beforeEach(() => {
	// 		props = {
	// 			articles: [],
	// 			searchValue: "",
	// 			onSearchChange: jest.fn(),
	// 		};
	// 		sut = render(props);
	// 	});
	// 	it("should match snapshot", () => {
	// 		expect(sut).toMatchSnapshot();
	// 	});
	// });
});
