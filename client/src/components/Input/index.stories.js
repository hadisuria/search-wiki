import React from "react";

import Input from "@components/Input";

export default {
	title: "Components/Input",
	component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	placeholder: "Search data",
};

export const Secondary = Template.bind({});
Secondary.args = {};
