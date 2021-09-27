import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Search, NotFound } from "./pages";

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
