// 6.  функциональный компонент SmartButton, который, в зависимости от переданного пропса isButton, будет выводить либо компонент Button из 2 упражнения (если isButton === true), либо Link из 4 упражнения (если isButton === false). В итоге у этого компонента должно быть 6 пропсов (2 из Button, 3 из Link и собственно isButton). Типизируйте этот компонент с помощью PropTypes.

import PropTypes from 'prop-types'
import Button from "./task2";
import Link from "./task4";


const SmartButton = ({isButton, textButton, onClick, href, textLink, isUnderlined}) => {

    return (
        <>
            {isButton ?
            <Button text={textButton} onClick={onClick}/> :
            <Link text={textLink} href={href} isUnderlined={isUnderlined}/>}
        </>
    )
}

SmartButton.propTypes = {
    isButton: PropTypes.bool.isRequired,
    textButton: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    href: PropTypes.string.isRequired,
    textLink: PropTypes.string,
    isUnderlined: PropTypes.bool
}

export default SmartButton