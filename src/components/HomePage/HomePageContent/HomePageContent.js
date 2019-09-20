import React, { Component } from 'react';
import 'src/components/HomePage/HomePageContent/HomePageContent.scss';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const styles = {
    button: {
        display: 'flex',
        flex: '1',
        borderWidth: '0.1em',
        borderColor: 'white',
    },
};

class HomePageContent extends Component {
    render() {
        return (
            <div className="home-page-content">
                <div className="home-page-content-header">
                    <div className="home-page-content-header-text">
                        <h1>Junior Software Developer</h1>
                        <p> React &nbsp;&bull;&nbsp; HTML &nbsp;&bull;&nbsp; CSS &nbsp;&bull;&nbsp; JavaScript &nbsp;&bull;&nbsp; Java &nbsp;&bull;&nbsp; SQL </p>
                    </div>
                    <div className="home-page-content-header-buttons">
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/slawomir-gawron/" className="fab fa-linkedin" rel="noopener noreferrer" target="_blank">
                                        <span>Linkedin</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav>
                            <ul>
                                <li>
                                    <a href="https://github.com/SlawomirGawron" className="fab fa-github" rel="noopener noreferrer" target="_blank">
                                        <span>Github</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <Button component={Link}
                        to="/resume"
                        variant="outlined"
                        color="inherit"
                        className="home-page-learn-more-button"
                        style={styles.button}
                >
                    <p className="home-page-learn-more-button-text">Learn More</p>
                </Button>
                <footer className="home-page-content-footer">
                    <Typography variant="body2" color="inherit" gutterBottom>
                        Made by Slawomir Gawron
                    </Typography>
                </footer>
            </div>
        );
    }
}

export default HomePageContent;