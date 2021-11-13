import React from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
import Home from '../../pages/Home/Home';
import ContactForm from '../../pages/ContactForm/ContactForm'
import VideoInfo from '../../pages/VideoInfo/VideoInfo'
import { motion, AnimatePresence } from "framer-motion"

export default function Router() {

    const wrapperVariants = {
        initial: {
            clipPath: "circle(0% at 100% 100%)",
            opacity: 0,
            transition: { duration: .7 }
        },
        animate: {
            clipPath: "circle(150% at 100% 100%)",
            opacity: 1,
            transition: { duration: .7 }
        },
        exit: {
            clipPath: "circle(0% at 100% 100%)",
            opacity: 0,
            transition: { duration: .7 }
        }
    }

    const homeVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        }
    }

    const location = useLocation();

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route path="/contact-form">
                    <ContactForm />
                </Route>
                <Route path="/video/:id">
                    <motion.div
                        variants={wrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <VideoInfo />
                    </motion.div>
                </Route>
                <Route path="/">
                    <motion.div
                        variants={homeVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Home />
                    </motion.div>
                </Route>
            </Switch>
        </AnimatePresence>
    )
}
