import { createAction } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input,
// });

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; // insert가 호출될 때마다 1씩 더헤집니다.

// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false
//     },
// });

export const insert = createAction(INSERT, text => ({ td: id++, text, done: false }) )

// export const toggle = id => ({
//     type: TOGGLE,
//     id,
// });

export const toggle = createAction(TOGGLE, id => id);

// export const remove = id => ({
//     type: REMOVE,
//     id,
// });

export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true,
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false,
        },
    ]
};

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    return todo.id === action.id ? {...todo, done: !todo.done } : todo;
                })
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

// insert의 경우 todo 객체를 액션 객체 안에 넣어 주어야 하기 때문에 두 번째 파라미터에 text를 넣으면 todo 객체가 반환되는 함수를 넣어 주었습니다.
// 나머지 함수에는 text => text 혹은 id => id 와 같은 형태로 파라미터를 그대로 반환하는 함수를 넣었습니다.
// 이 작업이 필수는 아닙니다.
// 생략해도 똑같이 작동하지만, 여기서 이 함수를 넣어 줌으로써 코드를 보았을 때 이 액션 생성 함수의 파라미터로 어떤 값이 필요한지 쉽게 파악할 수 있습니다.

// 액션 생성 함수를 다 작성했으면 handleActions로 리듀서를 재작성해 보겠습니다.
// createAction으로 만든 액션 생성 함수는 파라미터로 받아 온 값을 객체 안에 넣을 때 원하는 이름으로 넣는 것이 아니라
// actions.id, action.todo와 같이 action.payload값을 조회하여 업데이트 하도록 구현해 주어야 합니다.


// 액션 생성 함수는 액션에 필여한 추가 데이터를 모두 payload 라는 이름으로 사용하기 때문에 action.id, action.todo를 조회하는 대신, 모두 공통적으로 action.payload 값을 조회하도록 리듀서 구현해 주어야 합니다.

export default todos;