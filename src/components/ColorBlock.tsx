import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FireBase from "../firebase";
import { ChangeColor } from "../redux/actions";
import { generateColor } from "../util/colorGenerator";

const useStyles = makeStyles({
    rootButton: {
        width: "250px",
        height: "250px",
    },
});

interface ColorBlockProps {
    index: number;
    color: string;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ index, color }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(ChangeColor(generateColor(), index));
    };

    return (
        <Box width={250} height={250}>
            <Paper variant="outlined" elevation={1}>
                <Box bgcolor={color}>
                    <Button
                        onClick={handleClick}
                        className={classes.rootButton}
                        hidden
                    ></Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default ColorBlock;
