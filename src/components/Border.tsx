import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import ColorBlock from "./ColorBlock";

const Border = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box width={900}>
                <Grid container>
                    {Array(9)
                        .fill("")
                        .map(() => (
                            <Grid item xs={4}>
                                <ColorBlock></ColorBlock>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Border;
