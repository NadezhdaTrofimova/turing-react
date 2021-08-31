import React from "react";

// 8. Создайте на странице абзац и select, который позволяет выбрать между различными размерами текста (8px, 16px, 24px, 32px)

const ChoiceOfTextSize = () => {


    const [textSize, setTextSize] = React.useState(16)
    const [optionSize, setOptionSize] = React.useState(16)

    const handleChange = (event) => {
        setOptionSize(event.target.value);
    }

    const handleChangeSize = () => {
        switch (optionSize) {
            case '8':
                setTextSize(8);
                break;
            case '16':
                setTextSize(16);
                break;
            case '24':
                setTextSize(24);
                break;
            default:
                setTextSize(32);
        }
    }

    return (
        <div>
            <div>
                <select value={optionSize} onChange={handleChange}>
                    <option value={8}>8px</option>
                    <option value={16}>16px</option>
                    <option value={24}>24px</option>
                    <option value={32}>32px</option>
                </select>
                <button onClick={handleChangeSize}>Изменить размер</button>
            </div>
            <p style={{fontSize: `${textSize}px`}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export default ChoiceOfTextSize
