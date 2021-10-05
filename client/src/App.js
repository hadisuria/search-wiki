import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// import { Home, Search, NotFound } from "@pages";
import Home from "@pages/Home";
import Search from "@pages/Search";
import NotFound from "@pages/NotFound";

const App = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/search" component={Search} />
		<Route component={NotFound} />
	</Switch>
);

export default App;
