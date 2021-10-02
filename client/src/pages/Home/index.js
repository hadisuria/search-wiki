import React from "react";
import Container from "@components/Container";
import Autocomplete from "@components/Autocomplete";
import "./style.scss";

const Home = () => {
	return (
		<div className="home-page-container">
			<img src="./google.png" alt="google image" />
			<Container>
				{({ searchValue, onSearchChange, articles }) => (
					<Autocomplete
						articles={articles}
						onSearchChange={onSearchChange}
						searchValue={searchValue}
					/>
				)}
			</Container>
		</div>
	);
};

export default Home;
