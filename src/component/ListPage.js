import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddForm from './AddForm';
import List from './List';
import './ListPage.css'
import { db } from '../firebase';

function ListPage(){

    const [recordList, setRecordList] = useState([]);

    const addRecord = (new_record) => {
        let records = [...recordList, new_record];
        setRecordList(records);
    }

    const removeRecord = async (id) => {
        const docRef = doc(db, 'list', id)
        await deleteDoc(docRef);
        let updateRecordList = [...recordList].filter(record => record.id !== id);
        setRecordList(updateRecordList);
    }

    const getRecord = async () => {
        await getDocs(collection(db, 'list')).then((snapshot) => {
            //console.log(snapshot.docs[0].data()); => {todo: '1234'}
            const db_record = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setRecordList(db_record);
        })
    }
    useEffect(() => {
        getRecord();
    },[])

    const navigate = useNavigate();
    const changePage = () => {
        navigate('/')
    }
    return(
        <>
            <AddForm addRecord={addRecord} />  
            <List recordList={recordList} removeRecord={removeRecord}/>
            <div className='btnBox'>
                <button onClick={changePage}>返回首頁</button>
            </div>
        </>
    )
}

export default ListPage;
