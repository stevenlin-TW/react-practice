import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function AddForm(props){
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input == ''){return;}
        props.addRecord({value: input, id: uuidv4()});
        setInput('');
        
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
        <>
            <form className='formBox' onSubmit={handleSubmit}>
                <div>
                    <input id='add' type='text' placeholder='測試紀錄' value={input} onChange={handleChange}/><input type='submit' value='新增紀錄'/>
                </div>
            </form>
        </>
    )
}

export default AddForm;