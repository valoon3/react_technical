import {createAction, handleActions} from 'redux-actions';

const  INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => createAction({ type: INCREASE });
export const decrease = () => createAction({ type: DECREASE });

const initialState = {
    number : 0,
};

// function counter(state = initialState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }

// redux-actions handleActions 사용
const counter = handleActions({ // 첫 파라미터는 각 액션에 대한 업데이트 함수를 넣어주고
    [INCREASE]: (state, action) => ({ number: state.number + 1}),
    [DECREASE]: (state, action) => ({ number: state.number - 1}),
}, initialState) // 두번째 파라미터에는 초기 상태를 넣어줌

export default counter;