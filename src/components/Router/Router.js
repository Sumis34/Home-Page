import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Card from '../Cards/WorkCard';

export default function Router() {
    return (
        <Switch>
            <Route path="/about">
                <h1>About</h1>
            </Route>
            <Route path="/users">
                <Card />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
