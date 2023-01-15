import React, { useState, useEffect } from 'react';
import AddForm from './AddForm';
import List from './List';
import './ListPage.css'

function ListPage({state, changeState}){
    const [recordList, setRecordList] = useState([]);
    const LOCAL_STORAGE_KEY = 'stored_record'; 

    const addRecord = (new_record) => {
        let records = [...recordList, new_record];
        setRecordList(records);
    }

    const removeRecord = (id) => {
        let updateRecordList = [...recordList].filter(record => record.id !== id);
        setRecordList(updateRecordList);
    }

    return(
        <>
            <AddForm addRecord={addRecord} />  
            <List recordList={recordList} removeRecord={removeRecord}/>
            <div className='btnBox'>
                <button className='toHome' onClick={() => changeState(state)}>返回首頁</button>
            </div>
        </>
    )
}

export default ListPage;
