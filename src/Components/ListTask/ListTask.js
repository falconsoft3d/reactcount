import React from 'react';
import ItemTask from '../ItemTask';

export default function ListTask({counter, setCounter}) {
    return (
        <div>
            <ItemTask counter={counter} setCounter={setCounter}/>
        </div>
    )
}
