import React from "react";
import "./style.css";

const Input = ({ placeholder, ...rest }) => {
	return <input className="input-field" placeholder={placeholder} {...rest} />;
};

export default Input;
