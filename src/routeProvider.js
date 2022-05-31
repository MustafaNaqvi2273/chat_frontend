import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from "./routes";

const RouteProvider = () => {
    return (
        <BrowserRouter>
            <Switch>
                {
                    routes.map((route) => 
                        <Route path={route.path} component={route.component} exact={route.exact}/>
                    )
                }
            </Switch>
        </BrowserRouter>
    )
}

export default RouteProvider;