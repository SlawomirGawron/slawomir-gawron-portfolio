import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

class ProjectCard extends Component {
    githubButtonClick(website) {
        return (
            window.open(website, "_blank")
        );
    }

    createButtons() {
        return (
            <>
                {this.props.buttonsList.map(button => (
                    <Button onClick={() => {this.githubButtonClick(button.url)}}
                            size="small"
                            color="primary"
                            key={button.text}
                    >
                        {button.text}
                    </Button>
                ))}
            </>
        );
    }

    render() {
        return (
            <Card className="project-0-card">
                <CardActionArea>
                    <CardMedia
                        component={this.props.component}
                        alt={this.props.alt}
                        className={this.props.className}
                        height={this.props.height}
                        image={this.props.image}
                        title={this.props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {this.props.summary}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {this.createButtons()}
                </CardActions>
            </Card>
        );
    }
}

ProjectCard.propTypes = {
    component: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    buttonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectCard;