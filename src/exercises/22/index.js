import React from "react";
import "./styles.css"
import App from "./task1";
import User from "./task2";


class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>1</h1>
                <App/>
                <h1>2</h1>
                <User/>
            </div>
        )
    }

}

export default Main