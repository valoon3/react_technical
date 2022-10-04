import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/velopert">velopert의 profile</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">giledong의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
            </ul>
        </>
    )
}

export default Home;