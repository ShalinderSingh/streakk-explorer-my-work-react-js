import { REDUCERCONSTANT } from "../constant";

const initialState = {
    data: {},
};

export default function block(state = initialState, action = {}) {
    // console.log(initialState, 'SSSSSSSS')
    switch (action.type) {
        case REDUCERCONSTANT.GET_BLOCKS:
            return {
                ...state,
                data: action.paylod.data.response,
            };

        default:
            return state;
    }
}
