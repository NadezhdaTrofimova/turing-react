import React from "react";
import './ListItemAlert.css'

// 1. Выведите список элементов, каждый из которых представляет собой текст и расположенную справа от текста кнопку, при нажатии на которую выводится alert с текстом элемента.

const ListItemAlert = () => {

    let data = [
        {text: "First text"},
        {text: "Second text"},
        {text: "Third text"},
        {text: "Fourth text"},
        {text: "Fifth text"},
    ];

    let li = data.map((liText) => (
            <li>
                <span>{liText.text}</span>
                <button onClick={() => alert(`${liText.text}`)} className='button'>Display text</button>
            </li>
        )
    )

    return (
        <ul>
            {li}
        </ul>
    )
}

export default ListItemAlert

// 2. Создайте список и кнопку, по нажатию на которую будет выводиться prompt, введённый в который текст будет добавляться в список. Ключи в списка должны быть уникальными. Выполните задачу в трёх вариациях:
// Добавление элемента в начало списка
// Добавление элемента в конец списка
// Добавление элемента в середину списка