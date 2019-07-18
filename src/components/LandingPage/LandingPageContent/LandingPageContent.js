import React, { Component } from 'react';
import './LandingPageContent.scss';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class LandingPageContent extends Component {
    render() {
        return (
            <div className="landing-page-content">
                <div className="banner-text">
                    <h1>Slawomir Gawron</h1>
                    <h1>Junior Front End Web Developer</h1>
                    <p> React | HTML/CSS | JavaScript | Java | SQL </p>
                    <div className="social-links">
                        {/* Linkedin */}
                        <a href="https://www.linkedin.com/in/slawomir-gawron/" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-linkedin"/>
                        </a>

                        {/* Github */}
                        <a href="https://github.com/SlawomirGawron" rel="noopener noreferrer" target="_blank">
                            <i className="fab fa-github"/>
                        </a>
                    </div>
                    <Button component={Link} to="/resume" variant="contained">
                        <Typography variant="button">
                            About Me
                        </Typography>
                    </Button>
                </div>
            </div>
        );
    }
}

export default LandingPageContent;