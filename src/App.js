import React from 'react';
import ListItemAlert from './exercises/18/task1'
import AddLiStart from "./exercises/18/tast2a";
import AddLiEnd from "./exercises/18/task2b";
import AddLiMiddle from "./exercises/18/tast2c";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>1</h1>
                <ListItemAlert/>
                <h1>2a</h1>
                <AddLiStart/>
                <h1>2b</h1>
                <AddLiEnd/>
                <h1>2c</h1>
                <AddLiMiddle/>
            </div>
        )
    }
}

export default App