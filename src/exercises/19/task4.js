import React from "react";

// 4. Создайте форму с инпутом и кнопкой, а также упорядоченный список. При вводе значения инпут и нажатию на кнопку введённая в инпут строка должна добавляться в конец списка

const AddString = () => {

    const [stringLi, setStringLi] = React.useState(
        [
            {id: 1, string: 'First item'},
            {id: 2, string: 'Second item'},
            {id: 3, string: 'Third item'},
            {id: 4, string: 'Fourth item'}
        ]
    )

    const [valueInput, setValueInput] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
            setStringLi([...stringLi, {id: stringLi.length + 1, string: valueInput}]);
            setValueInput("");
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={valueInput} onChange = {event => setValueInput(event.target.value)}/>
                <button>Add string</button>
            </form>
            <ol>
                {stringLi.map((liStr) => (<li key={stringLi.id}>{liStr.string}</li>))}
            </ol>
        </>
    );
}

export default AddString
