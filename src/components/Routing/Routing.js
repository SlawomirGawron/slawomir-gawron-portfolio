import React from 'react';
import { Switch, Route } from "react-router-dom";

import LandingPage from "../LandingPage/LandingPage";
import AboutMePage from '../AboutMePage/AboutMePage';
import Contact from '../ContactPage/ContactPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import ResumePage from '../ResumePage/ResumePage';
import ErrorPage from "../ErrorPage/ErrorPage";



const Routing = () => (
    <Switch>
        {/*Render this when path matches. Needs Link to be defined somewhere.*/}
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutMe" component={AboutMePage} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/error" component={ErrorPage} />
    </Switch>
);

export default Routing;