// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

// ................Lecture....................

import React from 'react';
// import ListClass from './lecture/day1'
// import List from './lecture/day2'
// import ListFunctional from "./lecture/day2";
// import LoginForm from "./lecture/day3";
import Lifecycle from "./lecture/day3.2";
import Button from "./lecture/day3.2";

class App extends React.Component {
  render() {
    return (
        <>
            <Button/>
            {/*<Lifecycle/>*/}
          {/*<ListClass/>*/}
          {/*<List/>*/}
          {/*<ListFunctional/>*/}
        </>
    )
  }
}

export default App