import React, { Component } from 'react';
import LandingPageContent from "src/components/LandingPage/LandingPageContent/LandingPageContent";

import './LandingPage.scss';

class LandingPage extends Component {
    render() {
        return (
            <div className="home-page">
                <div className="home-page-background"/>
                <div className="home-page-background-overlay"/>
                <div className="landing-page">
                    <LandingPageContent />
                </div>
            </div>
        );
    }
}

export default LandingPage;