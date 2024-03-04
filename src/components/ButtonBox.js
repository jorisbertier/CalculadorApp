import '../styles/ButtonBox.css'
import Button from './Button';

function ButtonBox() {

    const buttonValue = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
    ]

    return <div className="buttonBox">
          {
          buttonValue.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                
              />
            );
          })
        }
    </div>
}

export default ButtonBox