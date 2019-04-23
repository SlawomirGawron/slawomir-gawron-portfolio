import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ProjectsPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    };

    handleChange = (event, activeTab) => {
        console.log(activeTab);
        this.setState({activeTab});
    };

    toggleCategories() {
        if (this.state.activeTab == 0) {
            return (
                <Card className="project-0-card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="project-0"
                            className="project-0-name0"
                            height="140"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshWiWv45FVxyM80R8ayP_bBIpJW4r-wQCQiEyz-sREDCTi8Qp"
                            title="My own Title"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Title
                            </Typography>
                            <Typography component="p">
                                summary
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Button 1
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            );
        } else if (this.state.activeTab == 1) {
            return (
                <h1>This is Project 1</h1>
            );
        } else if (this.state.activeTab == 2) {
            return (
                <h1>This is Project 2</h1>
            );
        } else {
            return (
                alert("Error #101")
            );
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs
                    value={this.state.activeTab}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Project 0" />
                    <Tab label="Project 1" />
                    <Tab label="Project 2" />
                </Tabs>

                <section className="projects-grid">
                    <Grid container
                          spacing={16}
                          className="projects-grid-container"
                          alignItems="center"
                          direction="column"
                          justify="center"
                    >
                        <Grid item>
                            <div className="projects-grid-content">
                                {this.toggleCategories()}
                            </div>
                        </Grid>
                    </Grid>

                </section>
            </div>
        );
    }
}

export default ProjectsPage;