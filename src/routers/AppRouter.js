import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {Portfolio} from "../components/Portfolio";
import NotFoundPage from "../components/NotFoundPage";

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Portfolio} exact/>
            <Route component={NotFoundPage}/>
        </Switch>
    </Router>
)

export default AppRouter;