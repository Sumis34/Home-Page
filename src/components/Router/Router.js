import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../pages/Home/Home';

export default function Router() {
    return (
        <Switch>
            <Route path="/about">
                <h1>About</h1>
            </Route>
            <Route path="/users">
                <h1>Users</h1>
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
