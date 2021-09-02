// 4. Напишите классовый компонент Link, который отрисовывает ссылку <a>, и принимает пропсы href, text и isUnderlined. Определит PropTypes для этого компонента.

import React from "react";
import PropTypes from 'prop-types'


class Link extends React.Component  {

    constructor(props){
        super(props);
        this.href = this.props.href
        this.text = this.props.text
        this.isUnderlined = this.props.isUnderlined
    }

    render() {
        return (
        <a href={this.href} style={{textDecoration: this.isUnderlined ? 'underline' : 'none' }}>{this.text}</a>
        )
    }
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string,
    isUnderlined: PropTypes.bool
}

export default Link