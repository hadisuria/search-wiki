import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Home, Search, NotFound } from "@pages";
import Home from "@pages/Home";
import Search from "@pages/Home";
import NotFound from "@pages/Home";

const App = () => (
	<Router>
		<Switch>
			<Route exact path="/" render={Home} />
			<Route path="/search" render={Search} />
			<Route render={NotFound} />
		</Switch>
	</Router>
);

export default App;
