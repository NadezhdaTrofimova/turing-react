import React from "react";
import Image from "./task1";
import Button from "./task2";
import Header from "./task3";
import Link from "./task4";
import UnorderedList from "./task5";
import SmartButton from "./task6";

class Main extends React.Component {


    render() {
        return (
            <div>
                <h1>1</h1>
                <Image src='https://cs.pikabu.ru/post_img/2013/06/17/7/1371462635_257603021.jpg' height={100}
                       width={120}/>
                <h1>2</h1>
                <Button text='click me' onClick={() => alert('Success')}/>
                <h1>3</h1>
                <Header text='Header' color={'red'}/>
                <h1>4</h1>
                <Link href='https://www.google.ru/' text='GOOGLE' isUnderlined={false}/>
                <h1>5</h1>
                <UnorderedList listItems={['first', 'second', 'third']}/>
                <h1>6</h1>
                <SmartButton isButton={false}
                             textButton='Do not click'
                             href='https://yandex.ru/pogoda/saint-petersburg/maps/nowcast?le_Lightning=1'
                             onClick={() => alert("why did you press?")}
                             isUnderlined={false}
                             textLink='yandex'/>
            </div>
        )
    }

}

export default Main