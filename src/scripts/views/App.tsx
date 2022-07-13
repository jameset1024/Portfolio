import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Home, About, Contact, Work } from "./index";
import { MainNav } from "./../components/navigation";
import { Loading } from "../components/elements/Tags";
import Error404 from "./Error404";


export default function App() {
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
                    <Route path={"*"}>
                        <Error404 />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}
