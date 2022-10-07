import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import axios from "axios";

function App() {
    const [data, setData] = useState(null);

    const onClick = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => {
                setData(res.data);
        })
    };

    return (<>
        <div>
            <button onClick={onClick}>불러오기</button>
        </div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
    </>)
}

export default App;
