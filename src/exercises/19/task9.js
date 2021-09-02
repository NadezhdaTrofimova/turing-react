import React from "react";

// 9. Создайте форму, состоящую из инпута и кнопки. Также выведите на странице select. При вводе текста в инпут и нажатии кнопки этот текст должен добавляться как новая option в select’е

const AddOptionToSelect = () => {

    const [optionItem, setOptionItem] = React.useState(
        [
            {id: 1, optionItem: 'First item'},
            {id: 2, optionItem: 'Second item'},
            {id: 3, optionItem: 'Third item'},
            {id: 4, optionItem: 'Fourth item'}
        ]
    )

    const [valueInput, setValueInput] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setOptionItem([...optionItem, {id: optionItem.length + 1, optionItem: valueInput}]);
        setValueInput("");
    };


    return (
        <>
                <input value={valueInput} onChange = {event => setValueInput(event.target.value)}/>
                <button onClick={handleSubmit}>Add option</button>
            <select>
                {optionItem.map((item) => (<option key={item.id}>{item.optionItem}</option>))}
            </select>
        </>
    );
}

export default AddOptionToSelect
