import React from 'react';
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';



const Routing = () => (
    <Switch>
        // Render this when path matches. Needs Link to be defined somewhere.
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
);

export default Routing;