// 2. В предыдущей задаче добавьте инпуту следующую логику: при вводе в него текста “Hello world!” инпут должен блюриться(blur()). Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React from "react";


class BlurToInputClass extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    state = {
        text: ''
    }

    handleOnChange = (event) => {
        if (event.target.value === 'Hello world!') {
            this.inputRef.current.blur()
        }
        this.setState({text: event.target.value})
    }


    render() {
        return (
            <div>
                <input
                    ref={this.inputRef}
                    onChange={this.handleOnChange}/>
                <button
                    onClick={() => {this.inputRef.current.focus()}}>
                    Focus
                </button>
            </div>
        )
    }
}

export default BlurToInputClass