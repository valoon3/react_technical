import Counter from '../components/Counter';
import {connect} from "react-redux";
import {decrease, increase} from "../modules/counter";
import { bindActionCreators } from "redux";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDncrease={decrease} />
    );
};

const mapStateToProps = state => ({
    number: state.counter.number,
});

// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// 컴포넌트에서 리덕스 스토어에 접근하여 원하는 상태를 받아 오고, 또 액션도 디스패치해 줄 차례입니다.
// 리덕스 스토어와 연동된 컴포넌트를 컨테이너 컴포넌트라고 부릅니다.
// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(
    {
        increase,
        decrease,
    },dispatch),
)(CounterContainer);