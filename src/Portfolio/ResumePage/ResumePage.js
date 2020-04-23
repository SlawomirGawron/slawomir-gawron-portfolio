import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import Education from "src/Portfolio/ResumePage/Education/Education";
import Employment from "src/Portfolio/ResumePage/Employment/Employment";
import Skills from "src/Portfolio/ResumePage/skills/Skills";
import avatar from "src/images/Slawomir-Gawron-Photo.png";
import addMenuBarToComponent from "src/HOC/addMenuBarToComponent/addMenuBarToComponent";

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
                    <Grid item xs={12} sm={12} md={3} lg={3} className="left-column-resume">
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
                            Slawomir is a life-long learner who has a strong passion towards software development and technology. During his time at the University of Guelph and through diligent self-study, he has obtained valuable skills that aid him in the development of scalable, maintainable, and extensible software. Some of these skills include creating code given a set of time and space complexity constraints, the importance of easy to read code in a collaborative environment, the importance of choosing the right software tools or languages for the given project, and the importance of documentation. He is organized, focused, dedicated, a quick learner, punctual, approachable, and sociable. Given the opportunity, Slawomir can be a valuable addition to your team.
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
                    <Grid item xs={12} sm={12} md={9} lg={9} className="right-column-resume">
                        {/* Education */}
                        <Typography color="inherit" variant="h4" gutterBottom>
                            Education
                        </Typography>
                        <Education
                            startDate="01/2015"
                            endDate="06/2017"
                            schoolName="University of Guelph"
                            degreeName="Bachelor of Computing: Computer Science, Minor: Mathematics"
                            description="Software Engineering, Data Structures, Object Oriented Programming, Computer security, Analysis and Design of Computer Algorithms, Operating Systems,
                                        Software System Development and Integration, System Analysis and Design in Applications, Theory of Computation, Image Processing and Vision, Software for Legacy Systems, Discrete Structures in Computing"
                        />
                        <hr style={{borderTop: "3px solid white"}} />
                        {/* Employment */}
                        <Typography color="inherit" variant="h4" gutterBottom>
                            Employment
                        </Typography>
                        <Employment
                            startDate="12/2019"
                            endDate="Current"
                            jobTitle="FDM Group Trainee"
                            description="Obtaining valuable training that's required to start working as a consultant for FDM Group's various clients"
                        />
                        <Employment
                            startDate="06/2012"
                            endDate="12/2019"
                            jobTitle="Janitor/Cleaner"
                            description="Mopping, Vacuuming, Dusting, Windows, etc"
                        />
                        <hr style={{borderTop: "3px solid white"}} />
                        {/* Skills */}
                        <Typography color="inherit" variant="h4" gutterBottom>
                            Skills
                        </Typography>
                        <div className="resume-page-skills-section">
                            <Skills
                                skill="Java"
                                progress={100}
                            />
                            <Skills
                                skill="React"
                                progress={100}
                            />
                            <Skills
                                skill="Redux"
                                progress={100}
                            />
                            <Skills
                                skill="Spring"
                                progress={100}
                            />
                            <Skills
                                skill="Docker"
                                progress={75}
                            />
                            <Skills
                                skill="Kubernetes"
                                progress={75}
                            />
                            <Skills
                                skill="Kafka"
                                progress={75}
                            />
                            <Skills
                                skill="HTML"
                                progress={100}
                            />
                            <Skills
                                skill="CSS"
                                progress={100}
                            />
                            <Skills
                                skill="JavaScript"
                                progress={100}
                            />
                            <Skills
                                skill="SQL"
                                progress={100}
                            />
                            <Skills
                                skill="Data Structures"
                                progress={75}
                            />
                            <Skills
                                skill="Object Oriented Programming"
                                progress={100}
                            />
                            <Skills
                                skill="GitHub"
                                progress={100}
                            />
                            <Skills
                                skill="Scrum"
                                progress={100}
                            />
                            <Skills
                                skill="Calculus"
                                progress={100}
                            />
                            <Skills
                                skill="Algebra"
                                progress={100}
                            />
                            <Skills
                                skill="Combinatorics"
                                progress={75}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default addMenuBarToComponent(ResumePage);