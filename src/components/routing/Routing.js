import React from 'react';
import { Switch, Route } from "react-router-dom";

import LandingPage from "../landingPage/LandingPage";
import AboutMePage from '../aboutMePage/AboutMePage';
import Contact from '../contactPage/ContactPage';
import ProjectsPage from '../projectsPage/ProjectsPage';
import ResumePage from '../resumePage/ResumePage';



const Routing = () => (
    <Switch>
        // Render this when path matches. Needs Link to be defined somewhere.
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutMe" component={AboutMePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/resume" component={ResumePage} />
    </Switch>
);

export default Routing;