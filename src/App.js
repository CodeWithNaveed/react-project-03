import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';




function App() {
  const [num, setNum] = useState(0);
  const [quotation, setQuotation] = useState(<h1>Best Three Success Rules</h1>);


  const decrement = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const increment = () => {
    if (num < 3) {
      setNum(num + 1);
    }
  };

  const [classname,setclassname] = useState("");

  const RuleZero = () => {
    setQuotation(<h1>Best Three Success Rules</h1>);
  }
  const RuleOne = () => {
    setclassname("action")
    setQuotation(<h3>Success is the sum of small efforts, repeated day in and day out.</h3>);
    setNum(1);
  }
  const RuleTwo = () => {
    setclassname("action")
    setQuotation(<h3>The best way to predict the future is to create it.</h3>);
    setNum(2);
  }
  const RuleThree = () => {
    setclassname("action")
    setQuotation(<h3>It does not matter how slowly you go as long as you do not stop.</h3>);
    setNum(3);
  }

  const [zerorule, setzerorule] = useState();
  const [onerule, setonerule] = useState();
  const [tworule, settworule] = useState();
  const [threerule, setthreerule] = useState();


  useEffect(() => {
    if (num === 0) {
      setzerorule(RuleZero);
    }
    if (num === 1) {
      setonerule(RuleOne);
    }
    if (num === 2) {
      settworule(RuleTwo);
    }
    if (num === 3) {
      setthreerule(RuleThree);
    }
  }, [num]);

  const arry = [RuleZero, RuleOne, RuleTwo, RuleThree];

  return (
    <div style={{ textAlign: "center", width: "50%", height: "80vh", backgroundColor: "lightgrey" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button title={1} classon={classname} onClick={arry[1]} num={num} />
        <Button title={2} classon={classname} onClick={arry[2]} num={num} />
        <Button title={3} classon={classname} onClick={arry[3]} num={num} />
      </div>

      <div className='quotation-div'>
        {quotation}
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button title="Previous" onClick={decrement}/>
        <Button title="Next" onClick={increment}/>
      </div>
    </div>
  );
};

const Button = ({ title, onClick, num, classon}) => {

  return (
    <button className={classon} onClick={onClick} style={{backgroundColor: title === num ? "red" : "" }}>
      {title} 
    </button>
  );
};


export default App;


