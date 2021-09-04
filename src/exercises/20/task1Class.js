// 1. Вывести на страницу инпут и кнопку. По нажатию на кнопку инпут должен оказываться в фокусе. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React from "react";


class FocusToInputClass extends React.Component {

    render() {
        return (
            <div>
                <input ref={(input) => this.input = input}/>
                <button onClick={() => {this.input.focus()}}>
                    Focus
                </button>
            </div>
        )
    }
}

export default FocusToInputClass