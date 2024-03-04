import '../styles/wrapper.css'
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Button';

const Wrapper = () => {
    return (<div className='wrapper'>
        <Screen />
        <ButtonBox>
            <div className="test">
            <Button></Button>
            </div>
        </ButtonBox>
    </div>
)}

export default Wrapper