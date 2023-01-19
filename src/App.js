import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import ListPage from './component/ListPage';

function App(){
        
    return(
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/ListPage' element={<ListPage />} />
            </Routes>
    )

}

export default App;