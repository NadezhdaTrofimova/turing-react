import React from 'react';
import ListItemAlert from './exercises/18/task1'
import AddLi from "./exercises/18/task2";
import RemoveLi from "./exercises/18/task3";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>1</h1>
                <ListItemAlert/>
                <h1>2</h1>
                <AddLi/>
                <h1>3</h1>
                <RemoveLi/>
            </div>
        )
    }
}

export default App