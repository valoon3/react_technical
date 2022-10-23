const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const initialState = 0;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const counter = (state = initialState, action) => {

    switch(action.type) {
        case INCREASE:
            return state+1;
        case DECREASE:
            return state-1;
        default:
            return state;
    }
}

export default counter;