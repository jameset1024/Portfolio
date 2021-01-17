import * as React from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import {Home, About, Contact, Work} from "./index";
import { MainNav } from "./../components/navigation";
import { Main } from "../components/elements/Tags";
import withSplashScreen from "../components/hoc/withSplashScreen";

class App extends React.Component<any, any>{
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
								<Work />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
							<Route path="/what-im-up-to">
								
							</Route>
						</Switch>
					</Main>
				</Router>
			</>
		)
	}
}

export default withSplashScreen(App);
