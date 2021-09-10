// 1. Вывести на страницу инпут и кнопку. По нажатию на кнопку инпут должен оказываться в фокусе. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React from "react";


class FocusToInputClass extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    render() {
        return (
            <div>
                <input ref={this.inputRef}/>
                <button onClick={() => {this.inputRef.current.focus()}}>
                    Focus
                </button>
            </div>
        )
    }
}

export default FocusToInputClass