import '../styles/wrapper.css'
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import { useState } from 'react';


const Wrapper = () => {

    const [displayValue, setDisplayValue] = useState('');

    function handleValue(btn) {
        
        setDisplayValue(btn)
    } 

    return (
    <div className='wrapper'>
        <Screen onValue={displayValue}/>
        <ButtonBox onValue={handleValue}/>
    </div>
)}

export default Wrapper