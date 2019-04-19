import React, { Component } from 'react';
import LandingPageMenu from "./landingPageMenu/LandingPageMenu";
import LandingPageContent from "./landingPageContent/LandingPageContent";
import './LandingPage.scss';

class LandingPage extends Component {
    render() {
        return (
            <div className={"landing-page"}>
                <LandingPageMenu />
                <LandingPageContent />
            </div>
        );
    }
}

export default LandingPage;