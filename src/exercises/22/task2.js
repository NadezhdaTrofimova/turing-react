import React from "react";


const App = () => {

    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [todo, setTodo] = React.useState([]);

    const loadTodo = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setTodo(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    React.useEffect(() => {
        loadTodo();
    }, [])


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <table>
                <thead>
                <th>N</th>
                <th>User</th>
                <th>Todo title</th>
                <th>Completed</th>

                </thead>
                {todo.map(todo => (
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td>{todo.completed ? '+' : '-'}</td>
                    </tr>
                ))}
            </table>
        );
    }
}

export default App
