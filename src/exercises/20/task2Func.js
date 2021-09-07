// 2. В предыдущей задаче добавьте инпуту следующую логику: при вводе в него текста “Hello world!” инпут должен блюриться(blur()). Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React from "react";


const BlurToInputFunctional = () => {

    const [text, setText] = React.useState('')
    const inputRef = React.createRef()

    const handleClick = () => {
        inputRef.current.focus();
    }

    const handleOnChange = (event) => {
        if (event.target.value === 'Hello world!') {
            inputRef.current.blur()
        }
        setText(event.target.value)
    }


    return (
        <div>
            <input
                type="text"
                value={text}
                ref={inputRef}
                onChange={handleOnChange}
            />
            <button onClick={handleClick}>
                Focus
            </button>
        </div>
    );
}


export default BlurToInputFunctional