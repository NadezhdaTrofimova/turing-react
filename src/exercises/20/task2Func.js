// 2. В предыдущей задаче добавьте инпуту следующую логику: при вводе в него текста “Hello world!” инпут должен блюриться(blur()). Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React, {useRef, useState} from "react";


const BlurToInputFunctional = () => {

    const [text, setText] = useState('')
    const input = useRef('')

    const handleClick = () => {
        input.current.focus();
    }

    const handleOnChange = (event) => {
        if (event.target.value === 'Hello world!') {
            input.current.blur()
        }
        setText(event.target.value)
    }


    return (
        <div>
            <input
                type="text"
                value={text}
                ref={input}
                onChange={handleOnChange}
            />
            <button onClick={handleClick}>
                Focus
            </button>
        </div>
    );
}


export default BlurToInputFunctional