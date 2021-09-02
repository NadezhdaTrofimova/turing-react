// 1. Напишите функциональный компонент Image, который принимает в себя атрибуты src, width и height, который отрисовывает изображение img. Зная, что src - строка, а width и height - числа, определите для нее PropTypes.

import PropTypes from 'prop-types'


const Image = ({src, width, height}) => {

    return (
        <img src={src} alt='dog' width={`${width}px`} height={`${height}px`}/>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
}

export default Image