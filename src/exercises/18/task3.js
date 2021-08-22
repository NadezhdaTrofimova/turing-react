import React from "react";
import './styles.css'


// 3. Добавьте к предыдущей задаче кнопку, которая будет удалять элемент из:
//  a. Начала списка
// b. Конца списка
// c. Середины списка


const RemoveLi = () => {

    const [elements, setElements] = React.useState([
        {id: 1, value: 'first'},
        {id: 2, value: 'second'},
        {id: 3, value: 'third'},
        {id: 4, value: 'fourth'},
        {id: 5, value: 'fifth'},
    ])

    const liElements = elements.map((liData) => <li className='liText' key={liData.id}>{liData.value}</li>)

    const handleRemoveLiStart = () => {
        elements.shift()
        setElements(
            [
                ...elements
            ]
        )
    }

    const handleRemoveLiEnd = () => {
        elements.pop()
        setElements([
                ...elements,
            ]
        )
    }

    const handleAddLiMiddle = () => {
        setElements([
            ...elements.slice(0, Math.floor(elements.length / 2)).concat(elements.slice(Math.floor(elements.length / 2) + 1))
            ]
        )
    }

    return (
        <div>
            <ul>
                {liElements}
            </ul>
            <button className='liText' onClick={handleRemoveLiStart}>Remove from the start</button>
            <button className='liText' onClick={handleRemoveLiEnd}>Remove from the end</button>
            <button className='liText' onClick={handleAddLiMiddle}>Remove from the middle</button>
        </div>
    )

}


export default RemoveLi;