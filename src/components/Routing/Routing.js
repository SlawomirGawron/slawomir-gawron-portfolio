import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "src/components/HomePage/HomePage";
import ProjectsPage from "src/components/ProjectsPage/ProjectsPage";
import ResumePage from "src/components/ResumePage/ResumePage";
import ErrorPage from "src/components/ErrorPage/ErrorPage";
import ContactPage from "src/components/ContactPage/ContactPage";

const Routing = () => (
    <Switch>
        {/*Render this when path matches. Needs Link to be defined somewhere.*/}
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/error" component={ErrorPage} />
        <Route component={ErrorPage}></Route>
    </Switch>
);

export default Routing;