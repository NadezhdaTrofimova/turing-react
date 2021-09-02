// 5. Напишите функциональный компонент UnorderedList, который занимается отрисовкой неупорядоченного списка <ul>. У него будет один пропс - listItems, принимающий массив строк. На основе listItems генерируйте <li> внутри <ul>, затем определите PropTypes для компонента в целом.

import PropTypes from 'prop-types'


const UnorderedList = ({listItems}) => {

    return (
        <ul>
            {listItems.map(
                (listItems, index)=>
                    <li key={index}>{listItems}</li>
            )}
        </ul>
    )
}

UnorderedList.propTypes = {
    listItems: PropTypes.array,
}

export default UnorderedList