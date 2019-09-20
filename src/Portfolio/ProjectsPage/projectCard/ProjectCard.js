import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardActionArea from "@material-ui/core/CardActionArea/index";
import CardMedia from "@material-ui/core/CardMedia/index";
import CardContent from "@material-ui/core/CardContent/index";
import Typography from "@material-ui/core/Typography/index";
import CardActions from "@material-ui/core/CardActions/index";
import Button from "@material-ui/core/Button/index";
import Card from "@material-ui/core/Card/index";

import './ProjectCard.scss';

class ProjectCard extends Component {
    onClickRedirectToWebsite(website) {
        return (
            window.open(website, "_blank")
        );
    }

    createButtons() {
        const {buttonsList} = this.props;

        return (
            <>
                {buttonsList.map(button => (
                    <Button onClick={() => {this.onClickRedirectToWebsite(button.url)}}
                            size="small"
                            color="primary"
                            key={button.text}
                    >
                        <Typography
                            variant="button"
                            style={{
                                color: "white"
                            }}
                        >
                            <b>{button.text}</b>
                        </Typography>
                    </Button>
                ))}
            </>
        );
    }

    onClickImage() {
        const { onImageClickURL } = this.props;
        this.onClickRedirectToWebsite( onImageClickURL );
    }

    render() {
        const { component,
                alt,
                imageHeight,
                imageWidth,
                image,
                title,
                summary
        } = this.props;

        return (
            <Card
                className="project-card"
            >
                <div className="project-card-action-area-media">
                    <CardActionArea
                        className="project-card-action-area"
                        style={{
                            border: "double",
                            borderBottom: "0"
                        }}
                    >
                        <div className="project-card-media-wrapper">
                            <CardMedia
                                onClick={() => this.onClickImage()}
                                component={component}
                                alt={alt}
                                className="project-card-media"
                                image={image}
                                title={title}
                                style={{
                                    height: imageHeight,
                                    width: imageWidth,
                                }}
                            />
                        </div>
                    </CardActionArea>
                </div>
                <CardContent className="project-card-text">
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {summary}
                    </Typography>
                </CardContent>

                <CardActions className="project-card-buttons">
                    {this.createButtons()}
                </CardActions>
            </Card>
        );
    }
}

ProjectCard.propTypes = {
    component: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    imageHeight: PropTypes.number.isRequired,
    imageWidth: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    onImageClickURL: PropTypes.string.isRequired,
    buttonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectCard;