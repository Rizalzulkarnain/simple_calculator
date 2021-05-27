import { useState } from 'react';
import Input from './components/Input';
import Checkbox from './components/Checkbox';

import './App.css';

const App = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);
  const [result, setResult] = useState(0);

  const [checkListOne, setCheckListOne] = useState(true);
  const [checkListTwo, setCheckListTwo] = useState(true);
  const [checkListThree, setCheckListThree] = useState(true);

  const handleAdd = () => {
    setResult(Number(firstNumber) + Number(secondNumber) + Number(thirdNumber));

    setFirstNumber(0);
    setSecondNumber(0);
    setThirdNumber(0);
  };

  const handleSubstract = () => {
    setResult(Number(firstNumber) - Number(secondNumber) - Number(thirdNumber));

    setFirstNumber(0);
    setSecondNumber(0);
    setThirdNumber(0);
  };

  const handleMultiply = () => {
    setResult(Number(firstNumber) * Number(secondNumber) * Number(thirdNumber));

    setFirstNumber(0);
    setSecondNumber(0);
    setThirdNumber(0);
  };

  const handleDevide = () => {
    setResult(Number(firstNumber) / Number(secondNumber) / Number(thirdNumber));

    setFirstNumber(0);
    setSecondNumber(0);
    setThirdNumber(0);
  };

  return (
    <div className="container">
      <div>
        <Input
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          disabled={checkListOne ? true : false}
        />
        <Checkbox
          value={checkListOne}
          onChange={(e) => setCheckListOne(!checkListOne)}
        />
      </div>
      <div>
        <Input
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          disabled={checkListTwo ? true : false}
        />
        <Checkbox
          value={checkListTwo}
          onChange={(e) => setCheckListTwo(!checkListTwo)}
        />
      </div>
      <div>
        <Input
          value={thirdNumber}
          onChange={(e) => setThirdNumber(e.target.value)}
          disabled={checkListThree ? true : false}
        />
        <Checkbox
          value={checkListThree}
          onChange={(e) => setCheckListThree(!checkListThree)}
        />
      </div>

      <div className="btn__calc">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubstract}>-</button>
        <button onClick={handleMultiply}>x</button>
        <button onClick={handleDevide}>/</button>
      </div>
      <br />
      <div className="line__separate"></div>
      {!checkListOne && !checkListTwo && !checkListThree && (
        <div>Hasil: {result}</div>
      )}
      {!checkListOne && !checkListTwo && <div>Hasil: {result}</div>}
      {!checkListTwo && !checkListThree && <div>Hasil: {result}</div>}
      {!checkListOne && !checkListThree && <div>Hasil: {result}</div>}
      {!checkListOne ||
        !checkListTwo ||
        (!checkListThree && (
          <div>
            <p>Please..., Provide minimal 2(two) Checklist!</p>
          </div>
        ))}
    </div>
  );
};

export default App;
