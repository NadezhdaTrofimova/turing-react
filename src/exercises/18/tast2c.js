import React from "react";
import './styles.css'


// 2. Создайте список и кнопку, по нажатию на которую будет выводиться prompt, введённый в который текст будет добавляться в список. Ключи в списка должны быть уникальными. Выполните задачу в трёх вариациях:
// c. Добавление элемента в середину списка


const AddLiMiddle = () => {

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
            <button className='liText' onClick={handleAddLi}>Add new li to the middle</button>
        </div>
    )

}


export default AddLiMiddle;