import React from "react";
import './style.css'
import FocusToInputFunctional from "./task1Func";
import FocusToInputClass from "./task1Class";
import BlurToInputFunctional from "./task2Func";
import BlurToInputClass from "./task2Class";

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
            <h1>4</h1>
        </div>
    )
}

export default Main