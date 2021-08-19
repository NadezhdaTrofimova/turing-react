import React from "react";

// 1. Выведите список элементов, каждый из которых представляет собой текст и расположенную справа от текста кнопку, при нажатии на которую выводится alert с текстом элемента.


const ListItemAlert = () => {


    const [text] = React.useState([
        {id:1, value: 'First text'},
        {id:2, value: 'Second text'},
        {id:3, value: 'Third text'},
        {id:4, value: 'Fourth text'},
        {id:5, value: 'Fifth text'},
    ])

    // const handleClick = (event) => {
    //     alert(event.currentTarget.textContent)
    // }

        return (
            <ul>
                {text.map}

                {/*<li>first test</li>*/}
                {/*<button onClick={handleClick}>Display text</button>*/}
                {/*<br/>*/}
                {/*<li>second test</li>*/}
                {/*<button onClick={handleClick}>Display text</button>*/}
                {/*<br/>*/}
                {/*<li>third test</li>*/}
                {/*<button onClick={handleClick}>Display text</button>*/}
                {/*<br/>*/}
                {/*<li>fourth test</li>*/}
                {/*<button onClick={handleClick}>Display text</button>*/}
            </ul>
        )
    }



export default ListItemAlert