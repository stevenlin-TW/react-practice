import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

function List({recordList, removeRecord}) {

    return recordList.map((record, index) => 
        <div className='itemBox' key={index}>
            <div className='record_text' key={record.id}>
                {record.todo}
            </div>
            <button onClick={() => removeRecord(record.id)}>刪除</button>
        </div>
    )
}

export default List;