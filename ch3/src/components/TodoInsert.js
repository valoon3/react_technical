import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss';
import {useCallback, useState} from "react";

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        console.log(e.target.value);
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault(); // onSubmit 이벤트는 브라우저를 새로고침 시킵니다. 이때 e.preventDefault() 함수는 새로고침을 방지할 수 있다.
    }, [onInsert, value]);

    // 버튼에서 onClick 으로 처리해도 괜찮은데 form에서 onSubmit으로 처리한 이유는 onSubmit 이벤트의 경우 인풋에서 enter만 눌러도 발생하기 때문

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert;