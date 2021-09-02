import React from "react";

// 7. Создайте на странице чекбокс и ниже него красный квадрат. При активированном состоянии чекбокса квадрат должен пропадать, при снятии галочки квадрат должен снова появляться

const CreateSquare = () => {

    const handleCheckbox = (event) => {
        if (event.target.checked === true) {
        setChecked(true);
        setVisibility('visible')}
        else
        {setChecked(false);
            setVisibility('hidden')}
    };

    const[checked, setChecked] = React.useState(false)
    const[visibility, setVisibility] = React.useState('hidden')

    return (
        <>
            <input type='checkbox' checked={checked} onChange={handleCheckbox}/>
            <div
                style={{
                visibility: `${visibility}`,
                height: '50px',
                width: '50px',
                backgroundColor: 'red'
            }}>
            </div>
        </>
    );
}

export default CreateSquare
