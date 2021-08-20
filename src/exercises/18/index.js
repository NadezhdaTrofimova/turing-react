import React, {useState} from "react";
import './ListItemAlert.css'

// 1. Выведите список элементов, каждый из которых представляет собой текст и расположенную справа от текста кнопку, при нажатии на которую выводится alert с текстом элемента.


const ListItemAlert = () => {

    const handleClick = (liText) => {
        alert (liText)
    }

    let liButton = <button onClick={() => handleClick(liText)} className='button'>Display text</button>;

    const [liText] = React.useState(
        [
            ['First text', liButton],
            ['Second text', liButton],
            ['Third text', liButton],
            ['Fourth text', liButton],
            ['Fifth text', liButton]
        ]
    )


    return (

        <ul>
            {liText.map(liText => (<li class='liText'>{liText}</li>))}
        </ul>
    )

}


export default ListItemAlert