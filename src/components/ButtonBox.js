import '../styles/ButtonBox.css'
import Button from './Button';

function ButtonBox({onValue}) {

    const buttonValue = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ]

    const value = (btn) => {
        onValue(btn);
    };

    const getButtonClassName = (btn) => {
        switch (btn) {
            case '=':
                return 'equals';
            case '+':
                return 'more';
            case '-':
                return 'more'
            case '/':
                return 'more'
            case 'X':
                return 'more'
            case 'C':
                return 'c'
            default:
                return "";
        }
    }

    return <div className="buttonBox">
          {
          buttonValue.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={getButtonClassName(btn)}
                value={btn}
                onClick={() => value(btn)}
                
              />
            );
          })
        }
    </div>
}

export default ButtonBox