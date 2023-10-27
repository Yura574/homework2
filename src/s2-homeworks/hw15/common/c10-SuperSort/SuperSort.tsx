import React from 'react'
import bottomIcon from  './bottom.svg'
import topIcon from  './top.svg'

// добавить в проект иконки и импортировать
const downIcon = bottomIcon
const upIcon = topIcon
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    console.log(up)
    console.log(sort)
    return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {

    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
        console.log(value)
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <div style={{display: 'flex', flexDirection:'column', width:'8px'}}>
                <img src={topIcon} alt=""/>
                <img src={bottomIcon} alt=""/>
            </div>
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt={'sort'}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
