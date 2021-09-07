// 1. Вывести на страницу инпут и кнопку. По нажатию на кнопку инпут должен оказываться в фокусе. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React from "react";


const FocusToInputFunctional = () => {

    const inputRef = React.createRef()

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={inputRef}/>
            <button onClick={handleClick}>
                Focus
            </button>
        </div>
    );
}


export default FocusToInputFunctional