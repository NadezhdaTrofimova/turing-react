import React from "react";

// 5. Добавьте в предыдущее упражнение вторую форму, состоящую также из инпута и кнопки. Инпут должен принимать число. По нажатию на кнопку должен удаляться элемент с введённым в инпут номером

const RemoveString = () => {

    const [stringLi, setStringLi] = React.useState(
        [
            {id: 1, string: 'First item'},
            {id: 2, string: 'Second item'},
            {id: 3, string: 'Third item'},
            {id: 4, string: 'Fourth item'}
        ]
    )

    const [valueInput1, setValueInput1] = React.useState("");
    const [valueInput2, setValueInput2] = React.useState("");

    const handleSubmitAdd = (e) => {
        e.preventDefault();
            setStringLi([...stringLi, {id: stringLi.length + 1, string: valueInput1}]);
            setValueInput1("");
    };

    const handleSubmitRemove = (e) => {
        e.preventDefault();
        if (valueInput2 <= stringLi.length && valueInput2 >= 1)
        setStringLi([...stringLi.slice(0, parseInt(valueInput2) - 1), ...stringLi.slice(parseInt(valueInput2))]);
        setValueInput2("");
    };

    return (
        <>
            <form onSubmit={handleSubmitAdd}>
                <input value={valueInput1} onChange = {event => setValueInput1(event.target.value)}/>
                <button>Add string</button>
            </form>
            <form onSubmit={handleSubmitRemove}>
                <input value={valueInput2} onChange = {event => setValueInput2(event.target.value)}/>
                <button>Remove string</button>
            </form>
            <ol>
                {stringLi.map((liStr) => (<li>{liStr.string}</li>))}
            </ol>
        </>
    );
}

export default RemoveString
