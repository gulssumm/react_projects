import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { evaluate } from 'mathjs';

function GameComponent() {
  const [expression, setExpression] = useState('');
  const [message, setMessage] = useState('');
  const [userInputs, setUserInputs] = useState(Array(6).fill(Array(8).fill('')));
  const [activeRow, setActiveRow] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    const result = validateAndEvaluate(expression);
    setMessage(result);
    if (result.includes('correct')) {
      markRowAsCorrect(activeRow);
    }
  };

  const handleChange = (value) => {
    const newInputs = [...userInputs];
    newInputs[activeRow][activeColumn] = value;
    setUserInputs(newInputs);
    if (activeColumn < newInputs[activeRow].length - 1) {
      setActiveColumn(activeColumn + 1);
    } else {
      setActiveRow(activeRow + 1);
      setActiveColumn(0);
    }
  };

  const markRowAsCorrect = (rowIndex) => {
    const newInputs = [...userInputs];
    for (let i = 0; i < newInputs[rowIndex].length; i++) {
      newInputs[rowIndex][i] = newInputs[rowIndex][i].replace(/./g, ' '); // Clear the row
    }
    setUserInputs(newInputs);
  };

  const validateAndEvaluate = (expression) => {
    try {
      const result = evaluate(expression);
      const isValid = isValidExpression(expression, result);
      setIsCorrect(isValid);
      return isValid ? `The equation is correct: ${expression} = ${result}` : 'Invalid equation. Please try again.';
    } catch (error) {
      console.error("Error during expression processing:", error);
      return "An error occurred while processing the expression.";
    }
  };

  const isValidExpression = (expression, result) => {
    // Placeholder for validation logic
    // You can implement your own validation rules here
    return true;
  };

  return (
    <div className='custom'>
      <p>Enter your guess:</p>
      <br />
      <input type="text" value={expression} onChange={(e) => setExpression(e.target.value)} />
      <br />
      <button onClick={handleSubmit} className='custom-button'>Check</button>
      {message && <p>{message}</p>}
      <p>Equation: {expression}</p>
      <br />
      <div className="grid-container">
        {userInputs.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((input, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                onFocus={() => {
                  setActiveRow(rowIndex);
                  setActiveColumn(colIndex);
                }}
                style={{ width: '50px', height: '50px', textAlign: 'center', margin: '5px', backgroundColor: isCorrect ? 'green' : 'white' }}
                maxLength={1}
                disabled={!(rowIndex === activeRow && colIndex === activeColumn)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameComponent;
