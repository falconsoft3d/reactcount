import React, {useState} from 'react';
import './ItemTask.css';

export default function ItemTask({counter,setCounter }) {
    return (
        <>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        <div className="items" >
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
            <Item counter={counter} setCounter={setCounter}></Item>
        </div>
        
        
        
        </>
    )
}


function Item( { counter, setCounter } ){
    const [active, setActive] = useState(false)

    const handleClick = () =>  {
        if (active) {
                setActive(false)
                setCounter(counter-1)
            } else {
                setActive(true)
                setCounter(counter+1)
            }
        }

    
    return (
        active ? <span className="grey item" onClick={handleClick} /> : 
        <span className="white item" onClick={handleClick} />   
    )
}

