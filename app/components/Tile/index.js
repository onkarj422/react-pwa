/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core';
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import withWidth from "@material-ui/core/withWidth";
import tileData from "./tileData";

const useStyles = withStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: "90%"
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)"
    },
    titleBar: {
        background: "none"
    },
    offerLabel: {
        backgroundColor: "yellow",
        color: "black",
        padding: "10px",
        borderRadius: "50% !important"
    }
}));

function TitlebarGridList(props) {
    const { width, classes } = props;
    const cols = width === "lg" ? 6 : 2;
    return (
        <div className={classes.root}>
            <GridList cols={cols} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={2} rows={2}>
                        <img width="100%" src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton
                                    aria-label={`info about ${tile.title}`}
                                    className={classes.icon}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                        <GridListTileBar
                            title={<div className={classes.offerLabel}>On Offer</div>}
                            titlePosition="top"
                            actionIcon={
                                <IconButton
                                    aria-label={`info about ${tile.title}`}
                                    className={classes.icon}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                            className={classes.titleBar}
                            actionPosition="right"
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

TitlebarGridList.propTypes = {
    width: PropTypes.string,
    classes: PropTypes.object,
};

export default withWidth()(useStyles(TitlebarGridList));
