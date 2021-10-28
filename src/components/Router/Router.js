import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Card from '../Cards/WorkCard';
import ContactForm from '../../pages/ContactForm/ContactForm'
import img from '../../assets/images/engadin.png'

export default function Router() {
    return (
        <Switch>
            <Route path="/contact-form">
                <ContactForm />
            </Route>
            <Route path="/users">
                <Card
                    title="Engadin"
                    description="Persönliches Projekt"
                    link="http://google.ch"
                    linkTitel="Video auf Youtube schauen"
                    img={img}
                />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}
