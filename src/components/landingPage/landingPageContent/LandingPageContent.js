import React, { Component } from 'react';
import './LandingPageContent.scss';
import Grid from '@material-ui/core/Grid';
import avatar from '../../../images/Slawomir-Gawron-Photo.png';

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
                    <Grid item>
                        <img
                            src={avatar}
                            alt="portfolio-avatar"
                            className="portfolio-photo"
                        />
                    </Grid>
                    <Grid item>
                        <div className="banner-text">
                            <h1>Junior Front End Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Material-UI | JavaScript | React | NodeJS | MongoDB</p>
                            <hr />
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin"/>
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
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