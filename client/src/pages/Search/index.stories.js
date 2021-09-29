import React from "react";
import Search from ".";

export default {
	title: "Pages/Search",
	component: Search,
};

const Template = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	location: {
		search: "?query=elon%20musk",
	},
};
