import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import App from "../App.js";

const render = (initialEntries) =>
	mount(
		<MemoryRouter keyLength={0} initialEntries={initialEntries}>
			<App />
		</MemoryRouter>
	);

describe("App component", () => {
	let sut;
	describe("when homepage is rendered", () => {
		beforeEach(() => {
			sut = render(["/"]);
		});
		it("should match homepage snapshot", () => {
			expect(sut).toMatchSnapshot();
		});
	});

	describe("when NotFound is rendered", () => {
		beforeEach(() => {
			sut = render(["/asfdasfd"]);
		});
		it("should match NotFound snapshot", () => {
			expect(sut).toMatchSnapshot();
		});
	});
});
