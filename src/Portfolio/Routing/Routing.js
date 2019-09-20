import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "src/Portfolio/HomePage/HomePage";
import ProjectsPage from "src/Portfolio/ProjectsPage/ProjectsPage";
import ResumePage from "src/Portfolio/ResumePage/ResumePage";
import ErrorPage from "src/Portfolio/ErrorPage/ErrorPage";
import ContactPage from "src/Portfolio/ContactPage/ContactPage";

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