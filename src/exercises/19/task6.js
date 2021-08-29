import React from "react";

// 6. Создайте форму авторизации из двух инпутов (для логина и пароля) и кнопки, которая проверяет валидность введённых данных. При успешном входе должен выводиться alert, уведомляющий об успехе авторизации. В случае неудачи нужно отобразить сообщение об ошибке снизу формы

const ValidForm = () => {

    const [formVal1, setFormVal1] = React.useState(
        [
            {login: ''},
            {errors: ''},
        ]
    )

    const [formVal2, setFormVal2] = React.useState(
        [
            {password: ''},
            {errors: ''},
        ]
    )

    const [error, setError] = React.useState('')


    const handleUserInput1 = (event) => {
        const name1 = event.target.name;
        const value1 = event.target.value;
        setFormVal1({name1, value1})
    }

    const handleUserInput2 = (event) => {
        const name2 = event.target.name;
        const value2 = event.target.value;
        setFormVal2({name2, value2})
    }


    const handleSubmitVal = (e) => {
        e.preventDefault();
        if (formVal1.value1.length < 5) {
            setError("Error! login is very short")
        } else if ((formVal1.value1.indexOf('$')) !== -1) {
            setError("Error! login has wrong symbol $")
        } else if ((formVal1.value1.indexOf('*')) !== -1) {
            setError("Error! login has wrong symbol *")
        } else if ((formVal1.value1.indexOf('#')) !== -1) {
            setError("Error! login has wrong symbol #")
        } else if (formVal2.value2.length < 9) {
            setError("Error! password is very short")
        } else if (/[0-9]/.test(formVal2.value2) === false) {
            setError("Error! password must contain numbers")
        } else if (/[A-Z]/.test(formVal2.value2) === false) {
            setError("Error! password must contain capital letters")
        } else if (/[а-я]/.test(formVal2.value2) === true) {
            setError("Error! password must contain only latin characters")
        } else {
            alert('Authorization was successful')
            setFormVal1({formValid: true});
            setFormVal2({formValid: true})
        }
    };


    return (
        <>
            <form onSubmit={handleSubmitVal}>
                <div>
                    <label htmlFor="login">Login</label>
                    <input type="text" required
                           name="login"
                           placeholder="login"
                           value={formVal1.login}
                           onChange={handleUserInput1}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" required
                           name="password"
                           placeholder="password"
                           value={formVal2.password}
                           onChange={handleUserInput2}/>
                </div>
                <button>Validate</button>
            </form>
            <p>{error}</p>
        </>
    );
}

export default ValidForm
