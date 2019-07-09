import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import avatar from 'src/images/Slawomir-Gawron-Photo.png';

import './LandingPageContent.scss';

class LandingPageContent extends Component {
    render() {
        return (
            <div className="landing-page-content">
                <Grid container
                      spacing={16}
                      className="grid-container"
                      alignItems="center"
                      direction="column"
                      justify="center"
                >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <img
                            src={avatar}
                            alt="portfolio-avatar"
                            className="portfolio-photo"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="banner-text">
                            <h1>Junior Front End Web Developer</h1>
                            <hr />
                            <p> React | HTML/CSS | JavaScript | Java | SQL </p>
                            <hr />
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
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LandingPageContent;