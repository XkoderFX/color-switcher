import { Box, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import FireBase from "../firebase";
import { generateColorsArray } from "../util/colorGenerator";
import ColorBlock from "./ColorBlock";
import "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ColorsState } from "../redux/reducer";
import { FetchColors } from "../redux/actions";

// TODO: commit after make simple read-write in firebase

const Border = () => {
    const border = useSelector((state: ColorsState) => state.border);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchColors());
    }, []);

    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Box width={600}>
                <Grid container>
                    {border.map((color, index) => (
                        <Grid key={Date.now() + index} item xs={4}>
                            <ColorBlock color={color} index={index} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Border;
