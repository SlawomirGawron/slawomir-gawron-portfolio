import React, { Component } from 'react';
import './LandingPageContent.scss';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class LandingPageContent extends Component {
    render() {
        return (
            <div className="landing-page-content">
                <div className="banner-text" id="header">
                    <h1>Junior Front End Web Developer</h1>
                    <p> React &nbsp;&bull;&nbsp; HTML/CSS &nbsp;&bull;&nbsp; JavaScript &nbsp;&bull;&nbsp; Java &nbsp;&bull;&nbsp; SQL </p>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/slawomir-gawron/" className="fab fa-linkedin" rel="noopener noreferrer" target="_blank">
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/SlawomirGawron" className="fab fa-github" rel="noopener noreferrer" target="_blank">
                                    <span>Github</span>
                                </a>
                            </li>

                        </ul>
                    </nav>

                    <Button component={Link} to="/resume" variant="contained">
                        <Typography variant="button">
                            About Me
                        </Typography>
                    </Button>
                </div>
                <div id="footer">
                    <footer id="footer">
                        <span className="developer-name">Made by Slawomir Gawron</span>
                    </footer>
                </div>
            </div>
        );
    }
}

export default LandingPageContent;