import { ChangeColorsAction, FetchColorsAction } from "./actions";
import { TYPES } from "./types";

type Action = FetchColorsAction | ChangeColorsAction;

const initialState: ColorsState = {
    border: [],
};

export interface ColorsState {
    border: string[];
}

export const rootReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case TYPES.FETCH_COLORS:
            return { border: action.payload };

        case TYPES.CHANGE_COLOR:
            const { index, color } = action.payload;
            console.log(color);
            const border = [...state.border];
            border[index] = color;
            return { border: [...border] };

        default:
            return state;
    }
};
