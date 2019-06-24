import React, { Component } from 'react';
import LandingPageContent from "src/components/LandingPage/LandingPageContent/LandingPageContent";
import addCustomScrollbars from "src/HOC/addCustomScrollbars/addCustomScrollbars";

import './LandingPage.scss';

class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <LandingPageContent />
            </div>
        );
    }
}

export default addCustomScrollbars(LandingPage);