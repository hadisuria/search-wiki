import React from "react";
import "./style.scss";

const Input = ({ placeholder, ...rest }) => {
	return <input className="input-field" placeholder={placeholder} {...rest} />;
};

export default Input;
