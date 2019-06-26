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
                        <Typography variant="button">
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
                className,
                imageHeightInpx,
                imageWidthInpx,
                image,
                title,
                summary
        } = this.props;

        return (
            <Card
                className="project-card"
                style={{
                    maxHeight: "500px",
                    maxWidth: "500px"
                }}
            >
                <CardActionArea>
                    <CardMedia
                        onClick={() => this.onClickImage()}
                        component={component}
                        alt={alt}
                        className={className}
                        image={image}
                        title={title}
                        style={{
                            height: imageHeightInpx,
                            width: imageWidthInpx
                        }}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography component="p">
                        {summary}
                    </Typography>
                </CardContent>

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
    imageHeightInpx: PropTypes.string.isRequired,
    imageWidthInpx: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    onImageClickURL: PropTypes.string.isRequired,
    buttonsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectCard;