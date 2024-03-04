import '../styles/Screen.css'
import { useState, useEffect } from 'react';

function Screen({onValue}) {

    const [displayValue, setDisplayValue] = useState('')

    useEffect(() => {
        setDisplayValue(prevValue => prevValue + onValue)
        if(onValue === 'C'){
            setDisplayValue('');
        }
        if(onValue === '=') {
            
        }
    }, [onValue])
    

    
    return <div className="screen">
        {displayValue}
    </div>
}

export default Screen;