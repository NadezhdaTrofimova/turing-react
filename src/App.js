import React from 'react';
import './exercises/19/styles.css'
import DoubleText from "./exercises/19/task1";
import CountSymbols from "./exercises/19/task2";
import SumInInputs from "./exercises/19/task3";


class App extends React.Component {
  render() {
    return (
        <>
            <h1>1</h1>
            <DoubleText/>
            <h1>2</h1>
            <CountSymbols/>
            <h1>3</h1>
            <SumInInputs/>
        </>
    )
  }
}

export default App