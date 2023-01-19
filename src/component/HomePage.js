import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage(){
    const navigate = useNavigate();
    const changePage = () => {
        navigate('/ListPage')
    }
    return (
        <>
            <div className='box'>
                <div className='title'><span>React 練習專案</span></div>
                <div className='welcome'>歡迎光臨我的頁面</div>
                <div className='btnBox'><button onClick={changePage}>點此開始</button></div>
            </div>
        </>
    );
}

export default HomePage;