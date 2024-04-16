import React, { useState } from 'react';
import DigitalClock from './DigitalClock';
import CurrentDate from './CurrentDate';
import Clock from './Clock';

const App = () => {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Comprendre useState');
    const [time, setTime] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 5);
        console.log(count);
    }
    
    const handleInTitle = () => {
        setTitle("hello World");
        console.log(title);
    }
    
    const handleInClock = () => {
        console.log('BIGINNING', time)
        setInterval(() => {
            console.log('TIME', time)
            setTime((prevTime) => {
                console.log('PREVIEWTIME', prevTime)
                return prevTime + 1;
            });
        }, 1000);
    }

    return (
        <>
            <h1> title: { title }</h1>
            <h2>Count: {count} </h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleInTitle}>Changer title</button>
            <h3>Clock:{ time }</h3>
            <button onClick={handleInClock}>Clock</button>
            
            {/* Balises JSX pour les composants DigitalClock et CurrentDate */}
            <div>
                <DigitalClock />
                <CurrentDate />
                {/* <Clock /> */}
            </div>
        </>
    );
}

export default App;
