import React from 'react';


function List({recordList, removeRecord}) {
    
    return recordList.map((record, index) => 
        <div className='itemBox' key={index}>
            <div className='record_text' key={record.id}>
                {record.value}
            </div>
            <button onClick={() => removeRecord(record.id)}>刪除</button>
        </div>
    )
}

export default List;