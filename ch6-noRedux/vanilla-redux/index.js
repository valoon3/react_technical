import {createStore} from "redux";

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncreas = document.querySelector('#increase');
const btnDecreas = document.querySelector('#decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => {{type: TOGGLE_SWITCH}};
const increase = (difference) => {{type: INCREASE}};
const decrease = () => {{type: DECREASE}};

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

