import React from 'react';

// 3. Создайте два инпута с типом number и кнопку. По нажатию на кнопку должен выводиться alert с суммой значений из инпутов

const SumInInputs = () => {

    const [value1, setValue1] = React.useState('')
    const [value2, setValue2] = React.useState('')

    const handleSumInInputs = () => {
        alert(parseInt(value1) + parseInt(value2))
        setValue1('')
        setValue2('')
    }

    return (
        <div>
            <input onChange={event => setValue1(event.target.value)} value={value1}/>
            <span>+</span>
            <input onChange={event => setValue2(event.target.value)} value={value2}/>
            <button onClick={handleSumInInputs}>=</button>
        </div>
    );
}

export default SumInInputs
