// 3. Напишите классовый компонент Header, который выводит заголовок h1, и в параметрах ожидает text и color. Типизируйте этот компонент с помощью PropTypes.

import React from "react";
import PropTypes from 'prop-types'


class Header extends React.Component  {

    constructor(props){
        super(props);
        this.text = this.props.text
        this.color = this.props.color
    }

    render() {
        return (
            <h1 style={{color: `${this.color}`}}>{this.text}</h1>
        )
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Header