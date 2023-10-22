
import { useState } from "react";

function App() {
  const [value, setValue] = useState('')
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const [result, setResult] = useState('');

  const condition = (event) => {
    setValue(event.target.value)
    console.log(value)
  }

  const condition1 = (event) => {
    setUpperCase(event.target.checked);
  }

  const condition2 = (event) => {
    setLowerCase(event.target.checked);
  }

  const condition3 = (event) => {
    setNumbers(event.target.checked);
  }

  const condition4 = (event) => {
    setSymbols(event.target.checked);
  }

  function generateRandomString() {
    if (upperCase === false && lowerCase === false && symbols === false && numbers === false) {
      setResult('Select at least one condition')
    } else if (value.length === 0) {
      setResult('Enter the password length')
    } else if (isNaN(value)) {
      setResult('The length mast be a number')
    } else if (value > 23) {
      setResult('The max length is 23')
    } else if (value === 0) {
      setResult('Enter the password length')
    } else {
      let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
      let num = '0123456789'
      let sym = '!@#$%^&*()_+=-'

      let characters = '';
      if (upperCase) characters += upperCaseLetters;
      if (lowerCase) characters += lowerCaseLetters;
      if (numbers) characters += num;
      if (symbols) characters += sym;

      let randomString = '';
      for (let i = 0; i < value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
      setResult(randomString);
      }
  }

  return (
    <div>
      <h1>Generate a<span> Random Password</span></h1>
      <div className="underLine"></div>
      <div className="password">
        <p>{result}</p>
        <img src="/icons/copy.png" alt="copy"></img>
      </div>
      <div className="button" onClick={() => generateRandomString(value)}>
        <img src="/icons/thunder.png" alt="thunder"></img>
        <p>Generate</p>
      </div>
      <div className="container">
        <div className="conditions">
          <div className="condition">
            <p>Password length</p>
            <input onChange={condition} value={value} className="symbolsNumber"></input>
          </div>
          <div className="condition">
            <p>Include uppercase letters</p>
            <input onChange={condition1} type="checkbox"></input>
          </div>
          <div className="condition">
            <p>Include lowercase letters</p>
            <input onChange={condition2} type="checkbox"></input>
          </div>
          <div className="condition">
            <p>Include numbers</p>
            <input onChange={condition3} type="checkbox"></input>
          </div>
          <div className="condition">
            <p>Include symbols</p>
            <input  onChange={condition4} type="checkbox"></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;