import React, {useState} from 'react';

// 2. Создайте инпут и кнопку. Пусть при нажатии на кнопку выводится alert с данными о количестве введённых символов

const CountSymbols = () => {

    const [value, setValue] = React.useState({value: ''})

    const handleSymbolsCount = () => {
        alert (value.length)
        setValue('')
    }

    return(
        <div>
            <input onChange={event => setValue(event.target.value)} value={value}/>
            <button onClick={handleSymbolsCount}>Count symbols</button>
        </div>
    );
}

export default CountSymbols
