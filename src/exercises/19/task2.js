import React, {useState} from 'react';

// 2. Создайте инпут и кнопку. Пусть при нажатии на кнопку выводится alert с данными о количестве введённых символов

const CountSymbols = () => {

    const [value, setValue] = useState({value: ''})

    const handleSymbolsCount = () => {
        alert (value.length)
    }

    return(
        <div>
            <input onChange={event => setValue(event.target.value)}/>
            <button onClick={handleSymbolsCount}>Count symbols</button>
        </div>
    );
}

export default CountSymbols
