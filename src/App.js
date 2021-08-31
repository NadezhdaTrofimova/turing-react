import React from 'react';
import Image from "./exercises/21/task1";
import './../src/exercises/21/styles.css'


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>1</h1>
                <Image src='https://cs.pikabu.ru/post_img/2013/06/17/7/1371462635_257603021.jpg' height={100} width={120}/>
            </div>
        )
    }
}


export default App