import React from "react";
import './style.module.css'
import FocusToInputFunctional from "./task1Func";
import FocusToInputClass from "./task1Class";
import BlurToInputFunctional from "./task2Func";
import BlurToInputClass from "./task2Class";
import DifferentSizeFunctional from "./task3Func";
import DifferentSizeClass from "./task3Class";
import ScrollToBottomFunctional from "./task4Func";
import ScrollToBottomClass from "./task4Class";

const Main = () => {

    return (
        <div>
            <h1>1</h1>
            <FocusToInputFunctional/>
            <FocusToInputClass/>
            <h1>2</h1>
            <BlurToInputFunctional/>
            <BlurToInputClass/>
            <h1>3</h1>
            <DifferentSizeFunctional/>
            <DifferentSizeClass/>
            <h1>4</h1>
            <ScrollToBottomFunctional/>
            <ScrollToBottomClass/>
        </div>
    )
}

export default Main