import * as React from "react";
import { Route, Switch, BrowserRouter as Router, useHistory, useLocation } from "react-router-dom";
import {Home, About, Contact, Work} from "./index";
import { MainNav } from "./../components/navigation";
import { Loading } from "../components/elements/Tags";
import UpTo from "./UpTo";
import Error404 from "./Error404";
import {showLoading} from "../controllers/Loading";

export default class App extends React.Component<any, any>{
	
	render(){
		return(
			<>
				<Router>
					<Loading />
					<MainNav />

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
						{/*<Route path="/what-im-up-to">
								<UpTo />
							</Route>*/}
						<Route path={"*"}>
							<Error404 />
						</Route>
					</Switch>
				</Router>
			</>
		)
	}
}
