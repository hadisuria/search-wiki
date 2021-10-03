import React from "react";
import { mount } from "enzyme";

import Container from ".";

const render = (props, children) =>
	mount(<Container {...props}>{children}</Container>);

const Children = () => <div>Test</div>;

describe("Container component", () => {
	let sut;
	let props;
	let children = ({ searchValue, onSearchChange, articles }) => (
		<Children
			searchValue={searchValue}
			onSearchChange={onSearchChange}
			articles={articles}
		/>
	);

	describe("without props", () => {
		beforeEach(() => {
			sut = render(props, children);
		});

		it("should match snapshot", () => {
			expect(sut).toMatchSnapshot();
		});
	});
});
