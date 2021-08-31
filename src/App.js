import React from "react";
import './App.css'
import DoubleText from "./exercises/19/task1";
import CountSymbols from "./exercises/19/task2";
import SumInInputs from "./exercises/19/task3";
import AddString from "./exercises/19/task4";
import RemoveString from "./exercises/19/task5";
import ValidForm from "./exercises/19/task6";
import CreateSquare from "./exercises/19/task7";
import ChoiceOfTextSize from "./exercises/19/task8";

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
            <h1>6</h1>
            <ValidForm/>
            <h1>7</h1>
            <CreateSquare/>
            <h1>8</h1>
            <ChoiceOfTextSize/>
        </>
    )
  }
}

export default App