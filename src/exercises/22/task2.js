// 2. Дополните код loadUser таким образом, чтобы загружался пользователь с определенным ID. Ссылкка для загрузки пользователя: https://jsonplaceholder.typicode.com/users/:id, где вместо :id подставляется число - собственно ID самого пользователя. Например, загрузка пользоваателя с ID 9 соответствует ссылке https://jsonplaceholder.typicode.com/users/9. Структуру ответа (и будущих данных) можно посмотреть, перейдя по последней ссылке в этом упражнении. Для загрузки данных следует использовать метод GET.  Выведите данные о  пользователе: имя, юзернэйм, номер телефона, веб-сайт и наименование компании, в котором работает данный пользователь.

import React from "react";

const User = () => {

    const [user, setUser] = React.useState({});
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [value, setValue] = React.useState('')
    const [id, setId] = React.useState(1)


    const loadUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUser(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }

    React.useEffect(() => {
        loadUser(id);
    }, [id])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleButtonClick = (event) => {
        event.preventDefault()
        setId(parseInt(value))
    }


    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <>
                <input onChange={handleChange} value={value}/>
                <button onClick={handleButtonClick}>Введите id (1 - 10)</button>
                <div>
                    <div className='user-container'><h1>Имя :</h1><h2>{user.name}</h2></div>
                    <div className='user-container'><h1>Юзернэйм :</h1><h2>{user.username}</h2></div>
                    <div className='user-container'><h1>Номер телефона :</h1><h2>{user.phone}</h2></div>
                    <div className='user-container'><h1>Веб-сайт :</h1><h2>{user.website}</h2></div>
                    {(user.company) ?
                    <div className='user-container'><h1>Наименование компании :</h1><h2>{user.company.name}</h2></div> :
                    <div className='user-container'><h1>Наименование компании :</h1><h2>Неизвестно</h2></div>}
                </div>
            </>
        )
    }
}

export default User
