import React, { Component } from 'react';
import addCustomScrollbars from "src/HOC/addCustomScrollbars/addCustomScrollbars";

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

export default addCustomScrollbars(ErrorPage);