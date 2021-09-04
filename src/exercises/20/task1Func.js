// 1. Вывести на страницу инпут и кнопку. По нажатию на кнопку инпут должен оказываться в фокусе. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React, {useRef} from "react";


const FocusToInputFunctional = () => {

    const textInput = useRef('')

    function handleClick() {
        textInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                ref={textInput}/>
            <button onClick={handleClick}>
                Focus
            </button>
        </div>
    );
}


export default FocusToInputFunctional