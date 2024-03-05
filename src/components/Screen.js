import '../styles/Screen.css'
import { useState, useEffect } from 'react';

function Screen({onValue}) {

    const [displayValue, setDisplayValue] = useState('')

    useEffect(() => {
        if (onValue === 'C') {
            setDisplayValue('');
        } else if (onValue === 'DE') {
            setDisplayValue(prevValue => prevValue.slice(0, -1));
        } else if (onValue === '=') {
            try {
                setDisplayValue(prevValue => eval(prevValue));
            } catch (error) {
                setDisplayValue('');
                console.log('oooi')
            }
        } else {
            setDisplayValue(prevValue => prevValue + onValue);
            if(onValue === 8) {
                console.log('test')
            }
        }
    }, [onValue])
    

    
    return <div className="screen">
        {displayValue}
    </div>
}

export default Screen;