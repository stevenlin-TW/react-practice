import React, { useState } from 'react';
import { collection, addDoc} from 'firebase/firestore'
import { db } from '../firebase';

function AddForm(props){
    const [input, setInput] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(input == ''){return;}
        
        try{
            const docRef = await addDoc(collection(db, 'list'), {'todo' : input}); 
            props.addRecord({todo: input, id: docRef.id})
        } catch (e) {
            console.error(e);
        }
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