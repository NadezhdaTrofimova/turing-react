// 2. Напишите функциональный компонент Button, который принимает в себя атрибуты text и onClick, и выводит кнопку button. Определите для этого компонента PropTypes.

import PropTypes from 'prop-types'


const Button = ({text, onClick}) => {

    return (
        <button onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button