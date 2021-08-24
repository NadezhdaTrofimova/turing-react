import React, {useState} from 'react';

// 1. Создайте на странице textarea и абзац. Выводите всё, что пользователь вводит в textarea в абзац.

function DoubleText() {

    const [value, setValue] = React.useState('Введите текст')

    return(
        <div>
            <textarea onChange = {event => setValue(event.target.value)}>{value}</textarea>
            <p>{value}</p>
        </div>
    );
}

export default DoubleText;
