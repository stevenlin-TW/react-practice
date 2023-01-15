import React from 'react';
import './HomePage.css';

function HomePage({state, changeState}){
    return (
        <>
            <div className='box'>
                <div className='title'><span>React 練習專案</span></div>
                <div className='welcome'>歡迎光臨我的頁面</div>
                <div className='btnBox'><button onClick={() => changeState(state)}>點此開始</button></div>
            </div>
        </>
    );
}

export default HomePage;