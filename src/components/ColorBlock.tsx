import { Box, Button, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles({
    rootButton: {
        width: "300px",
        height: "300px",
    },
});
const ColorBlock = () => {
    const classes = useStyles();

    const [color, setColor] = useState(
        `#${Math.floor(Math.random() * 16777215).toString(16)}`
    );

    const handleClick = () => {
        setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    };

    return (
        <Box width={300} height={300}>
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
