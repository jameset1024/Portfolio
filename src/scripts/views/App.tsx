import * as React from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import { Home, About } from "./index";
import { MainNav } from "./../components/navigation";
import { Main } from "../components/elements/Tags";

export default class App extends React.Component<any, any>{
	render(){
		return(
			<>
				<Router>
					<MainNav />

					<Main>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/work">

							</Route>
							<Route path="/contact">

							</Route>
							<Route path="/start-project">

							</Route>
						</Switch>
					</Main>
				</Router>
			</>
		)
	}
}
