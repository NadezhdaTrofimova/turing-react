import React from "react";
import './styles.css'


// 2. Создайте список и кнопку, по нажатию на которую будет выводиться prompt, введённый в который текст будет добавляться в список. Ключи в списка должны быть уникальными. Выполните задачу в трёх вариациях:
// a. Добавление элемента в начало списка


const AddLiStart = () => {

    const [elements, setElements] = React.useState([
        {id: 1, value: 'first'},
        {id: 2, value: 'second'},
        {id: 3, value: 'third'},
        {id: 4, value: 'fourth'},
        {id: 5, value: 'fifth'},
    ])

    const liElements = elements.map((liData) => <li className='liText' key={liData.id}>{liData.value}</li>)


    const handleAddLi = () => {
        setElements([
                {id: elements.length + 1, value: `${prompt()}`},
                ...elements
            ]
        )
    }

    return (
        <div>
            <ul>
                {liElements}
            </ul>
            <button className='liText' onClick={handleAddLi}>Add new li to the start</button>
        </div>
    )

}


export default AddLiStart;