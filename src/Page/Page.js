import React, {useState, useEffect} from 'react';
import ListTask from '../Components/ListTask';
import HeaderTask from '../Components/HeaderTask';
import FooterTask from '../Components/FooterTask';
import ButtonTask from '../Components/ButtonTask';
import { useTimer } from 'react-timer-hook';

export default function Page() {
    const [counter, setCounter] = useState(0);
    const [porcent, setPorcent] = useState(0);
    const [time, setTime] = useState(60);
    
    useEffect(() => {
        setPorcent(Math.ceil(counter/45*100));
    }, [counter])



    return (
        <div>
            <HeaderTask />
            <ListTask counter={counter} setCounter={setCounter}/>
            <FooterTask counter={counter} porcent={porcent}/>
        </div>
    )
}

function MyTime({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    
    return (
     <>
     <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
          </>
    );
  }
