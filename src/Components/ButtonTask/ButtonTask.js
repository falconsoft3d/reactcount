import React, {useState} from 'react';
import './ButtonTask.css';

export default function ButtonTask() {
    const [active, setActive] = useState(false)

    const handleClick = () =>  {
        if (active) {
                setActive(false)
            } else {
                setActive(true)
            }
        }

    return (
        !active ? 
        <>
            <div className="wrap-btn" >
                <span className="btn" onClick={handleClick}><p>START</p></span>
            </div>
        </> :
            <>
            <div className="wrap-btn" >
                <span className="btn stop" onClick={handleClick}><p>STOP</p></span>
            </div>
        </>
    )
}
