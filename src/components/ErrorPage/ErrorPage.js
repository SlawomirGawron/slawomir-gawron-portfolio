import React, { Component } from 'react';
import addMenuBarToComponent from "src/HOC/addCustomScrollbars/addMenuBarToComponent";

import './ErrorPage.scss';

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <h1>Error page</h1>
            </div>
        );
    }
}

export default addMenuBarToComponent(ErrorPage);