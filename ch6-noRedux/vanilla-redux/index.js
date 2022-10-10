import {createStore} from "redux";


const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncreas = document.querySelector('#increase');
const btnDecreas = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = (difference) => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

const initState = {
    toggle: false,
    counter : 0
};

function reducer(state = initState, action) {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer);

const render = () => {
    const state = store.getState(); // 현재 상태를 불러옵니다.

    // 토글 처리
    // state.toggle ? divToggle.classList.add('active') : divToggle.classList.remove('active');

    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    // 카운터 처리
    counter.innerText = state.counter;

}
render();
store.subscribe(render);

const listener = () => {
    console.log('상태가 업데이트됨');
}
// const unSubScribe = store.subscribe(listener);

store.subscribe(render);

divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}

btnIncreas.onclick = () => {
    store.dispatch(increase(1));
}

btnDecreas.onclick = () => {
    store.dispatch(decrease());
}

console.log('안녕');