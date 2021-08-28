import React from "react";
import './App.css'
import DoubleText from "./exercises/19/task1";
import CountSymbols from "./exercises/19/task2";
import SumInInputs from "./exercises/19/task3";
import AddString from "./exercises/19/task4";
import RemoveString from "./exercises/19/task5";

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
            <h1>4</h1>
            <AddString/>
            <h1>5</h1>
            <RemoveString/>
        </>
    )
  }
}

export default App