import React, {useState, useEffect} from 'react';
import HomePage from './component/HomePage';
import ListPage from './component/ListPage';

function App(){
    let [state, setState] = useState(() => 0);
    if(state == 0){
        const changeState = () => {
            setState(preState => (preState + 1))
        }
        return(
            <>
                <HomePage state={state} changeState={changeState}/>
            </>
        )
    }

    if(state == 1){
        const changeState = () => {
            setState(preState => (preState - 1))
        }
        return(
            <>
                <ListPage state={state} changeState={changeState}/>
            </>
        )
    }

    

}

export default App;