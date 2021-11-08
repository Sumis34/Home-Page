import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../pages/Home/Home';
import ContactForm from '../../pages/ContactForm/ContactForm'
import VideoInfo from '../../pages/VideoInfo/VideoInfo'

export default function Router() {
    return (
        <Switch>
            <Route path="/contact-form">
                <ContactForm />
            </Route>
            <Route path="/video/:id">
                <VideoInfo />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
