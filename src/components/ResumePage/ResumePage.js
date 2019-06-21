import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Education from "src/components/ResumePage/Education/Education";
import Experience from "src/components/ResumePage/Experience/Experience";
import Skills from "src/components/ResumePage/skills/Skills";
import avatar from "src/images/Slawomir-Gawron-Photo.png";

import './ResumePage.scss';

class ResumePage extends Component {
    render() {
        return (
            <div className="resume-page">
                <Grid container
                      className="resume-page-grid"
                      justify="center"
                      spacing={0}
                      direction="row"
                      alignItems="stretch"
                >
                    {/* Left column */}
                    <Grid item xs className="left-column-resume">
                        <img
                            src={avatar}
                            alt="portfolio-avatar"
                            className="portfolio-photo-resume"
                        />
                        <Typography style={{margin: "0"}} variant="h4" gutterBottom>
                            Slawomir Gawron
                        </Typography>
                        <Typography style={{color: "grey"}} variant="h6" gutterBottom>
                            Junior Software Developer
                        </Typography>
                        <hr style={{borderTop: "3px solid black", width: "100%"}}/>
                        <Typography className="resume-paragraph" variant="body1" gutterBottom>
                            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                        </Typography>
                        <hr style={{borderTop: "3px solid black", width: "100%"}}/>
                        <Typography style={{margin: '0'}} variant="h6" gutterBottom>
                            Address
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            601 Orange Walk CRES, Mississauga, Ontario Canada L5R 0A3
                        </Typography>
                        <Typography style={{margin: "0"}} variant="h6" gutterBottom>
                            Phone
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            (647) 409-1935
                        </Typography>
                        <Typography style={{margin: "0"}} variant="h6" gutterBottom>
                            Email
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            SlawomirGawron8@gmail.com
                        </Typography>
                        <Typography style={{margin: "0"}} variant="h6" gutterBottom>
                            Website
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            SlawomirGawron.ca
                        </Typography>
                        <hr style={{borderTop: "3px solid black", width: "100%"}}/>
                    </Grid>

                    {/* Right column */}
                    <Grid item xs={9} className="right-column-resume">
                        {/* Education */}
                        <Typography color="inherit" variant="h4" gutterBottom>
                            Education
                        </Typography>
                        <Education
                            startDate="01/2014"
                            endDate="06/2017"
                            schoolName="University of Guelph"
                            degreeName="Bachelor of Computing: Computer Science, Minor: Mathematics"
                            description="edit"
                        />
                        <hr style={{borderTop: "3px solid white"}} />
                        {/* Experience */}
                        <Typography color="inherit" variant="h4" gutterBottom>
                            Experience
                        </Typography>
                        <Experience
                            startDate="edit"
                            endDate="Current"
                            jobTitle="Janitor"
                            description="mopping, vacuuming, dusting, windows, etc"
                        />
                        <hr style={{borderTop: "3px solid white"}} />
                        {/* Skills */}
                        <Typography color="inherit" variant="h4" gutterBottom>
                            Skills
                        </Typography>
                        <Skills
                            skill="Java"
                            progress={75}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={50}
                        />
                        <Skills
                            skill="SQL"
                            progress={75}
                        />

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ResumePage;