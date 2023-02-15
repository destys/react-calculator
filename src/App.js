import React, { useState } from 'react'

import styles from './App.module.scss'


function App() {

  const clear = () => {
    setResult('');
  }

  const calculate = (e) => {
    setResult(result.concat(e.target.value));
  }

  const plusMinus = () => {
    setResult(`${-result}`);
  }

  const equals = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error!')
    }
  }

  const buttons = [
    {
      val: 'AC',
      classes: 'bg-calcGrey',
      customFunction: clear
    },
    {
      val: '+/-',
      classes: 'bg-calcGrey',
      customFunction: plusMinus
    },
    {
      val: '%',
      classes: 'bg-calcGrey'
    },
    {
      val: '/',
      classes: 'bg-calcOrange'
    },
    {
      val: '7',
      classes: 'bg-calcDark'
    },
    {
      val: '8',
      classes: 'bg-calcDark'
    },
    {
      val: '9',
      classes: 'bg-calcDark'
    },
    {
      val: '*',
      classes: 'bg-calcOrange',
      name: 'x'
    },
    {
      val: '4',
      classes: 'bg-calcDark'
    },
    {
      val: '5',
      classes: 'bg-calcDark'
    },
    {
      val: '6',
      classes: 'bg-calcDark'
    },
    {
      val: '-',
      classes: 'bg-calcOrange'
    },
    {
      val: '1',
      classes: 'bg-calcDark'
    },
    {
      val: '2',
      classes: 'bg-calcDark'
    },
    {
      val: '3',
      classes: 'bg-calcDark'
    },
    {
      val: '+',
      classes: 'bg-calcOrange'
    },
    {
      val: '0',
      classes: 'bg-calcDark col-start-1 col-end-3 w-full'
    },
    {
      val: '.',
      classes: 'bg-calcDark',
      name: ',' 

    },
    {
      val: '=',
      classes: 'bg-calcOrange',
      customFunction: equals, 
    },
  ]

  const [result, setResult] = useState('');

  return (
    <div className={`${styles.App} w-[428px] bg-black rounded-[30px] p-4 m-5`}>
      <input className={`${styles.App__input} mb-2 bg-transparent text-primary text-end w-full p-1`} defaultValue={result} />
      <div className="App__buttons grid gap-3 grid-cols-4">
        {buttons.map(item =>
          <button
            className={`h-[88px] rounded-full text-3xl text-primary ${item.classes}`}
            key={item.val}
            value={item.val}
            onClick={item.customFunction ? item.customFunction : calculate}
          >{item.name ? item.name : item.val}</button>)}
      </div>
    </div >
  );
}

export default App;