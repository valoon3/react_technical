const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const initialState = 0;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const counter = (state = initialState) => {

    switch(state.type) {
        case INCREASE:
            return {
                ...state,
                state : state++,
            };
        case DECREASE:
            return {
                ...state,
                state: state --,
            };
        default:
            return state;
    }
}

export default counter;