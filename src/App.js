import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';




function App() {
  const [num, setNum] = useState(0);
  const [quotation, setQuotation] = useState(<h1>Best Three Success Rules</h1>);

  const decrement = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const increment = () => {
    if (num < 3) { 
      setNum(num + 1);
    }
  };
 
  const RuleOne = () => {
    setQuotation(<h3>Success is the sum of small efforts, repeated day in and day out.</h3>);
  }
  const RuleTwo = () => {
    setQuotation(<h3>The best way to predict the future is to create it.</h3>);
  }
  const RuleThree = () => {
    setQuotation(<h3>It does not matter how slowly you go as long as you do not stop.</h3>);
  }

  

  useEffect(() => {
    if (num === 1) {
      setQuotation(<h3>Success is the sum of small efforts, repeated day in and day out.</h3>);
    }
    if (num === 2) {
      setQuotation(<h3>The best way to predict the future is to create it.</h3>);
    }
    if (num === 3) {
      setQuotation(<h3>It does not matter how slowly you go as long as you do not stop.</h3>);
    }
  }, [num]);
  
  const arry = [RuleOne, RuleTwo, RuleThree];

  return (
    <div style={{ textAlign: "center", width: "50%", height: "80vh", backgroundColor: "lightgrey" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button title={1} onClick={arry[0]} num={num}/>
        <Button title={2} onClick={arry[1]} num={num}/>
        <Button title={3} onClick={arry[2]} num={num}/>
      </div>

      <div className='quotation-div'>
        {quotation}
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button title="Previous" onClick={decrement} />
        <Button title="Next" onClick={increment} />
      </div>
    </div>
  );
};

const Button = ({title, onClick, num}) => {
  return (
    <button onClick={onClick} style={{ cursor: "pointer", backgroundColor: title === num ? "green" : ""}}>
      {title}
    </button>
  );
};


export default App;


