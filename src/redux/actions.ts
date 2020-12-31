import { Dispatch } from "redux";
import FireBase from "../firebase";
import { ColorsState } from "./reducer";
import { TYPES } from "./types";

export interface FetchColorsAction {
    type: TYPES.FETCH_COLORS;
    payload: Array<string>;
}

export interface ChangeColorsAction {
    type: TYPES.CHANGE_COLOR;
    payload: { index: number; color: string };
}

export const FetchColors = () => async (
    dispatch: Dispatch<FetchColorsAction>
) => {
    const database = FireBase.database();
    const border_data = database.ref("border");

    // border_data.once("value").then((snapshot) => {
    //     dispatch({ type: TYPES.FETCH_COLORS, payload: snapshot.val() });
    // });

    border_data.on("value", (snapshot) => {
        dispatch({ type: TYPES.FETCH_COLORS, payload: snapshot.val() });
    });
};

export const ChangeColor = (color: string, index: number) => async (
    dispatch: Dispatch<ChangeColorsAction>,
    getState: () => ColorsState
) => {
    const database = FireBase.database();
    const border_data = database.ref("border");
    dispatch({ type: TYPES.CHANGE_COLOR, payload: { color, index } });
    const { border } = getState();
    border_data.set(border);
};
