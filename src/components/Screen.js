import '../styles/Screen.css'
import { useState, useEffect } from 'react';

function Screen({onValue}) {

    const [displayValue, setDisplayValue] = useState('')

    useEffect(() => {
        setDisplayValue(prevValue => prevValue + onValue) 
        if(onValue === 'C'){
            setDisplayValue('');
        }
        if(onValue === 'DE') {
            setDisplayValue(displayValue.slice(0, -1))
        }
        if(onValue === '=') {
            setDisplayValue(eval(displayValue))
        }
    }, [onValue])
    

    
    return <div className="screen">
        {displayValue}
    </div>
}

export default Screen;