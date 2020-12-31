import * as React from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Home } from "./index";
import { MainNav } from "./../components/navigation";

export default class App extends React.Component<any, any>{
	render(){
		return(
			<>
				<MainNav />
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">

						</Route>
						<Route path="/work">

						</Route>
						<Route path="/contact">

						</Route>
						<Route path="/start-project">

						</Route>
					</Switch>
				</Router>
			</>
		)
	}
}
