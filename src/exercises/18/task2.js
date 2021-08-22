import React from "react";
import './styles.css'


// 2. Создайте список и кнопку, по нажатию на которую будет выводиться prompt, введённый в который текст будет добавляться в список. Ключи в списка должны быть уникальными. Выполните задачу в трёх вариациях:
// a. Добавление элемента в начало списка
// b. Добавление элемента в конец списка
// c. Добавление элемента в середину списка


const AddLi = () => {

    const [elements, setElements] = React.useState([
        {id: 1, value: 'first'},
        {id: 2, value: 'second'},
        {id: 3, value: 'third'},
        {id: 4, value: 'fourth'},
        {id: 5, value: 'fifth'},
    ])

    const liElements = elements.map((liData) => <li className='liText' key={liData.id}>{liData.value}</li>)


    const handleAddLiStart = () => {
        setElements([
                {id: elements.length + 1, value: `${prompt()}`},
                ...elements
            ]
        )
    }

    const handleAddLiEnd = () => {
        setElements([
                ...elements,
                {id: elements.length + 1, value: `${prompt()}`}
            ]
        )
    }

    const handleAddLiMiddle = () => {
        setElements([
                ...elements.slice(0, Math.floor(elements.length / 2)),
                {id: elements.length + 1, value: `${prompt()}`},
                ...elements.slice(Math.floor(elements.length / 2))
            ]
        )
    }

    return (
        <div>
            <ul>
                {liElements}
            </ul>
            <button className='liText' onClick={handleAddLiStart}>Add new li to the start</button>
            <button className='liText' onClick={handleAddLiEnd}>Add new li to the end</button>
            <button className='liText' onClick={handleAddLiMiddle}>Add new li to the middle</button>
        </div>
    )

}


export default AddLi;