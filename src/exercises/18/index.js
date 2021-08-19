import React, {useState} from "react";

// 1. Выведите список элементов, каждый из которых представляет собой текст и расположенную справа от текста кнопку, при нажатии на которую выводится alert с текстом элемента.


const ListItemAlert = () => {

    // const [text, alertText] = useState()

    const handleClick = (event) => {
        alert(event.currentTarget.textContent)
    }

        return (
            <ul>
                <li>first test</li>
                <button onClick={handleClick}>Display text</button>
                <br/>
                <li>second test</li>
                <button onClick={handleClick}>Display text</button>
                <br/>
                <li>third test</li>
                <button onClick={handleClick}>Display text</button>
                <br/>
                <li>fourth test</li>
                <button onClick={handleClick}>Display text</button>
            </ul>
        )
    }



export default ListItemAlert