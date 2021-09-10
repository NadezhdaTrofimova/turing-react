// 3. Вывести на страницу набор постов, где шрифт и размер текста зависит от высоты контейнера(высота 100px - шрифт 15px, высота 200 - шрифт 20px, высота 300px - шрифт 30px), в котором он находится. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.

import React from "react";


class DifferentSizeClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            heights: [100, 200, 300],
            post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    }

    render() {
        return (
            <div>
                {this.state.heights.map((size, index) =>
                    <Content
                        key={index}
                        post={this.state.post}
                        heights={size}
                    />)}
            </div>
        )
    }
}


class Content extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            fontSize: ''
        }

        this.post = props.post
        this.heights = props.heights
    }

    elementRef = React.createRef()

    componentDidMount() {
        if (this.elementRef.current.clientHeight === 100) {
            this.setState({fontSize: 15})
        } else if (this.elementRef.current.clientHeight === 200) {
            this.setState({fontSize: 20})
        } else if (this.elementRef.current.clientHeight === 300) {
            this.setState({fontSize: 30})
        }
    }

    render() {
        return (
            <div
                ref={this.elementRef}
                style={{
                    fontSize: `${this.state.fontSize}px`,
                    height: this.heights,
                    backgroundColor: 'red'}}>
                {this.post}
            </div>
        )
    }
}

export default DifferentSizeClass