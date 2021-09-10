// 4. Вывести на блок с достаточным для появления скролла текстом. Сделать кнопку, при нажатии на которую будет происходить скролл до конца контейнера. Задачу выполните в двух вариациях: на функциональных компонентах и на классовых.
import React from "react";
import style from './style.module.css'


const ScrollToBottomFunctional = () => {

    const elemRef = React.createRef()

    const handleOnBottom = () => {
        elemRef.current.scrollTop = elemRef.current.scrollHeight
    }

    return (
        <div>
            <button onClick={handleOnBottom}>To Bottom</button>
            <div
                className={style.container}
                ref={elemRef}>
                Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you
                know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most
                times they're friends, like you and me! I should've known way back when... You know why, David? Because
                of the kids. They called me Mr Glass.

                Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name
                printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a
                mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy
                store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

                Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than
                mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same
                way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it
                may seem, we are connected, you and I. We're on the same curve, just on opposite ends.

                Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name
                printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a
                mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy
                store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.

            </div>
        </div>
    )

}


export default ScrollToBottomFunctional
