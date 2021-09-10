// 3. Вывести на страницу набор постов, где шрифт и размер текста зависит от высоты контейнера(высота 100px - шрифт 15px, высота 200 - шрифт 20px, высота 300px - шрифт 30px), в котором он находится. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React from "react";


const DifferentSizeFunctional = () => {

    const post = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    const heights = [100, 200, 300];

    return (
        <div>
            {heights.map((size, index) => (
                <Content
                    key={index}
                    size={size}
                    post={post}
                />))}
        </div>
    );
}


const Content = ({post, size}) => {

    const [fontSize, setFontSize] = React.useState()
    const elementRef = React.useRef()

    React.useEffect(() => {
        if (elementRef.current.clientHeight === 100) {
            setFontSize(15)
        } else if (elementRef.current.clientHeight === 200) {
            setFontSize(20)
        } else if (elementRef.current.clientHeight === 300) {
            setFontSize(30)
        }
    }, [])

    return (
        <div
            ref={elementRef}
            style={{
                fontSize: `${fontSize}px`,
                height: size,
                backgroundColor: 'red'
            }}>
            {post}
        </div>
    )
}


export default DifferentSizeFunctional
